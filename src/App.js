import './App.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import TopBar from './components/topBar/topBar'
import accountPage from './pages/accountPage'
import libraryPage from './pages/libraryPage'
import cartPage from './pages/cartPage'
import wishlistPage from './pages/wishlistPage'
import { Footer } from './components/footer/footer'
import gamePage from './pages/gamePage'
import homePage from './pages/homePage'
import newStorePage from './pages/newStorePage'
import featuredPage from './pages/featuredPage'
import statisticsPage from './pages/statisticsPage'
import Login from './pages/login'
import Register from './pages/register'
import Cookies from 'universal-cookie';
import { clientApi, walletApi, cartApi } from './api'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      client: null,
      games: null,
      clientWallet: null,
      isLoaded: false,
    }
  }

  componentDidMount() {

    let cookie = new Cookies().get('clientID');

    if (cookie !== undefined) {


      clientApi.clientGet({ id: cookie }, (error, data) => {


        if (error) {
          console.error(error);
        } else {
          console.log('API called successfully.');
        }

        this.setState({
          client: data,
        });
      });

      walletApi.walletGet({ id: cookie }, (error, data) => {

        if (error) {
          console.error(error);
        } else {
          console.log('API called successfully.');
        }
        this.setState({
          clientWallet: data,
        });
      });

      cartApi.cartGet({ id: cookie }, (error, data) => {

        if (error) {
          console.error(error);
        } else {
          console.log('API called successfully.');
        }

        this.setState({
          isLoaded: true,
          games: data,
        })
      });
    }
  }

  render() {
    var { client, clientWallet, games } = this.state
    //console.log("client app",client)
    return (
      <Router>
        <TopBar
          user={client}
          userCart={games}
          wallet={clientWallet}
        />
        <div className='content-body'>
          <Switch>
            <Route
              path="/" component={homePage} exact />
            <Route
              path="/News" component={newStorePage} exact />
            <Route
              path="/featured" component={featuredPage} exact />
            <Route
              path="/statistics" component={statisticsPage} exact />
            <Route
              path="/account" component={accountPage} exact />
            <Route
              path="/cart" component={cartPage} exact />
            <Route
              path="/library" component={libraryPage} exact />
            <Route
              path="/wishlist" component={wishlistPage} exact />
            <Route
              path="/gamepage" component={gamePage} exact />
            <Route
              path="/login" component={Login} exact />
            <Route
              path="/register" component={Register} exact />
          </Switch>
        </div>
        <Footer />
      </Router>
    )
  }
}

export default (App)