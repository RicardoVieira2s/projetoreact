import React, { Component } from 'react'
import { COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE } from '../utils/color'
import LibraryGame from './libraryGames'
import { Grid } from '@mui/material'
import Title from '../utils/Title'
import RenderIfEmpty from '../utils/messageError'
import { libraryApi } from '../../api'
import { withStyles } from '@material-ui/core/styles'

const useStyles = theme => ({
    container: {
        backgroundColor: COLOR_OXFORD_BLUE,
        color: COLOR_BDAZZLED_BLUE,
        paddingBottom: '40px',
        height: '100%'
    },
});

class GameList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        libraryApi.libraryGet({ id: "eeae714d-cf5a-419d-bcb6-a1e91a16de67" }, (error, data) => {

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

        const { classes } = this.props;
        var { isLoaded, games } = this.state;

        if (!isLoaded) {
            return <div>Loading....</div>
        }

        return (
            <div className={classes.container} >
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

export default withStyles(useStyles)(GameList)