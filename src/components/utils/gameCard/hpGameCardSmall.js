import React from 'react'
import { Card, CardContent, Grid, CardActions, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import GameImage from './gameCardImages/hpGameCardImageBig'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../color'
import { BORDER_RADIUS_5PX } from '../border'
import WishlistButton from '../wishlistButton'
import CartButton from '../cartButton'
import StarsReview from '../starsReview'

export default function GameCardSmall({ game }) {

    function renderGamePrice() {
        console.log(game.discount)
        let gamePrice
        if (game.discount === 0) {
            gamePrice = game.price
            return (
                <Grid
                    item xs={6}
                    sx={{
                        textAlign: 'right',
                        paddingRight: '8px'
                    }}
                >
                    <Typography
                        sx={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            maxWidth: '290px',
                            color: COLOR_BDAZZLED_BLUE,
                            fontSize: '20px',
                            justifyContent: 'flex-end',
                        }}
                        variant="p"
                    >
                        €{gamePrice}
                    </Typography>

                </Grid>
            )
        } else {
            gamePrice = game.price + (game.price * game.discount)
            return (
                <Grid
                    sx={{
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        textAlign: 'right',
                        paddingRight: '8px'
                    }}
                >
                    <Grid
                        sx={{
                            width: '100%',
                            height: '50%',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            textAlign: 'right',
                        }}
                    >
                        <Grid item xs={6}
                            textAlign={'right'}
                        >
                            <Typography
                                sx={{
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",
                                    maxWidth: '290px',
                                    color: COLOR_BDAZZLED_BLUE,
                                    fontSize: '13px',
                                    textDecoration: 'line-through'
                                }}
                                variant="p"
                            >
                                €{gamePrice.toFixed(2)}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        sx={{
                            width: '100%',
                            height: '50%',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            textAlign: 'right',
                        }}
                    >
                        <Grid item xs={6}
                            textAlign={'right'}
                        >
                            <Typography
                                sx={{
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",
                                    maxWidth: '290px',
                                    color: COLOR_BDAZZLED_BLUE,
                                    fontSize: '20px'
                                }}
                                variant="p"
                            >
                                €{game.price}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            )
        }

    }

    return (
        <CardContent
            style={{
                padding: '0px 0px 0px 0px'
            }}
        >
            <Card
                sx={{
                    width: '100%',
                    borderRadius: BORDER_RADIUS_5PX,
                }}
            >
                <GameImage
                    cover_image={game.coverImage}
                />
                <CardActions
                    style={{
                        position: 'relative',
                        backgroundColor: COLOR_PLATINIUM,
                        padding: '5px 15px',
                        height: '80px',
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
                                }}
                            >
                                <Grid item xs={8}>
                                    <Typography
                                        sx={{
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
                                    <StarsReview gameId={game.id} />
                                </Grid>
                            </Grid>
                            <Grid
                                sx={{
                                    width: '100%',
                                    height: '50%',
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                }}
                            >
                                <Grid item xs={6}
                                    textAlign={'left'}
                                >
                                    <WishlistButton gameId={game.id} />
                                    <CartButton gameId={game.id} />
                                </Grid>
                                {renderGamePrice(game)}
                            </Grid>
                        </Grid>
                    </Box>
                </CardActions>
            </Card>
        </CardContent >
    )
}