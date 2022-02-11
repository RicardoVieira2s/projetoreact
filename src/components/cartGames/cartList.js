import React, { Component } from 'react'
import Title from '../utils/Title'
import { COLOR_SHADOW_BLUE, COLOR_PLATINIUM, COLOR_BDAZZLED_BLUE } from '../utils/color'
import RenderIfEmpty from '../utils/messageError'
import CartListGames from './cartListGames'
import { Typography, Grid, Button } from '@mui/material'
import { Item } from '@mui-treasury/components/flex'
import { cartApi } from '../../api'
import { withStyles } from '@material-ui/core/styles'
import { BORDER_RADIUS_5PX } from '../utils/border'
import Cookies from 'universal-cookie'

const useStyles = theme => ({
    buttonBuy: {
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
});

class CartList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        let clientId = new Cookies().get('clientID')

        cartApi.cartGet(clientId, (error, data) => {

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

    buyGamesFromCart() {
        let clientId = new Cookies().get('clientID')

        cartApi.cartPurchaseGet(clientId, (error, data) => {
            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.')
            }
        });
        document.location.href = "/library"
    }

    deleteAllGamesFromCart() {
        let clientId = new Cookies().get('clientID')

        cartApi.cartDelete(clientId, null, (error, data) => {
            if (error) {
                console.error(error)
            } else {
                console.log('API called successfully.')
            }
        });
        document.location.href = "/cart"
    }

    render() {
        const { classes } = this.props

        const { games, isLoaded } = this.state
        let total = 0

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        return (
            <div style={{
                paddingBottom: "40px",
            }}>
                <Title
                    name={'Carrinho'}
                    color={COLOR_SHADOW_BLUE}
                />
                <Grid item xs={12} sm={12} md={12} lg={12}
                    container
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Grid item xs={7} sm={7} md={7} lg={7}>

                    </Grid>
                    <Grid item xs={5} sm={5} md={5} lg={5}>
                        <Item
                            textAlign={"center"}
                        >
                            <Button
                                className={classes.buttonBuy}
                                onClick={e => this.deleteAllGamesFromCart()}
                            >
                                Remover todos
                            </Button>
                        </Item>
                    </Grid>
                </Grid>
                <Grid
                    container
                    alignItems={'center'}
                    justifyContent={'center'}
                    display={'flex'}
                >
                    {RenderIfEmpty(games.length, "Sem jogos no carrinho")}
                    {games.map((game, i) => {
                        total += game.price * (1 - game.discount)
                        return <CartListGames key={game.id} game={game} index={i + 1} />
                    }
                    )}
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}
                    style={{
                        marginTop: "30px",
                        color: COLOR_PLATINIUM,
                    }}
                    container
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Grid item xs={7} sm={7} md={7} lg={7}>
                        <Item
                            textAlign={"right"}
                        >
                            <Typography
                                component={'p'}
                            >
                                Total: €{total.toFixed(2)}
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={5} sm={5} md={5} lg={5}>
                        <Item
                            textAlign={"center"}
                        >
                            <Button
                                className={classes.buttonBuy}
                                onClick={e => this.buyGamesFromCart()}
                            >
                                Comprar
                            </Button>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(useStyles)(CartList)