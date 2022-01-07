import React from 'react'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_1, BORDER_RADIUS_2, BORDER_RADIUS_3 } from '../utils/border'
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
                        height: '380px',
                    }}
                >
                    <GameImage
                        cover_image={game.cover_image}
                    />
                    <CardActions>
                        <Grid
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                height: '60px',
                            }}
                        >
                            <Typography
                                sx={{ pl: 2, flex: 1 }}
                                variant="p"
                            >
                                {game.name}
                            </Typography>
                            <IconButton>
                                <DownloadIcon />
                            </IconButton>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>
        </CardContent>
    )
}

