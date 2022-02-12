import React, { Component } from 'react'
import { gameApi } from '../../api'
import { Card, CardContent, Grid, CardActions, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../utils/color'
import WishlistButton from '../utils/wishlistButton'
import CartButton from '../utils/cartButton'
import StarsReview from '../utils/starsReview'
import CardMedia from '@mui/material/CardMedia'

class AboutGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: null,
            isLoaded: false,
        }
    }

    componentDidMount() {

        gameApi.gameGet({ id: "d8714590-8060-4e52-9ed3-b1499e49e62d" }, (error, data) => {

            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.')
            }

            this.setState({
                isLoaded: true,
                game: data[0],
            })
        });

    }

    render() {

        var { isLoaded, game } = this.state;

        if (!isLoaded) {
            return <div>Loading....</div>
        }
        return (
            <CardContent
                sx={{
                    maxWidth: "auto",
                    cursor: "pointer",
                }}
            >
                <Grid item lg={6} sx={12}>
                    <CardMedia
                        component="img"
                        height="500px"
                        image={game.coverImage}
                        alt=""
                    />
                    <CardActions
                        style={{
                            position: 'relative',
                            backgroundColor: COLOR_PLATINIUM,
                            padding: '0px',
                            height: '100px'
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%'
                            }}
                        >
                            <Grid
                                container
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    height: '100%'
                                }}
                            >
                                <Grid
                                    sx={{
                                        width: '100%',
                                        height: '50%',
                                        display: 'flex',
                                        justifyContent: 'space-evenly',
                                        alignItems: 'center',
                                        paddingRight: '20px'
                                    }}
                                >
                                    <Grid item xs={8}>
                                        <Typography
                                            sx={{
                                                paddingLeft: "13px",
                                                textOverflow: "ellipsis",
                                                overflow: 'hidden',
                                                maxWidth: '290px',
                                                color: COLOR_BDAZZLED_BLUE,
                                                fontSize: '27px'
                                            }}
                                            variant="p"
                                        >
                                            {game.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}
                                        sx={{
                                            textAlign: 'right',
                                        }}
                                    >
                                        <StarsReview ratingValue={game.rate} />
                                    </Grid>
                                </Grid>
                                <Grid
                                    sx={{
                                        width: '100%',
                                        height: '50%',
                                        display: 'flex',
                                        justifyContent: 'space-evenly',
                                        alignItems: 'center',
                                        paddingRight: '20px'
                                    }}
                                >
                                    <Grid item xs={6}
                                        textAlign={'left'}
                                    >
                                        <WishlistButton />
                                        <CartButton />
                                    </Grid>
                                    <Grid item xs={6}
                                        textAlign={'right'}
                                    >
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
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardActions>
                </Grid>
            </CardContent >
        )
    }
}
export default AboutGame