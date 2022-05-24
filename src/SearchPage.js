import React from 'react';
import { useState, useEffect } from 'react';
import { searchMovies } from './services/fetch-utils';

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
  }, [query]);

  return (
    <div>
      {movies.map((movie, i) => 
        <div key={i}>
          {movie.original_title}
        </div>
      )}
    </div>
  );
}
