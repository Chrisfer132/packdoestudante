const apiKey = 'pub_527109fa53787275a1ada16540647418bdc4b';  // Your new API key
        const newsContainer = document.getElementById('news-container');
    
        async function fetchNews() {
            try {
                const response = await fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&country=br&language=pt`);
                const data = await response.json();
    
                if (data.results.length === 0) {
                    newsContainer.innerHTML = '<p>Nenhuma notícia encontrada no momento.</p>';
                } else {
                    data.results.forEach(article => {
                        if (article.title && article.link && article.image_url) {
                            const newsItem = document.createElement('div');
                            newsItem.className = 'news-item';
                            newsItem.innerHTML = `
                                <p>${article.title}</p>
                                <img src="${article.image_url}" 
                                    onerror="this.src='link_da_imagem_alternativa'" 
                                    alt="Imagem da notícia">
                                <a href="${article.link}" target="_blank">Leia mais</a>
                            `;
                            newsContainer.appendChild(newsItem);
                        }
                    });
                }
            } catch (error) {
                console.error('Erro ao buscar as notícias:', error);
                newsContainer.innerHTML = '<p>Erro ao carregar as notícias. Por favor, tente novamente mais tarde.</p>';
            }
        }
    
        fetchNews();