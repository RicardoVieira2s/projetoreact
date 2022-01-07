import React from 'react'
import { CardHeader, Grid } from '@mui/material'
import './cartGames.css'
import DividerPages from '../utils/dividerPages'

export default function CartList(props) {
    return (
        <div class="cartContentor">
            <CardHeader
                title="Carrinho"
                titleTypographyProps={{
                    variant: 'p',
                }}
                sx={{ marginLeft: '16px', paddingTop: '40px', fontSize: '40px'}}
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
