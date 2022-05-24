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
    console.log(results, 'movie');
  }

  useEffect(() => {
    getMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div>
      <form>
        <label>
          Search movie by title:
          <input>
          </input>
        </label>
      </form>
      <MovieList movies={movies}/>
    </div>
  );
}
