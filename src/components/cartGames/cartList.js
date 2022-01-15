import React from 'react'
import { Grid } from '@mui/material'
import './cartGames.css'
import { COLOR_SHADOW_BLUE } from '../utils/color'
import Title from '../title/Title'

export default function CartList(props) {
    return (
        <div class="cartContentor">
            <Title
                name={'Carrinho'}
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
