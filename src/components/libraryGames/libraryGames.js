import React from 'react'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../utils/color'
import GameImage from './GameImage'
import DownloadIcon from '@mui/icons-material/Download'
import { Card, CardContent, Grid, CardActions, IconButton, Typography } from '@mui/material'

export default function libraryGame({ game }) {

    return (
        <CardContent>
            <Grid
                item
                xs={12}
                md={12}
                lg={12}
            >
                <Card
                    sx={{
                        maxWidth: '400px',
                    }}
                >
                    <GameImage
                        cover_image={game.cover_image}
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
                                    pl: 2,
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
                        <IconButton style={{
                            right: 0,
                            position: 'absolute',
                            marginRight: '12px',
                            color: COLOR_BDAZZLED_BLUE,
                        }}>
                            <DownloadIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </CardContent >
    )
}

