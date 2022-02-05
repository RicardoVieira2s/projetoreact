import React, { Component } from 'react'
import Title from '../utils/Title'
import { COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import RenderIfEmpty from '../utils/messageError'
import CartListGames from './cartListGames'
import { Typography, Grid } from '@mui/material'
import { Item } from '@mui-treasury/components/flex'
import CustomButton from '../utils/customButton'
import { gameApi } from '../../api'

class CartList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        gameApi.gameGet(null, (error, data) => {

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
        var { games, isLoaded } = this.state;

        if (!isLoaded) {
            return null
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
                    {games.map((game, i) =>
                        <CartListGames key={game.id} game={game} index={i + 1} />
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
                                Total: €
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={5} sm={5} md={5} lg={5}>
                        <Item
                            textAlign={"center"}
                        >
                            <CustomButton
                                name={"Comprar"}
                            />
                        </Item>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default CartList