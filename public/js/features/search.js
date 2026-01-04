// features/search.js
import { fetchGames } from '../api/rawg.js';
import { createGameCard } from '../components/gameCard.js';

const input = document.getElementById('searchInput');
const clearIcon = document.querySelector('.clear-icon');
const results = document.getElementById('searchResults');

let debounceTimer;

function clearResults() {
  if (results) results.innerHTML = '';
}

if (input) {
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);

    const q = input.value.trim();

    if (q.length < 2) {
      clearResults();
      return;
    }

    debounceTimer = setTimeout(async () => {
      try {
        const data = await fetchGames(`search=${q}`);
        results.innerHTML = data.results
          .slice(0, 5)
          .map(createGameCard)
          .join('');
      } catch (err) {
        console.error('Erro no search:', err);
      }
    }, 400);
  });
}

clearIcon?.addEventListener('click', () => {
  input.value = '';
  clearResults();
});

document.addEventListener('click', (e) => {
  if (!results.contains(e.target) && e.target !== input) {
    clearResults();
  }
});
/* Click and open */
document.addEventListener('click', (e) => {
  const card = e.target.closest('.game-card');
  if (!card) return;

  const id = card.dataset.id;
  if (!id) return;

  openGameModal(id);
});
