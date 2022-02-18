import React, { Component } from 'react'
import { Banner } from '../components/floatingBar/banner'
import FeaturedGames from '../components/featuredGames/featuredGames'
import Cookies from 'universal-cookie'
import { yourStoreApi } from '../api'

class featuredPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        let cookies = new Cookies().get('clientID');

        if (cookies === undefined) {
            cookies = null
        }

        yourStoreApi.yourStoreGet({ id: cookies }, (error, data) => {

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
            <>
                <Banner games={games.featured} />
                <FeaturedGames />
            </>
        )
    }
}

export default featuredPage