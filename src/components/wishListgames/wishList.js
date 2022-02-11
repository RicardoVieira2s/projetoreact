import React, { Component } from 'react'
import Title from '../utils/Title'
import { COLOR_SHADOW_BLUE,COLOR_PLATINIUM, COLOR_BDAZZLED_BLUE } from '../utils/color'
import { Grid, Box, Button } from '@mui/material'
import RenderIfEmpty from '../utils/messageError'
import WishlistGames from './wishlistGames'
import { wishlistApi } from '../../api'
import { withStyles } from '@material-ui/core/styles'
import { BORDER_RADIUS_5PX } from '../utils/border'
import Cookies from 'universal-cookie'

const useStyles = theme => ({
    button: {
        backgroundColor: COLOR_BDAZZLED_BLUE,
        color: COLOR_PLATINIUM,
        '&:hover': {
            backgroundColor: COLOR_BDAZZLED_BLUE,
            color: COLOR_PLATINIUM,
        },
        borderRadius: BORDER_RADIUS_5PX,
        fontFamily: 'Viga',
        height: '40px',
    }
})
class WishList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: [],
            isLoaded: false,

        }
    }

    componentDidMount() {

        let clientId = new Cookies().get('clientID')

        wishlistApi.wishlistGet(clientId, (error, data) => {

            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.')
            }

            this.setState({
                isLoaded: true,
                games: data,
            })
        });
    }

    deleteAllGamesFromWishList() {
        let clientId = new Cookies().get('clientID')
        wishlistApi.wishlistDelete(clientId, null, (error, data) => {
            if (error) {
                console.error(error)
            } else {
                console.log('API called successfully.')
            }
        });
        document.location.href = "/wishlist"
    }

    render() {
        const { classes } = this.props
        const { games, isLoaded } = this.state

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        return (
            <div style={{
                paddingBottom: "40px",
            }}>
                <Title
                    name={'Lista de desejos'}
                    color={COLOR_SHADOW_BLUE}
                />
                <Box style={{
                    paddingTop: '15px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: "90%",
                }}>
                    <Button
                        className={classes.button}
                        onClick={e => this.deleteAllGamesFromWishList()}
                    >
                        Remover todos
                    </Button>
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
}

export default withStyles(useStyles)(WishList)