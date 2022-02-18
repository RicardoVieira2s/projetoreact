import React from 'react'
import { Card, CardContent, Grid, CardActions, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import GameImage from './gameCardImages/hpGameCardImageBig'
import { COLOR_BDAZZLED_BLUE, COLOR_OXFORD_BLUE, COLOR_PLATINIUM } from '../color'
import { BORDER_RADIUS_5PX } from '../border'
import WishlistButton from '../wishlistButton'
import CartButton from '../cartButton'
import StarsReview from '../starsReview'

export default function GameCardMedium({ game }) {
    function renderGamePrice() {
        let gamePrice
        if (game.price === 0) {
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
                        GRATUITO!
                    </Typography>

                </Grid>
            )
        } else if (game.discount === 0) {
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
            gamePrice = game.price - (game.price * game.discount)
            return (
                <Box
                    style={{
                        width: '100%',
                        paddingRight: '8px',
                        color: COLOR_BDAZZLED_BLUE,
                    }}
                >
                    <Grid>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            style={{
                                alignItems: 'center',
                            }}>
                            <Grid item xs={12} style={{ maxWidth: "70%", textAlign: 'right', paddingRight: '20px' }}>
                                <Grid>
                                    <Typography
                                        sx={{
                                            textOverflow: "ellipsis",
                                            overflow: "hidden",
                                            color: COLOR_PLATINIUM,
                                            fontSize: '25px',
                                            backgroundColor: COLOR_OXFORD_BLUE,
                                            padding: "2px 15px 2px 15px",
                                            borderRadius: BORDER_RADIUS_5PX
                                        }}
                                        variant="p"
                                    >
                                        -{game.discount * 100}%
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} style={{ maxWidth: "30%", textAlign: 'right' }}>
                                <Grid container >
                                    <Grid item xs={12}>
                                        <Typography
                                            sx={{
                                                textOverflow: "ellipsis",
                                                overflow: "hidden",
                                                color: COLOR_BDAZZLED_BLUE,
                                                fontSize: '13px',
                                                textDecoration: 'line-through',
                                            }}
                                            variant="p"
                                        >
                                            €{game.price.toFixed(2)}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography
                                            sx={{
                                                textOverflow: "ellipsis",
                                                overflow: "hidden",
                                                color: COLOR_BDAZZLED_BLUE,
                                                fontSize: '20px'
                                            }}
                                            variant="p"
                                        >
                                            €{gamePrice.toFixed(2)}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            )
        }

    }


    return (
        <CardContent>
            <Card
                sx={{
                    maxWidth: '400px',
                    borderRadius: BORDER_RADIUS_5PX,
                }}
            >
                <a href={"/gamepage/" + game.id}>
                    <GameImage
                        cover_image={game.coverImage}
                    />
                </a>
                <CardActions
                    style={{
                        position: 'relative',
                        backgroundColor: COLOR_PLATINIUM,
                        height: '80px',
                        padding: '5px 15px 15px 15px',
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
                                <a href={"/gamepage/" + game.id}>
                                        <Typography
                                            sx={{
                                                textOverflow: "ellipsis",
                                                overflow: 'hidden',
                                                maxWidth: '290px',
                                                color: COLOR_BDAZZLED_BLUE,
                                                fontSize: '20px',
                                            }}
                                            variant="p"
                                        >
                                            {game.name}
                                        </Typography>
                                    </a>
                                </Grid>
                                <Grid item xs={6}
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