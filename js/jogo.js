function filterGames(category) {
    const games = document.querySelectorAll('.game-card');

    games.forEach(game => {
        if (category === 'todos' || game.dataset.category === category) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
}
