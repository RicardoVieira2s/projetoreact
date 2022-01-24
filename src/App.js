import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import TopBar from './components/topBar/topBar'
import AccountPage from './pages/accountPage'
import LibraryPage from './pages/libraryPage'
import CartPage from './pages/cartPage'
import wishlistPage from './pages/wishlistPage'
import { Footer } from './components/footer/footer'
import gamePage from './pages/gamePage'
import { Banner } from './components/floatingBar/banner'
import RecomendedGames from './components/recomendedGames/recomendedGames'
import GamesOnSale from './components/gamesOnSale/gamesOnSale'
import DiscoverGames from './components/discoverGames/discoverGames'
import NewGames from './components/newGames/newGames'
import FeaturedGames from './components/featuredGames/featuredGames'

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
      <div className='content-body'>
        <Switch>
          <Route path="/" >
            <Banner />
            <Switch>
              <Route path="/home" exact >
                <RecomendedGames />
                <GamesOnSale />
                <DiscoverGames />
              </Route>
              <Route path="/news" >
                <NewGames />
              </Route>
              <Route path="/featured" >
                <FeaturedGames />
              </Route>
            </Switch>
          </Route>
          <Route
            path="/account" component={AccountPage} exact />
          <Route
            path="/cart" component={CartPage} exact />
          <Route
            path="/library" component={LibraryPage} exact />
          <Route
            path="/wishlist" component={wishlistPage} exact />
          <Route
            path="/gamepage" component={gamePage} exact />
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}

export default App