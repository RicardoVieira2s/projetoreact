import React from 'react'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_1, BORDER_RADIUS_2, BORDER_RADIUS_3 } from '../utils/border'
import { CardHeader, Divider, Grid } from '@mui/material'
import LibraryGame from './libraryGame'

export default function GameList(props) {

    return (
        <div>
            <CardHeader
                title="Biblioteca"
            />
            <Divider sx={{ fontSize: "50px", width: "100%", marginBottom: '30px' }} />
            <Grid
                container
                alignItems={'center'}
                justifyContent={'center'}
                display={'flex'}
            >
                <LibraryGame />
            </Grid>
        </div>
    )
}
