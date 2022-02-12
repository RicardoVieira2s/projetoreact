import React, { Component } from 'react'
import { Typography, Tooltip, Fade, Grid } from '@mui/material'
import { Item } from '@mui-treasury/components/flex'
import { withStyles } from '@material-ui/core/styles'
import { COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../utils/color'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { BORDER_RADIUS_10PX, BORDER_RADIUS_5PX } from '../utils/border'
import DeleteIcon from '@mui/icons-material/Delete'
import { wishlistApi } from '../../api'
import { cartApi } from '../../api'
import Cookies from 'universal-cookie'

const useStyles = theme => ({
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
})

class WishlistGames extends Component {

    deleteGameFromWishList(id) {
        let clientId = new Cookies().get('clientID')
        wishlistApi.wishlistDelete(clientId, { gameID: id }, (error, data, response) => {
            if (error) {
                alert(JSON.parse(response.text).error);
            } else {
                window.location.reload(true);
            }
        });
    }

    addGameToClientCart(id) {
        let clientId = new Cookies().get('clientID')
        cartApi.cartPost(clientId, id, (error, data, response) => {
            if (error) {
                alert(JSON.parse(response.text).error);
            } else {
                window.location.reload(true);
            }
        });
        window.location.reload(true);
    }

    render() {
        const { classes } = this.props;

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
                                {this.props.index}
                            </Typography>
                        </Item>
                    </Grid>

                    <Grid item xs={10} sm={10} md={4} lg={2}>
                        <Item
                            height={"110px"}
                            width={"100%"}
                            textAlign={"center"}
                        >
                            <img src={this.props.game.coverImage} alt="" className={classes.imageBox}></img>
                        </Item>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <Item
                            className={classes.paddingItem}
                        >
                            <Typography
                                component={'p'}
                            >
                                {this.props.game.name}
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
                                Preço: €{this.props.game.price}
                            </Typography>
                            <Typography
                                component={'p'}
                            >
                                Desconto: {this.props.game.discount * 100}%
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
                                onClick={
                                    e => this.addGameToClientCart(this.props.game.id)
                                }
                                title="Adicionar ao carrinho"
                                placement="left-start"
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                            >
                                <ShoppingCartIcon
                                    className={classes.icon}
                                    fontSize="medium"
                                />
                            </Tooltip>
                            <Tooltip
                                onClick={
                                    e => this.deleteGameFromWishList(this.props.game.id)
                                }
                                title="Remover da lista"
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
}

export default withStyles(useStyles)(WishlistGames)