import React, { Component } from 'react'
import { COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE } from '../utils/color'
import LibraryGame from './libraryGames'
import { Grid } from '@mui/material'
import Title from '../utils/Title'
import RenderIfEmpty from '../utils/messageError'
import { makeStyles } from '@material-ui/core/styles'
import { gameApi } from '../../api'


const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: COLOR_OXFORD_BLUE,
        color: COLOR_BDAZZLED_BLUE,
        paddingBottom: '40px',
        height: '100%'
    },
}))

//export default function GameList() {
class GameList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: [],
            isLoaded: false,

        }
    }

    componentDidMount() {
        gameApi.gameGet(null, (error, data, response) => {

            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.');
            }

            this.setState({
                isLoaded: true,
                games: data,
            })
        });
    }

    render() {

        var { isLoaded, games } = this.state;

        console.log(this.state);

        if (!isLoaded) {
            return <div>Loading....</div>
        }
        else {
            return (
                <div className={useStyles.container} >
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
    }
}

export default GameList;
