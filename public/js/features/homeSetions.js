// features/homeSections.js
import { fetchGames } from '../api/rawg.js';
import { createGameCard } from '../components/gameCard.js';

export async function loadReleases() {
  const data = await fetchGames('ordering=-released&page_size=10');
  const container = document.querySelector('.slide-inline-01');

  container.innerHTML = data.results.map(createGameCard).join('');
}
export async function loadRecommended() {
  const data = await fetchGames('ordering=-rating&page_size=10');
  document.querySelector('.slide-inline-01:last-of-type').innerHTML =
    data.results.map(createGameCard).join('');
}
