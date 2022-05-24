import { client } from './client';

export async function getUser() {
  return client.auth.session();
}

export async function signUpUser(email, password) {
  ///revisit email/password arguments --- may need curlies
  const response = await client.auth.signUp(email, password);

  return response;
}

export async function signInUser(email, password) {
  const response = await client.auth.signIn(email, password);

  return response;
}

export async function logout() {
  await client.auth.signOut();

  return (window.location.href = '../');
}

export async function getWatchList() {
  const response = await client
    .from('watchedMovies')
    .select('*');

  return response;
}

export async function getWatchedMovies() {
  const response = await client
    .from('watchedMovies')
    .select('*')
    .is('watched', true);
  
  return response;
}

export async function addToWatchList(movie) {
  const response = await client
    .from('watchedMovies')
    .insert(movie);
  
  return response;
}

export async function updateWatchStatus(id, watchStatus) {
  const response = await client
    .from('watchedMovies')
    .update({ watched: watchStatus })
    .match({ id })
    .single();

  return response;
}


export async function getSingleWatchedMovie(id) {
  const response = await client
    .from('watchedMovies')
    .select('*');

  return response;
}
