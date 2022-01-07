import React from 'react'
import { CardHeader, Grid } from '@mui/material'
import './wishList.css'
import DividerPages from '../utils/dividerPages'

export default function WishList(props) {
    return (
        <div class="wishListContentor">
            <CardHeader
                titleTypographyProps={{ variant: 'h4' }}
                title="Lista de desejos"
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