// components/gameCard.js
export function createGameCard(game) {
  const price = game.metacritic
    ? `R$ ${(game.metacritic * 0.8).toFixed(2)}`
    : 'Grátis';

  return `
    <article class="game-card" data-id="${game.id}">
      <img src="${game.background_image}" alt="${game.name}">
      
      <div class="game-info">
        <h3>${game.name}</h3>

        <div class="rating"><ion-icon name="star"></ion-icon> ${
          game.rating
        }</div>

        <div class="platforms">
          ${game.platforms
            ?.slice(0, 3)
            .map((p) => p.platform.name)
            .join(', ')}
        </div>

        <div class="price">${price}</div>
      </div>
    </article>
  `;
}
