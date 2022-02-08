import React, { Component } from 'react'
import { Banner } from '../components/floatingBar/banner'
import RecomendedGames from '../components/recomendedGames/recomendedGames'
import GamesOnSale from '../components/gamesOnSale/gamesOnSale'
import DiscoverGames from '../components/discoverGames/discoverGames'
import { yourStoreApi } from '../api'

class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        yourStoreApi.yourStoreGet({ id: '803fa231-8b7d-4b3c-8aee-a43bd17da8d4' }, (error, data) => {

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
    render() {

        var { isLoaded, games } = this.state;

        if (!isLoaded) {
            return <div>Loading....</div>
        }
        return (
            <div>
                <Banner />
                <RecomendedGames games={games.recommended} />
                <GamesOnSale games={games.specialOffers} /> 
                <DiscoverGames games={games.discover} />
            </div >
        )
    }
}

export default Homepage;