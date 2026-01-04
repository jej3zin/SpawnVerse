// components/modal.js
import { fetchGameById } from '../api/rawg.js';

const modal = document.getElementById('gameModal');
const content = modal.querySelector('.modal-content');
const btnClose = document.getElementById('icon-close');

export async function openGameModal(id) {
  if (!modal || !content) return;

  // abre modal imediatamente
  modal.classList.add('open');

  // loader enquanto busca
  content.innerHTML = `
    <div class="modal-loader"></div>
  `;

  try {
    const game = await fetchGameById(id);

    content.innerHTML = `
      <div class="wrapper-modal">
        <div class="modal-boximg">
          <img src="${game.background_image || ''}" alt="${game.name}">
        </div>

        <div class="modal-infos">
          <header class="modal-header">
            <h2>${game.name}</h2>

            <div class="rating">
              <ion-icon name="star"></ion-icon> ${game.rating}
            </div>
          </header>

          <main class="modal-content">
            <div class="modal-main-header">
              <h3>${game.subtitle || 'Sem subtítulo'}</h3>
            </div>

            <p>${game.description_raw || 'Sem descrição disponível.'}</p>
          </main>

          <strong>Plataformas:</strong>
          ${game.platforms?.map((p) => p.platform.name).join(', ') || 'N/A'}

          <br />

          <strong>Metacritic:</strong> ${game.metacritic ?? 'N/A'}
        </div>
      </div>
    `;
  } catch (err) {
    console.error(err);
    content.innerHTML = `<p>Erro ao carregar o jogo 😬</p>`;
  }
}

/* ================= FECHAR MODAL ================= */

function closeModal() {
  modal.classList.remove('open');
}

/* Botão fechar */
btnClose?.addEventListener('click', (e) => {
  e.stopPropagation(); // evita conflito com click fora
  closeModal();
});

/* click fora do conteúdo */
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

/* ESC */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    closeModal();
  }
});
