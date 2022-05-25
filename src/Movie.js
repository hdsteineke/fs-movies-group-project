import React from 'react';
import { addToWatchList } from './services/supabase-utils';

export default function Movie({ title, poster_path, overview, id }) {
  async function handleClick() {
    const movieItem = {
      title: title,
      movie_id: id,
      overview: overview,
      poster_path: poster_path
    };

    await addToWatchList(movieItem);
  }

  return (
    <div className="movie">
      <h3 className="movie-title">{title}</h3>
      <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
      <p>{overview}</p>
      <button onClick={handleClick}>Add to Watched List</button>
    </div>
  );
}
