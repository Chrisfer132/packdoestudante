const books = [
    { title: 'Macunaima', genre: 'classicos', file: '/livros/macunaima_o_heroi_sem_nenhuma_capa.pdf' },
    { title: 'A República - Platão', genre: 'filosofia', file: 'https://eniopadilha-com-br.usrfiles.com/ugd/5ca0e9_25f5954b7b7a4a76892d3650ec0cd36c.pdf' },
    { title: 'O Banquete - Platão', genre: 'filosofia', file: 'https://web.archive.org/web/20201026221745/http://revistaliteraria.com.br/PlataoOBanquete.pdf' },
    { title: 'Confissões – Santo Agostinho', genre: 'religiao', file: 'https://img.cancaonova.com/noticias/pdf/277537_SantoAgostinho-Confissoes.pdf' },
    { title: 'Apologia de Sócrates – Platão', genre: 'filosofia', file: 'https://domainpublic.wordpress.com/wp-content/uploads/2022/01/plataoapologia.pdf' },
    { title: 'Dom Casmurro – Machado de Assis', genre: 'literaturabr', file: 'https://livraria-camara-leg.usrfiles.com/ugd/5ca0e9_77426ca451ec4f60b14af67f925f038e.pdf' },
    { title: 'O Alienista – Machado de Assis', genre: 'literatura', file: 'https://5ca0e999-de9a-47e0-9b77-7e3eeab0592c.usrfiles.com/ugd/5ca0e9_634cd7437373422587ffdcd13f5782ce.pdf' },
    { title: 'O Cortiço – Aluísio Azevedo', genre: 'literaturabr', file: 'https://camara-leg-br.usrfiles.com/ugd/5ca0e9_4bd76b96516a40fba87370e6bcec72f8.pdf' },
    { title: 'Memórias Póstumas de Brás Cubas – Machado de Assis', genre: 'literatura', file: 'https://5ca0e999-de9a-47e0-9b77-7e3eeab0592c.usrfiles.com/ugd/5ca0e9_4f0243f83ea945ed98bfa7570d3b743c.pdf' },
    { title: 'Iracema – José de Alencar', genre: 'literaturabr', file: 'https://domainpublic.wordpress.com/wp-content/uploads/2022/01/iracema.pdf' },
    { title: '1984 – George Orwell', genre: 'literaturaes', file: 'https://multimidia.gazetadopovo.com.br/media/info/2022/202209/1984/e-book-1984.pdf' },
    { title: 'A Revolução dos Bichos – George Orwell', genre: 'literaturaes', file: 'https://multimidia.gazetadopovo.com.br/media/info/2021/202110/bichos/revolucao-dos-bichos.pdf' },
    { title: 'O Pequeno Príncipe – Antoine de Saint-Exupéry', genre: 'infantil', file: 'https://5ca0e999-de9a-47e0-9b77-7e3eeab0592c.usrfiles.com/ugd/5ca0e9_4f0dc25362284aa6b917c93a1e1708ba.pdf' },
    { title: 'Fábulas de Esopo', genre: 'infantil', file: 'https://5ca0e999-de9a-47e0-9b77-7e3eeab0592c.usrfiles.com/ugd/5ca0e9_9d14cf05e29049499fb3fdeecdc698c9.pdf' },
    { title: 'Rapunzel – Irmãos Grimm', genre: 'infantil', file: 'https://domainpublic.wordpress.com/wp-content/uploads/2022/03/rapunzel.pdf' },
    { title: 'O Rouxinol e o Imperador – Hans Andersen', genre: 'infantil', file: 'https://5ca0e999-de9a-47e0-9b77-7e3eeab0592c.usrfiles.com/ugd/5ca0e9_c94e4e73cf284f419181ae3d6478420a.pdf' },
];

function renderBooks(filteredBooks) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    filteredBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <button onclick="downloadBook('${book.file}')">Ler Livro</button>
        `;
        bookList.appendChild(bookItem);
    });
}

function downloadBook(file) {
    const link = document.createElement('a');
    link.href = file;
    link.download = file;
    link.click();
}

document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
    renderBooks(filteredBooks);
});

document.getElementById('filter').addEventListener('change', (e) => {
    const genre = e.target.value;
    const filteredBooks = genre === 'todos' ? books : books.filter(book => book.genre === genre);
    renderBooks(filteredBooks);
});

// Inicialize com todos os livros
renderBooks(books);