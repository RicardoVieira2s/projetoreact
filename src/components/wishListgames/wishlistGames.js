import React from 'react'
import { Typography } from '@mui/material'
import { Item } from '@mui-treasury/components/flex'
import { makeStyles } from '@material-ui/core/styles'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import games from '../__mocks__/games'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Grid from '@mui/material/Grid';
import { BORDER_RADIUS_2, BORDER_RADIUS_3 } from '../utils/border'
import { textAlign } from '@mui/system'


const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: COLOR_PLATINIUM,
        marginTop: "30px",
        width: "90%",
        borderRadius: BORDER_RADIUS_2,
        color: COLOR_OXFORD_BLUE,
    },
    imageBox: {
        height: "calc(100% - 20px)",
        maxWidth: "100%",
        marginTop: "10px",
        marginBottom: "10px",
        borderRadius: BORDER_RADIUS_3,
    },

}))

export default function WishlistGames({ game, index }) {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Grid
                container
                direction="row"
                alignItems="center"
                height={'100%'}
            >
                <Grid
                    item
                    xs={2}
                    sm={2}
                    md={2}
                    lg={1}
                >
                    <Item>
                        <Typography
                            component={'p'}
                            variant={'caption'}
                            textAlign={"left"}
                            paddingLeft={"50px"}
                        >
                            {index}
                        </Typography>
                    </Item>
                </Grid>

                <Grid
                    item
                    xs={10}
                    sm={10}
                    md={4}
                    lg={2}
                >
                    <Item
                        height={"110px"}
                        width={"100%"}
                        textAlign={"center"}
                    >
                        <img src={game.cover_image} alt="" className={classes.imageBox}></img>
                    </Item>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={3}
                >
                    <Item
                        paddingLeft={"50px"}
                    >
                        <Typography
                            component={'p'}
                            variant={'caption'}
                        >
                            {game.name}
                        </Typography>
                    </Item>
                </Grid>

                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    xs={12}
                    sm={12}
                    md={9}
                    lg={3}
                    paddingLeft={"50px"}
                >
                    <Item>
                        <Typography
                            component={'p'}
                            variant={'caption'}
                        >
                            Preço: €{game.price}
                        </Typography>
                        <Typography
                            component={'p'}
                            variant={'caption'}
                        >
                            Disconto: €{game.discount}
                        </Typography>
                    </Item>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    lg={3}
                    sx={{ float: "right" }}
                    paddingTop={"10px"}
                    paddingBottom={"10px"}
                >
                    <Item
                        textAlign={"center"}
                    >
                        <ShoppingCartIcon
                            sx={{
                                color: COLOR_OXFORD_BLUE,
                                ':hover': {
                                    color: COLOR_BDAZZLED_BLUE,
                                    cursor: "pointer",
                                },
                                mt: '7px',
                            }}
                            fontSize="medium"
                        />
                    </Item>
                </Grid>
            </Grid>
        </div>
    )
}
