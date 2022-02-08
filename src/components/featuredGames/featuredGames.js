import React, { Component } from 'react'
import { COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE } from '../utils/color'
import GameCardMedium from '../utils/gameCard/gameCardMedium'
import { Grid } from '@mui/material'
import Title from '../utils/Title'
import { makeStyles } from '@material-ui/core/styles'
import { storeApi } from '../../api'

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: COLOR_OXFORD_BLUE,
        color: COLOR_BDAZZLED_BLUE,
        paddingBottom: '40px',
        height: '100%'
    },
}))

class FeaturedGames extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: [],
            isLoaded: false,

        }
    }

    componentDidMount() {
        storeApi.noteworthyStoreGet(null, (error, data) => {
            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.');
            }

            this.setState({
                isLoaded: true,
                games: data.noteworthy,
            })
            
        });
    }

    render() {

        var { games, isLoaded } = this.state;

        if (!isLoaded) {
            return null
        }

        return (
            <div className={useStyles.container} >
                <Title
                    name={'Destaques'}
                    color={COLOR_SHADOW_BLUE}
                />
                <Grid
                    container
                    alignItems={'center'}
                    justifyContent={'center'}
                >

                    {games.map((game) => {
                        if (game.state !== "inactive") {
                            return <GameCardMedium key={game.id} game={game} />
                        }
                        return null
                    }
                    )}
                </Grid>
            </div >
        )

    }
}

export default FeaturedGames;
