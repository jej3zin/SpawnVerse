// js/main.js
import './layout/header.js';
import './components/loader.js';
import './features/search.js';
import { loadReleases, loadRecommended } from './features/homeSections.js';

document.addEventListener('click', (e) => {
  const card = e.target.closest('.game-card');
  if (!card) return;

  openGameModal(card.dataset.id);
});

loadReleases();
loadRecommended();
