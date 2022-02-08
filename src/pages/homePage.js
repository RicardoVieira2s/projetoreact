import React, { Component } from 'react'
import { Banner } from '../components/floatingBar/banner'
import RecomendedGames from '../components/recomendedGames/recomendedGames'
import GamesOnSale from '../components/gamesOnSale/gamesOnSale'
import DiscoverGames from '../components/discoverGames/discoverGames'
import { yourStore } from '../api'

class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        yourStore.yourStoreGet({ id: 'ac7bd7f5-9678-4a2b-af28-c3e65c8aceae' }, (error, data) => {

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