import React from 'react';
import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { getWatchList } from './services/supabase-utils';

export default function WatchedPage() {
  const [watchList, setWatchList] = useState([]);

  async function getWatchListInfo() {
    const { data } = await getWatchList();
    console.log('test', data);
    setWatchList(data);
  }

  useEffect(() => {
    getWatchListInfo();
    console.log('watchlist', watchList);
  }, []);

  return (
    <div>
      <MovieList movies={watchList}/>
    </div>
  );
}
