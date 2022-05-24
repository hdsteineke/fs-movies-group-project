import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from './services/supabase-utils';
import './AuthPage.css';

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
    <header className="header-links">
      <ul>
        <li>
          <NavLink exact to={'/search'}>
            Search
          </NavLink>
        </li>
        <br></br>
        <li>
          <NavLink exact to={'/watched'}>
            Watch List
          </NavLink>
        </li>
        <br></br>
        <li>
          <button className="buttons" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </header>
  );
}
