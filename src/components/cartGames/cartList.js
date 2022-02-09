import React, { Component } from 'react'
import Title from '../utils/Title'
import { COLOR_SHADOW_BLUE, COLOR_PLATINIUM, COLOR_BDAZZLED_BLUE } from '../utils/color'
import RenderIfEmpty from '../utils/messageError'
import CartListGames from './cartListGames'
import { Typography, Grid } from '@mui/material'
import { Item } from '@mui-treasury/components/flex'
import { cartApi } from '../../api'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@mui/material'
import { BORDER_RADIUS_5PX } from '../utils/border'

const useStyles = theme => ({
    buttonBuy: {
        backgroundColor: COLOR_BDAZZLED_BLUE,
        color: COLOR_PLATINIUM,
        ':hover': {
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
        cartApi.cartGet({ id: "eeae714d-cf5a-419d-bcb6-a1e91a16de67" }, (error, data) => {

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

    buyGamesFromCart() {
        cartApi.cartPurchaseGet("eeae714d-cf5a-419d-bcb6-a1e91a16de67", (error, data) => {
            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.');
            }
        });
        window.location.reload()
    }

    render() {
        const { classes } = this.props;

        var { games, isLoaded } = this.state;
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
                                Total: €{total}
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