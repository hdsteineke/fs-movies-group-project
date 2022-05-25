import React from 'react';
import { useState, useEffect } from 'react';
import { searchMovies } from './services/fetch-utils';
import MovieList from './MovieList';


export default function SearchPage() {
  const [query, setQuery] = useState('jaws');
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const { results } = await searchMovies(query);
    setMovies(results);
  }

  useEffect(() => {
    getMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    getMovies();
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
      <MovieList movies={movies}/>
    </div>
  );
}
