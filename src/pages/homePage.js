import React from 'react'
import { Banner } from '../components/floatingBar/banner'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import RecomendedGames from '../components/recomendedGames/recomendedGames'
import GamesOnSale from '../components/gamesOnSale/gamesOnSale'
import DiscoverGames from '../components/discoverGames/discoverGames'
import NewGames from '../components/newGames/newGames'
import { Link } from 'react-router-dom'

const Homepage = () => {

    return (
        
        <Router>
             
            <Banner />
            
            <Redirect to="/home" />
            <Switch>
                <Route path="/home" exact >
                    <RecomendedGames/>
                    <GamesOnSale/>
                    <DiscoverGames/> 
                   
                </Route>

                <Route path="/news" >
                    <NewGames/>
                </Route>
            </Switch>
        </Router>


    )
}

export default Homepage