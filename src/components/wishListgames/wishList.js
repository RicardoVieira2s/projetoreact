import React from 'react'
import Title from '../utils/Title'
import { COLOR_SHADOW_BLUE } from '../utils/color'
import { Grid } from '@mui/material'
import RenderIfEmpty from '../utils/messageError'
import games from '../__mocks__/games'
import WishlistGames from './wishlistGames'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    container: {
        paddingBottom: "40px",
    },
}))

export default function WishList(props) {
    const classes = useStyles()
    return (
        <div className={classes.container}>
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
                {RenderIfEmpty(games.length, "Sem jogos na wishlist")}
                {games.map((game, i) =>
                    <WishlistGames key={game.id} game={game} index={i+1} />
                )}
            </Grid>
        </div>
    )
}