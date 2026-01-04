const API_KEY = 'cd87911f69b04bac8f60f6614791e733';
const BASE_URL = 'https://api.rawg.io/api';

export async function fetchGames(params = '') {
  const res = await fetch(`${BASE_URL}/games?key=${API_KEY}&${params}`);
  if (!res.ok) throw new Error('RAWG morreu');
  return res.json();
}

export async function fetchGameById(id) {
  const res = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);
  return res.json();
}
