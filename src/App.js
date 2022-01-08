import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TopBar from './components/topBar/topBar'
import Home from './pages/homePage'
import AccountPage from './pages/accountPage'
import LibraryPage from './pages/libraryPage'
import CartPage from './pages/cartPage'
import wishlistPage from './pages/wishlistPage'
import { Footer } from './components/footer/footer'

function App() {
  const user = { name: "Ricardo" }
  const cart = { count: 4 }
  const balance = { amount: 12, coin: '€' }

  return (
    <Router>
      <TopBar
        userAccount={user}
        userCart={cart}
        userBalance={balance}
      />
      <div class='content-body'>
        <Switch>
          <Route
            path="/" component={Home} exact />
          <Route
            path="/account" component={AccountPage} exact />
          <Route
            path="/cart" component={CartPage} exact />
          <Route
            path="/library" component={LibraryPage} exact />
          <Route
            path="/wishlist" component={wishlistPage} exact />
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}

export default App