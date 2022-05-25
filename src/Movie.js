import React from 'react';

export default function Movie({ title, poster_path, overview }) {
  return (
    <div className="movie">
      <h3 className="movie-title">{title}</h3>
      <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
      <p>{overview}</p>
      <button>Add to Watch List</button>
    </div>
  );
}
