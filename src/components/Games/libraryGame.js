import React from 'react'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_1, BORDER_RADIUS_2, BORDER_RADIUS_3 } from '../utils/border'
import DownloadIcon from '@mui/icons-material/Download'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Card, CardContent, Grid } from '@mui/material'

export default function libraryGame(props) {

    return (
        <CardContent>
                <Grid
                    item
                    md={12}
                    xs={12}
                    lg={12}
                >
                    <Card
                        sx={{
                            maxWidth: '400px',
                            height: '380px',
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="300"
                            image= "https://wallpaperaccess.com/full/147192.jpg"
                            alt=""
                            sx={{
                                '&:hover, &:focus': {
                                    transform: 'scale(1.05)',
                                    transition: 'all .2s ease-in-out',
                                },
                            }}
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
                                    sx={{ pl: 2 }}
                                    variant="p"
                                >
                                    Counter Strike Global Offensive
                                </Typography>
                                <IconButton style={{ right: '-25px' }}>
                                    <DownloadIcon />
                                </IconButton>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
        </CardContent>
    )
}