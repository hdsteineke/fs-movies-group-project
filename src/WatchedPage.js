import React from 'react';
import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { getWatchList } from './services/supabase-utils';

export default function WatchedPage() {
  const [watchList, setWatchList] = useState([]);

  async function getWatchListInfo() {
    const { data } = await getWatchList();
    setWatchList(data);
  }

  useEffect(() => {
    getWatchListInfo();
  }, []);

  return (
    <div>
      <MovieList movies={watchList}/>
    </div>
  );
}
