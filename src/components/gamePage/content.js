import React, { Component } from 'react'
import Title from '../utils/Title'
import { COLOR_SHADOW_BLUE } from '../utils/color'
import MoreAbout from './moreAbout';
import AboutGame from './aboutGame';
import Reviews from './reviews';
import { gameApi, publisherApi, reviewApi } from '../../api'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            game: null,
            publisher: null,
            publisherGames: null,
            tags: null,
            reviews: null,
        }
    }
    componentDidMount() {

        gameApi.gameGet({ id: "5d1ae5b3-a6e8-46ff-ba96-ef15f489cc65" }, (error, data) => {

            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.')
            }

            this.setState({
                game: data[0],
            })
        })


        publisherApi.publisherGet({ id: "0d4f55b9-af11-44e2-8324-686437956bd6" }, (error, data) => {

            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.')
            }

            this.setState({
                publisher: data[0],
            })
        })

        publisherApi.publisherGamesGet("0d4f55b9-af11-44e2-8324-686437956bd6", (error, data) => {

            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.')
            }

            this.setState({
                isLoaded: true,
                publisherGames: data,
            })
        })

        gameApi.gameTagGet("5d1ae5b3-a6e8-46ff-ba96-ef15f489cc65", (error, data) => {

            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.')
            }

            this.setState({
                isLoaded: true,
                tags: data,
            })
        })

        reviewApi.gameReviewsGet("5d1ae5b3-a6e8-46ff-ba96-ef15f489cc65", (error, data) => {

            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.')
            }

            this.setState({
                isLoaded: true,
                reviews: data,
            })
        })
    }

    render() {

        var { isLoaded, game, publisher, publisherGames, tags, reviews } = this.state
        if (!isLoaded) {
            return <div>Loading....</div>
        }

        return (
            <div>
                <Title
                    name={'Nome do jogo: ' + game.name}
                    color={COLOR_SHADOW_BLUE}
                />

                <AboutGame game={game} publisher={publisher} tags={tags}/>

                <Title
                    name={'Mais jogos da publicadora: ' + publisher.name}
                    color={COLOR_SHADOW_BLUE}
                />

                <MoreAbout publisherGames={publisherGames} />

                <Title
                    name={'Avaliações'}
                    color={COLOR_SHADOW_BLUE}
                />

                <Reviews reviews={reviews}/>
            </div >
        )
    }
}

export default Content