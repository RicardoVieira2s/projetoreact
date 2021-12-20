import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AccountPage from './pages/AccountPage';
import LibraryPage from './pages/LibraryPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/" component={Home} exact />
        <Route
          path="/account" component={AccountPage} exact />
        <Route
          path="/library" component={LibraryPage} exact />
      </Switch>
    </Router>
  );
}

export default App;