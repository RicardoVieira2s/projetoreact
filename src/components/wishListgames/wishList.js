import React from 'react'
import './wishList.css'
import Title from '../title/Title'
import { COLOR_SHADOW_BLUE } from '../utils/color'
import { Grid } from '@mui/material'

export default function WishList(props) {
    return (
        <div class="wishListContentor">
            <Title
                name={'Lista de desejos'}
                color={COLOR_SHADOW_BLUE}
            />
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