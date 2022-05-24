import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import SearchPage from './SearchPage.js';
import WatchedPage from './WatchedPage.js';
import AuthPage from './AuthPage.js';
import { Redirect } from 'react-router-dom';
import { getUser } from './services/supabase-utils';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getUser();
    if (userData) {
      setUser(userData);
    }
  }, []);
    
  return (
    <Router>
      <div>
        <Header setUser={setUser} />
    
        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/search">
            { user ? <SearchPage /> : <AuthPage setUser={setUser}/>}
          </Route>
          <Route exact path="/watched">
            { user ? <WatchedPage /> : <AuthPage setUser={setUser}/>}
          </Route>
          <Route exact path="/">
            {user
              ? <Redirect to="/search"/>
              : <AuthPage setUser={setUser}/>}
          </Route>
        </Switch>
      </div>
    </Router>
    
    

  );
}

export default App;
