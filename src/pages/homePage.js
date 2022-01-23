import React from 'react'
import { Banner } from '../components/floatingBar/banner'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RecomendedGames from '../components/recomendedGames/recomendedGames'
import GamesOnSale from '../components/gamesOnSale/gamesOnSale'
import DiscoverGames from '../components/discoverGames/discoverGames'

const homePage = () => {

    return (
        <>
            <Banner />
            <Switch>
                <Route path="/" >
                    <RecomendedGames/>
                    <GamesOnSale />
                    <DiscoverGames />
                </Route>
                {/* <Route
                    path="/account" component={AccountPage} exact />
                <Route
                    path="/cart" component={CartPage} exact />
                <Route
                    path="/library" component={LibraryPage} exact />
                <Route
                    path="/wishlist" component={wishlistPage} exact />
                <Route
                    path="/gamepage" component={gamePage} exact /> */}
            </Switch>
            {/* <GamesOnSale />
            <DiscoverGames /> */}

        </>
    )
}

export default homePage