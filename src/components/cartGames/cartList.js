import React from 'react'
import Title from '../utils/Title'
import { makeStyles } from '@material-ui/core/styles'
import { COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import RenderIfEmpty from '../utils/messageError'
import games from '../__mocks__/games'
import CartListGames from './cartListGames'
import { Typography, Grid } from '@mui/material'
import { Item } from '@mui-treasury/components/flex'
import CustomButton from '../utils/customButton'

const useStyles = makeStyles(() => ({
    container: {
        paddingBottom: "40px",
    },
    total: {
        marginTop: "30px",
        color: COLOR_PLATINIUM,
    }
}))

export default function CartList(props) {
    const classes = useStyles()
    return (
        <div className={classes.container}>
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
                className={classes.total}
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
                            Total:
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
