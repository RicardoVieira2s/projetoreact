import React from 'react'
import { CardHeader, Grid } from '@mui/material'
import './wishList.css'
import DividerPages from '../utils/dividerPages'

export default function WishList(props) {
    return (
        <div class="wishListContentor">
            <CardHeader
                title="Lista de desejos"
                titleTypographyProps={{
                    variant: 'p',
                }}
                sx={{ marginLeft: '16px', paddingTop: '40px', fontSize: '40px' }}
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