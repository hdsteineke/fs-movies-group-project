import React from 'react';
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

function App() {
    
  return (
    <Router>
      <div>
        <Header />
    
        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/watched">
            <WatchedPage />
          </Route>
          <Route exact path="/">
            <AuthPage />
          </Route>
        </Switch>
      </div>
    </Router>
    
    

  );
}

export default App;
