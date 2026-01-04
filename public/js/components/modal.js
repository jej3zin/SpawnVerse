// components/modal.js
import { fetchGameById } from '../api/rawg.js';

export async function openGameModal(id) {
  const game = await fetchGameById(id);

  const modal = document.getElementById('gameModal');
  modal.classList.add('open');

  modal.innerHTML = `
    <div id="gameModal" class="modal">
      <div class="modal-content">
        <img src="${game.background_image || 'Sem imagem disponível.'}">
        <h2>${game.name}</h2>
        <p>${game.description_raw || 'Sem descrição disponível.'}</p>


        <strong>Plataformas:</strong>
        ${game.platforms.map((p) => p.platform.name).join(', ')}

        <strong>Metacritic:</strong> ${game.metacritic ?? 'N/A'}
        </div>
    </div>
  `;
}
