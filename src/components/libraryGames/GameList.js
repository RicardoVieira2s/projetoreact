import React from 'react'
import { COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE } from '../utils/color'
import LibraryGame from './libraryGames'
import { Grid } from '@mui/material'
import Title from '../utils/Title'
import RenderIfEmpty from '../utils/messageError'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: COLOR_OXFORD_BLUE,
        color: COLOR_BDAZZLED_BLUE,
        paddingBottom: '40px',
        height: '100%'
    },
}))

export default function GameList() {

    var GoofrStore = require('../../api/src/index');

    var api = new GoofrStore.AccessApi()
    var body = new GoofrStore.ClientAccessSchema(true, "vieiraricardo@gmail.com"); // {ClientAccessSchema} 
    var clientID = "51fa48cf-dc2e-4942-b703-8c980d6b821d"; // {String} Client ID

    var callback = function (error, data, response) {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully.');
        }
    };
    api.accessPut(body, clientID, callback);

    var games = []

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
                {games.map((game) => {
                    if (game.state !== "inactive") {
                        return <LibraryGame key={game.id} game={game} />
                    }
                    return null
                }
                )}
            </Grid>
        </div >
    )
}
