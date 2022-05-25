export async function searchMovies(query) {
  const response = await fetch(`/.netlify/functions/movies?query=${query}`);

  const data = await response.json();

  return data;
}