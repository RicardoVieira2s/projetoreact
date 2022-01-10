import React from 'react'
import { Link } from 'react-router-dom'
import { COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE } from '../utils/color'
import LibraryGame from './libraryGames'
import games from '../__mocks__/games'
import { Grid } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import Title from '../title/Title'
import RenderIfEmpty from '../utils/messageError'

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: COLOR_OXFORD_BLUE,
        color: COLOR_BDAZZLED_BLUE,
        paddingBottom: '40px',
        height: '100%'
    },
}))

export default function GameList(props) {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Title
                name={'Biblioteca'}
                color={COLOR_SHADOW_BLUE}
            />
                <Grid
                    container
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    {RenderIfEmpty(games.length, "Sem jogos na biblioteca")}
                    {games.map((game) =>
                        <LibraryGame key={game.id} game={game} />
                    )}
                </Grid>
        </div >
    )
}

//<Link to="/gamepage"> <Link>