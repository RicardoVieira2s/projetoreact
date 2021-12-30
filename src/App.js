import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import AccountPage from './pages/accountPage';
import LibraryPage from './pages/libraryPage';


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