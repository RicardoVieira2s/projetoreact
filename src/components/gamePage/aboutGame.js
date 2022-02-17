import React, { Component } from 'react'
import { gameApi } from '../../api'
import { CardContent, CardActions, Typography, Card, CardHeader, CardMedia, Grid } from '@mui/material'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../utils/color'
import WishlistButton from '../utils/wishlistButton'
import CartButton from '../utils/cartButton'
import StarsReview from '../utils/starsReview'
import { dateToString } from '../utils/date'

class AboutGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: null,
            tags: null,
            isLoaded: false,
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
        });

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
        });

    }

    getPublisher(){
        let idpublisher = this.state.game.idpublisher
    }

    render() {

        var { isLoaded, game, tags } = this.state
        console.log("dsadas", game)
        console.log("dasdasad", tags)

        if (!isLoaded) {
            return <div>Loading....</div>
        }
        var gamePrice = game.price - (game.price * game.discount)
        return (
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Card sx={{
                    maxWidth: 500,
                    backgroundColor: COLOR_PLATINIUM,
                    cursor: "pointer",
                }}>
                    <CardHeader
                        title={game.name}
                        subheader="colocar tags aqui"
                    />
                    <CardMedia
                        component="img"
                        height="300"
                        image={game.coverImage}
                        alt=""
                    />
                    <CardContent>
                        <Typography
                            sx={{
                                paddingLeft: "13px",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                maxWidth: '290px',
                                color: COLOR_BDAZZLED_BLUE,
                                fontSize: '20px'
                            }}
                            variant="p"
                        >
                            Preço: €{game.price}
                        </Typography>
                        <Typography
                            sx={{
                                paddingLeft: "13px",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                maxWidth: '290px',
                                color: COLOR_BDAZZLED_BLUE,
                                fontSize: '20px'
                            }}
                            variant="p"
                        >
                            Desconto: {game.discount * 100}%
                        </Typography>
                        <Typography
                            sx={{
                                paddingLeft: "13px",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                maxWidth: '290px',
                                color: COLOR_BDAZZLED_BLUE,
                                fontSize: '20px'
                            }}
                            variant="p"
                        >
                            Total: {gamePrice.toFixed(2)}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography
                            sx={{
                                paddingLeft: "13px",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                maxWidth: '290px',
                                color: COLOR_BDAZZLED_BLUE,
                                fontSize: '20px'
                            }}
                            variant="p"
                        >
                            Data de lancamento: {dateToString(game.releaseDate)}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <WishlistButton />
                        <CartButton />
                    </CardActions>
                </Card>
            </Grid>
        )
    }
}
export default AboutGame