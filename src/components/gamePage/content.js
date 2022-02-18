import React, { Component } from 'react'
import Title from '../utils/Title'
import { COLOR_PLATINIUM, COLOR_SHADOW_BLUE } from '../utils/color'
import MoreAbout from './moreAbout';
import AboutGame from './aboutGame';
import { clientApi, gameApi, publisherApi, reviewApi } from '../../api'
import GameReviews from '../utils/gameReviews'
import Cookies from 'universal-cookie';
import { ReviewSchema } from '../../api/src';

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
            myReview: null,
        }
    }

    componentDidMount() {
        if (this.props.gameId === undefined || this.props.gameId === null) {
            return
        }
        let gameId = this.props.gameId
        let publisherId = null

        gameApi.gameGet({ id: gameId }, (error, data) => {

            if (error) {
                console.error(error);
                return
            }

            this.setState({
                game: data[0],
            })

            publisherId = data[0].idPublisher

            publisherApi.publisherGet({ id: publisherId }, (error, data) => {

                if (error) {
                    console.error(error);
                    return
                }

                this.setState({
                    publisher: data[0],
                })

                publisherApi.publisherGamesGet(publisherId, (error, data) => {
                    if (error) {
                        console.error(error);
                        return
                    }

                    this.setState({
                        publisherGames: data,
                    })

                    gameApi.gameTagGet(gameId, (error, data) => {

                        if (error) {
                            console.error(error);
                            return
                        }

                        this.setState({
                            tags: data,
                        })

                        reviewApi.gameReviewsGet(gameId, (error, data) => {

                            if (error) {
                                console.error(error);
                                return
                            }

                            data.forEach((d, index, obj) => {
                                clientApi.clientGet({ id: d.idClient }, (error, clients) => {
                                    if (error) {
                                        obj.splice(index, 1);
                                        console.error(error)

                                    } else {
                                        d.client = clients[0]
                                    }
                                })
                            })

                            setTimeout(() => {
                                let idClient = new Cookies().get("clientID")

                                if (idClient === undefined || idClient === null) {
                                    this.setState({
                                        isLoaded: true,
                                        reviews: data,
                                        myReview: null,
                                    })
                                } else {
                                    let myReview = new ReviewSchema()
                                    myReview.stars = 0
                                    myReview.review = ""

                                    data.forEach((d, index, obj) => {
                                        if (d.idClient === idClient) {
                                            myReview = d
                                            obj.splice(index, 1);
                                        }
                                    })

                                    this.setState({
                                        isLoaded: true,
                                        reviews: data,
                                        myReview: myReview,
                                    })
                                }
                            }, 100)
                        })
                    })
                })
            })
        })
    }

    render() {
        var { isLoaded, game, publisher, publisherGames, tags, reviews, myReview } = this.state
        if (!isLoaded) {
            return <div>Loading....</div>
        }
        return (
            <div >
                <Title
                    name={game.name}
                    color={COLOR_SHADOW_BLUE}
                />

                <AboutGame game={game} publisher={publisher} tags={tags} />

                <Title
                    name={'Mais jogos da publicadora ' + publisher.name}
                    color={COLOR_SHADOW_BLUE}
                />

                <MoreAbout publisherGames={publisherGames} gameId={game.id} />

                <Title
                    name={'Avaliações'}
                    color={COLOR_SHADOW_BLUE}
                />
                <GameReviews reviews={reviews} myReview={myReview} />
            </div >
        )
    }
}

export default Content