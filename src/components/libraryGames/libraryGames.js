import React from 'react'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../utils/color'
import GameImage from './GameImage'
import { Card, CardContent, Grid, CardActions, Typography } from '@mui/material'
import { BORDER_RADIUS_5PX } from '../utils/border'
import renderDownloadButton from '../utils/downloadButton'

export default function libraryGame({ game }) {
    
    return (
        <CardContent>
            <Grid item>
                <Card
                    sx={{
                        width: '400px',
                        borderRadius: BORDER_RADIUS_5PX,
                    }}
                >
                    <GameImage
                        cover_image={game.coverImage}
                    />
                    <CardActions style={{ position: 'relative', backgroundColor: COLOR_PLATINIUM }}>
                        <Grid
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                height: '60px',
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
                        {renderDownloadButton(game.state, game.downloadLink, game.releaseDate)}
                    </CardActions>
                </Card>
            </Grid>
        </CardContent >
    )
}