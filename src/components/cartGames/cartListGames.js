import React from 'react'
import { Typography, Grid, Tooltip, Fade } from '@mui/material'
import { Item } from '@mui-treasury/components/flex'
import { COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_10PX, BORDER_RADIUS_5PX } from '../utils/border'
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: COLOR_PLATINIUM,
        marginTop: "30px",
        width: "90%",
        borderRadius: BORDER_RADIUS_10PX,
        color: COLOR_OXFORD_BLUE,
    },
    imageBox: {
        height: "calc(100% - 20px)",
        maxWidth: "100%",
        marginTop: "10px",
        marginBottom: "10px",
        borderRadius: BORDER_RADIUS_5PX,
    },
    icon: {
        color: COLOR_OXFORD_BLUE,
        '&:hover': {
            color: COLOR_BDAZZLED_BLUE,
            cursor: "pointer",
        },
        marginTop: "7px",
        paddingLeft: "5px",
    },
    iconsGrid: {
        paddingTop: "10px",
        paddingBottom: "10px",
    },
    paddingItem: {
        paddingLeft: "50px",
    }
}))

export default function CartlistGames({ game, index }) {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Grid
                container
                direction="row"
                alignItems="center"
                height={'100%'}
            >
                <Grid item xs={2} sm={2} md={2} lg={1}>
                    <Item
                        className={classes.paddingItem}
                    >
                        <Typography
                            component={'p'}
                        >
                            {index}
                        </Typography>
                    </Item>
                </Grid>

                <Grid item xs={10} sm={10} md={4} lg={2}>
                    <Item
                        height={"110px"}
                        width={"100%"}
                        textAlign={"center"}
                    >
                        <img src={game.coverImage} alt="" className={classes.imageBox}></img>
                    </Item>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Item
                        className={classes.paddingItem}
                    >
                        <Typography
                            component={'p'}
                        >
                            {game.name}
                        </Typography>
                    </Item>
                </Grid>

                <Grid item xs={12} sm={12} md={9} lg={3}
                    className={classes.paddingItem}
                >
                    <Item>
                        <Typography
                            component={'p'}
                        >
                            Preço: €{game.price}
                        </Typography>
                        <Typography
                            component={'p'}
                        >
                            Desconto: {game.discount}%
                        </Typography>
                    </Item>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3}
                    className={classes.iconsGrid}
                >
                    <Item
                        textAlign={"center"}
                    >
                        <Tooltip
                            title="Remover do carrinho"
                            placement="right-start"
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                        >
                            <DeleteIcon
                                className={classes.icon}
                                fontSize="medium"
                            />
                        </Tooltip>
                    </Item>
                </Grid>
            </Grid>
        </div>
    )
}
