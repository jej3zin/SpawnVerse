// features/search.js
import { fetchGames } from '../api/rawg.js';
import { createGameCard } from '../components/gameCard.js';

const input = document.getElementById('searchInput');
const clearIcon = document.querySelector('.clear-icon');
const results = document.getElementById('searchResults');

let debounceTimer;

if (input) {
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);

    const q = input.value.trim();

    if (q.length < 2) {
      results.innerHTML = '';
      clearResults();
      return;
    }

    debounceTimer = setTimeout(async () => {
      const data = await fetchGames(`search=${input.value}`);
      results.innerHTML = data.results.slice(0, 5).map(createGameCard).join('');
    }, 400);
  });
}

clearIcon?.addEventListener('click', () => {
  input.value = '';
  clearResults();
});

document.addEventListener('click', (e) => {
  if (!resultsBox.contains(e.target) && e.target !== input) {
    clearResults();
  }
});
