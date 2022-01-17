import React from 'react'
import Title from '../utils/Title'
import { COLOR_SHADOW_BLUE, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE } from '../utils/color'
import { makeStyles } from '@material-ui/core/styles'
import games from '../../components/__mocks__/games'
import LibraryGame from '../utils/gameCard/hpGameCardBig'

import { Grid, } from '@mui/material'

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: COLOR_OXFORD_BLUE,
        color: COLOR_BDAZZLED_BLUE,
        paddingBottom: '40px',
        height: '100%'
    },
    cardGames:{
        paddingLeft: '0px'
    }
}))

export default function RecomendedGames() {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Title
                name={'Recomendados'}
                color={COLOR_SHADOW_BLUE}
            />
            <Grid
                container
                alignItems={'center'}
                justifyContent={'center'}
            >
                {games.map((game) => {
                    if (game.state !== "inactive") {
                        return <LibraryGame key={game.id} game={game} />
                    }
                }
                )}
            </Grid>


        </div>
    )
}