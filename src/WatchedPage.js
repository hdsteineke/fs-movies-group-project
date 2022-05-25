import React from 'react';
import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { getWatchList } from './services/supabase-utils';

export default function WatchedPage() {
  const [watchList, setWatchList] = useState([]);

  async function getWatchedMoviesInfo() {
    const { data } = await getWatchList();
    setWatchList(data);
  }

  function isWatchListed(id) {
    const watched = watchList.find(item => Number(item.id) === Number(id));

    return Boolean(watched);
  }

  useEffect(() => {
    getWatchedMoviesInfo();
  }, []);

  return (
    <div>
      <h1 className='movie-title'>My Watch List</h1>
      <MovieList movies={watchList} getWatchedMoviesInfo={getWatchedMoviesInfo} isWatchListed={isWatchListed}/>
    </div>
  );
}
