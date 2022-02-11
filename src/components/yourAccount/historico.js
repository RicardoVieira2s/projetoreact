import React, { Component } from 'react'
import './yourAccount.css'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_10PX } from '../utils/border'
import { Card, CardContent, Grid } from '@mui/material'
import Title from '../utils/Title'
import HistoryList from './historyList'
import RenderIfEmpty from '../utils/messageError'
import { withStyles } from '@material-ui/core/styles'
import { gameApi, invoiceApi } from '../../api'
import Cookies from 'universal-cookie'
import { dateToString } from '../utils/date'

const useStyles = theme => ({
    container: {
        backgroundColor: COLOR_PLATINIUM,
        color: COLOR_BDAZZLED_BLUE,
        borderRadius: BORDER_RADIUS_10PX,
        paddingRight: '15px',
        paddingLeft: '15px',
    },
});

class Historico extends Component {

    constructor(props) {
        super(props);
        this.state = {
            invoice: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        let clientId = new Cookies().get('clientID');
        let invoiceList = []
        invoiceApi.invoiceGet(clientId, (error, data) => {
            if (error) {
                console.error(error);
                return
            }

            data.map(header => {
                let games = []

                header.games.map(game => {
                    return gameApi.gameGet({ id: game.idGame }, (error, tempGames) => {
                        if (error) {
                            console.error(error);
                            return
                        }

                        let g = tempGames[0]
                        g.price = game.price
                        g.discount = game.discount
                        g.releaseDate = dateToString(g.releaseDate)
                        games.push(g)
                    });
                })

                invoiceList.push({
                    id: header.id,
                    idClient: header.idClient,
                    purchaseDate: dateToString(header.purchaseDate),
                    vatId: header.vatId,
                    games: games,
                })
            })

            this.setState({
                invoice: invoiceList,
                isLoaded: true,
            })
        });
    }

    render() {
        const { classes } = this.props;

        const { isLoaded, invoice } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        return (

            <Card className={classes.container} >
                <Title
                    name='Histórico de Compras'
                    color={COLOR_BDAZZLED_BLUE}
                />
                <CardContent>
                    <Grid
                        item
                        md={12}
                        xs={12}
                    >
                        {RenderIfEmpty(invoice.length, "Sem Histórico")}

                        {invoice.map((history, index) =>
                            <HistoryList
                                history={history}
                                index={index}
                                key={index}
                            />
                        )}
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(useStyles)(Historico)