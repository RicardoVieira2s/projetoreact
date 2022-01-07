import React from 'react'
import { COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE } from '../utils/color'
import LibraryGame from './libraryGames'
import games from '../__mocks__/games'
import { Grid } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import Title from '../title/Title'

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: COLOR_OXFORD_BLUE,
        color: COLOR_BDAZZLED_BLUE,
        paddingBottom: '40px',
    },
}))

export default function GameList(props) {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Title 
                name = {'Biblioteca'}
                color = {COLOR_SHADOW_BLUE}
            />
            <Grid
                container
                alignItems={'center'}
                justifyContent={'center'}
                display={'flex'}
            >
                {games.map((game) =>
                    <LibraryGame key={game.id} game={game} />
                )}
            </Grid>
        </div >
    )
}
