import React from 'react'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../color'
import GameImage from './gameCardImages/hpGameCardImageBig'
import { Card, CardContent, Grid, CardActions, Typography } from '@mui/material'
import { BORDER_RADIUS_3 } from '../border'
import renderDownloadButton from '../downloadButton'

export default function GameCardBig({ game }) {

    return (
        <CardContent
        style={{ padding: '0px 0px 0px 0px ' }}
        >
                <Card
                    sx={{
                        width: '100%',
                        borderRadius: BORDER_RADIUS_3,
                    }}
                >
                    <GameImage
                        cover_image={game.cover_image}
                    />
                    <CardActions style={{ position: 'relative', backgroundColor: COLOR_PLATINIUM, 
                            padding: '0px'}}>
                        <Grid
                            sx={{
                                alignItems: 'left',
                                display: 'flex',
                                height: '80px',
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
                                {game.name}
                            </Typography>

                        </Grid>
                        {renderDownloadButton(game.state, game.download_link, game.release_date)}
                    </CardActions>
                </Card>
        </CardContent >
    )
}

