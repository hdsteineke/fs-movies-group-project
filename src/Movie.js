import React from 'react';

export default function Movie({ title, poster_path, overview }) {
  return (
    <div className='movie'>
      <h3>{title}</h3>
      <img src={poster_path} />
      <p>{overview}</p>
      <button>Add to Watched List</button>
    </div>
  );
}
