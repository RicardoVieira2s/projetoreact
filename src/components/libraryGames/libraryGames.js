import React from 'react'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../utils/color'
import GameImage from './GameImage'
import DownloadIcon from '@mui/icons-material/Download'
import { Card, CardContent, Grid, CardActions, IconButton, Typography } from '@mui/material'
import { BORDER_RADIUS_3 } from '../utils/border'

function renderDownloadButton(state, url, releaseDate) {
    if (state === "active") {
        return <IconButton
            style={{
                right: 0,
                position: 'absolute',
                marginRight: '13px',
                color: COLOR_BDAZZLED_BLUE,
            }}
            onClick={() => window.open(url, "_blank")}
        >
            <DownloadIcon />
        </IconButton>
    }
    else {
        return <Typography
            sx={{
                paddingRight: "13px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                maxWidth: '290px',
                color: COLOR_BDAZZLED_BLUE,
                right: 0,
                position: 'absolute',
            }}
            variant="p"
        >
            {releaseDate}
        </Typography>
    }
}

export default function libraryGame({ game }) {

    return (
        <CardContent>
            <Grid>
                <Card
                    sx={{
                        maxWidth: '400px',
                        borderRadius: BORDER_RADIUS_3,
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
            </Grid>
        </CardContent >
    )
}

