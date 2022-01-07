import React from 'react'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_1, BORDER_RADIUS_2, BORDER_RADIUS_3 } from '../utils/border'
import LibraryGame from './libraryGames'
import games from '../__mocks__/games'
import { CardHeader, Grid, Container } from '@mui/material'
import DividerPages from '../utils/dividerPages'
import { makeStyles } from '@material-ui/core/styles'

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
            <CardHeader
                title="Biblioteca"
                titleTypographyProps={{
                    variant: 'p',
                }}
                sx={{
                    marginLeft: '16px',
                    paddingTop: '40px',
                    fontSize: '40px',
                    color: COLOR_SHADOW_BLUE
                }}
            />
            <DividerPages />
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
