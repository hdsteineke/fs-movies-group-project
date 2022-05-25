import React from 'react';
import { addToWatchList } from './services/supabase-utils';

export default function Movie({ title, poster_path, overview, id, getWatchedMoviesInfo, isWatchListed }) {
  const watchListed = isWatchListed(id);
  async function handleClick() {
    const movieItem = {
      title: title,
      movie_id: id,
      overview: overview,
      poster_path: poster_path
    };

    await addToWatchList(movieItem);
    await getWatchedMoviesInfo();
  }

  return (
    <div className={`movie ${watchListed ? 'watchListed' : null }`}>
      <h3 className="movie-title">{title}</h3>
      <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
      <p>{overview}</p>
      { watchListed ? null : <button onClick={handleClick}>Add to Watched List</button>}
    </div>
  );
}
