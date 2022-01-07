import React from 'react'
import { CardHeader, Grid } from '@mui/material'
import './cartGames.css'
import DividerPages from '../utils/dividerPages'

export default function CartList(props) {
    return (
        <div class="cartContentor">
            <CardHeader
                titleTypographyProps={{ variant: 'h4' }}
                title="Carrinho"
            />
            <DividerPages />
            <Grid
                container
                alignItems={'center'}
                justifyContent={'center'}
                display={'flex'}
            >
                
            </Grid>
        </div>
    )
}
