import React from 'react'
import { Grid } from '@mui/material'
import Title from '../utils/Title'
import { makeStyles } from '@material-ui/core/styles'
import { COLOR_SHADOW_BLUE } from '../utils/color'

const useStyles = makeStyles(() => ({
    container:{

    },
}))

export default function CartList(props) {
    const classes = useStyles()
    return (
        <div className={classes.container}>
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
