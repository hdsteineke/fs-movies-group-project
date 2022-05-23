import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { logout } from './services/supabase-utils';

export default function Header({ setUser }) {
  /*const history = useHistory();
  const [value, setValue] = React.useState('recents');
  //return to handleChange if 'event' needs to be passed?
  function handleChange(newValue) {
    setValue(newValue);

    history.push(newValue);
  }*/

  async function handleLogout() {
    await logout();
    setUser(null);
  }

  return (
    <header>
      <NavLink exact to={'/search'}>
        Search
      </NavLink>
      <NavLink exact to={'/watched'}>
        Watch List
      </NavLink>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
}
