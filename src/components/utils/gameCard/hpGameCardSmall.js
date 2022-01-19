import React from 'react'
import { Card, CardContent, Grid, CardActions, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import GameImage from './gameCardImages/hpGameCardImageBig'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../color'
import { BORDER_RADIUS_3 } from '../border'
import WishlistButton from '../wishlistButton'
import CartButton from '../cartButton'
import StarsReview from '../starsReview'

export default function GameCardSmall({ game }) {

    return (
        <CardContent
            style={{ padding: '0px 0px 0px 0px ' }}>
            <Card
                sx={{
                    width: '100%',
                    borderRadius: BORDER_RADIUS_3,
                }}
            >
                <GameImage
                    cover_image={game.cover_image}
                />
                <CardActions style={{
                    position: 'relative', backgroundColor: COLOR_PLATINIUM,
                    padding: '0px'
                }}>
                    <Box sx={{ width: '100%' }} >
                        <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                            sx={{
                                // alignItems: 'left',
                                display: 'flex',
                                height: '80px',
                            }}
                        >
                            <Grid item xs={6}>
                                <Typography
                                    sx={{
                                        paddingLeft: "13px",
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        maxWidth: '290px',
                                        color: COLOR_BDAZZLED_BLUE,
                                    }}
                                    variant="p"
                                >
                                    {game.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}
                                sx={{
                                    textAlign: 'right'
                                }}
                            >
                                <StarsReview ratingValue={game.rate} />
                            </Grid>
                            <Grid item xs={6}>
                                <WishlistButton />
                                <CartButton />
                            </Grid>
                            <Grid item xs={6}
                                sx={{
                                    textAlign: 'right'
                                }}
                            >
                                <Typography
                                    sx={{
                                        paddingLeft: "13px",
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        maxWidth: '290px',
                                        color: COLOR_BDAZZLED_BLUE,
                                    }}
                                    variant="p"
                                >
                                    {game.price}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardActions>
            </Card>
        </CardContent >
    )
}

