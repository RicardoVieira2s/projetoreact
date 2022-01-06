import React from 'react'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_3 } from '../utils/border'
import DownloadIcon from '@mui/icons-material/Download'
import HomeIcon from '@mui/icons-material/Home'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export default function GameList() {

    return (
        <div>
            <Card
                sx={{ margin: '40px', padding: '20px' }}
            >
                <Typography variant='h5'>
                    Biblioteca
                </Typography>
            </Card>

            <Card
                sx={{
                    maxWidth: '200px',
                    height: '350px',
                    marginLeft: '80px'
                }}
            >
                <CardMedia
                    component="img"
                    height="300"
                    image="https://i.pinimg.com/originals/1e/4b/56/1e4b56e32a1ff04d2882a9799aa89c1f.jpg"
                    alt=""
                />
                <CardActions disableSpacing>
                    <IconButton
                        sx={{ }}
                    >
                        <DownloadIcon fontSize='small' />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}
