import React from 'react'
import Title from '../utils/Title'
import { COLOR_SHADOW_BLUE } from '../utils/color'
import { Grid, Box } from '@mui/material'
import RenderIfEmpty from '../utils/messageError'
import games from '../__mocks__/games'
import WishlistGames from './wishlistGames'
import { makeStyles } from '@material-ui/core/styles'
import CustomButton from '../utils/customButton'

const useStyles = makeStyles(() => ({
    container: {
        paddingBottom: "40px",
    },
    finalBox: {
        paddingTop: '15px',
        display: 'flex',
        justifyContent: 'flex-end',
        width: "90%",
    },
    total:{
        backgroundColor: "red",
    }
}))

export default function WishList(props) {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Title
                name={'Lista de desejos'}
                color={COLOR_SHADOW_BLUE}
            />
            <Box className={classes.finalBox}>
                <CustomButton
                    name={"Remover todos"}
                />
            </Box>
            <Grid
                container
                alignItems={'center'}
                justifyContent={'center'}
                display={'flex'}
            >
                {RenderIfEmpty(games.length, "Sem jogos na wishlist")}
                {games.map((game, i) =>
                    <WishlistGames key={game.id} game={game} index={i + 1} />
                )}
            </Grid>
        </div>
    )
}