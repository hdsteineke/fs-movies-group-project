import React from 'react';
import Movie from './Movie';

export default function MovieList({ movies, isWatchListed, getWatchedMoviesInfo }) {
  return (
    <div className='movie-list'>

      {movies.map((movie, i) => 
        <Movie key={`${movie.title}-${i}`}
          title={movie.title}
          poster_path={movie.poster_path}
          overview={movie.overview}
          id={movie.id}
          isWatchListed={isWatchListed}
          getWatchedMoviesInfo={getWatchedMoviesInfo}
        />

      )};
    </div>);
}
