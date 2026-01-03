// js/components/searchbar.js
const input = document.getElementById('searchInput');
const resultsBox = document.getElementById('searchResults');
const clearIcon = document.querySelector('.clear-icon');

let debounceTimer;

if (input) {
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);

    const q = input.value.trim();

    if (q.length < 2) {
      // busca só quando >=2 chars
      clearResults();
      return;
    }

    debounceTimer = setTimeout(() => search(q), 300);
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
