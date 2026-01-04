// components/loader.js
const preloader = document.getElementById('preloader');
const content = document.getElementById('content');

const MIN_TIME = 600; // tempo mínimo visível
const MAX_TIME = 3000; // tempo máximo (failsafe)

let done = false;
const start = Date.now();

function hideLoader() {
  if (done) return;
  done = true;

  preloader.classList.add('hide');
  content.classList.add('show');
}

// 1️ DOM pronto (não espera imagens)
document.addEventListener('DOMContentLoaded', () => {
  const elapsed = Date.now() - start;
  const delay = Math.max(MIN_TIME - elapsed, 0);
  setTimeout(hideLoader, delay);
});

// 2️ Failsafe: nunca passa disso
setTimeout(hideLoader, MAX_TIME);
