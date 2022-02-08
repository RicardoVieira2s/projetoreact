import React from 'react'
import { Card, CardContent, Grid, CardActions, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import GameImage from './gameCardImages/hpGameCardImageBig'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../color'
import { BORDER_RADIUS_5PX } from '../border'
import WishlistButton from '../wishlistButton'
import CartButton from '../cartButton'
import StarsReview from '../starsReview'

export default function GameCardMedium({ game }) {
    return (
        <CardContent>
            <Card
                sx={{
                    maxWidth: '400px',
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
                        height: '60px'
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
                                            fontSize: '20px',
                                            resize: 'both'
                                        }}
                                        variant="p"
                                    >
                                        {game.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}
                                    sx={{
                                        textAlign: 'right',
                                    }}
                                >
                                    <StarsReview ratingValue={game.rate} size="medium" />                                    
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
                                        €{game.price}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </CardActions>
            </Card>
        </CardContent >
    )
}