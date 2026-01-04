// features/homeSections.js
import { fetchGames } from '../api/rawg.js';
import { createGameCard } from '../components/gameCard.js';

export async function loadReleases() {
  const data = await fetchGames('ordering=-released&page_size=10');
  const container = document.getElementById('releases');
  if (!container) return;

  container.innerHTML = data.results.map(createGameCard).join('');
}

export async function loadRecommended() {
  const data = await fetchGames('ordering=-rating&page_size=10');
  const container = document.getElementById('recommended');
  if (!container) return;

  container.innerHTML = data.results.map(createGameCard).join('');
}
