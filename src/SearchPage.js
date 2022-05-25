import React from 'react';
import { useState, useEffect } from 'react';
import { searchMovies } from './services/fetch-utils';
import { getWatchList } from './services/supabase-utils';
import MovieList from './MovieList';


export default function SearchPage() {
  const [query, setQuery] = useState('a');
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

  async function getMovies() {
    const { results } = await searchMovies(query);
    setMovies(results);
  }

  async function getWatchedMoviesInfo() {
    const { data } = await getWatchList();
    setWatchedMovies(data);
  }

  useEffect(() => {
    getMovies();
    getWatchedMoviesInfo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    getMovies();
  }

  function isWatchListed(id) {
    const watched = watchedMovies.find(item => Number(item.movie_id) === Number(id));

    return Boolean(watched);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search movie by title:
          <input onChange={e => setQuery(e.target.value)}>
          </input>
        </label>
        <button>Search</button>
      </form>
      <MovieList movies={movies} isWatchListed={isWatchListed} getWatchedMoviesInfo={getWatchedMoviesInfo}/>
    </div>
  );
}
