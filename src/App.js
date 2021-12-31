import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopBar from './components/topBar/topBar';
import Home from './pages/home';
import AccountPage from './pages/accountPage';
import LibraryPage from './pages/libraryPage';

function App() {
  const user = { name: "Ricardo" };
  const cart = { count: 4 };
  return (
    <Router>
      <TopBar
        userAccount={user}
        userCart={cart}
      />
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