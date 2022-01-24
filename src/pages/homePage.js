import React from 'react'
import { Banner } from '../components/floatingBar/banner'
import RecomendedGames from '../components/recomendedGames/recomendedGames'
import GamesOnSale from '../components/gamesOnSale/gamesOnSale'
import DiscoverGames from '../components/discoverGames/discoverGames'

const Homepage = () => {

    return (
        <div>
            <Banner />
            <RecomendedGames />
            <GamesOnSale />
            <DiscoverGames />
        </div>
    )
}

export default Homepage