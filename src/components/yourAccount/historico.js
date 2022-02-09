import React, { Component } from 'react'
import './yourAccount.css'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_10PX } from '../utils/border'
import { Card, CardContent, Grid } from '@mui/material'
import Title from '../utils/Title'
import HistoryList from './historyList'
import RenderIfEmpty from '../utils/messageError'
import { withStyles } from '@material-ui/core/styles'
import { invoiceApi } from '../../api'

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
            invoice: null,
            isLoaded: false,
        }
    }

    componentDidMount() {
        invoiceApi.invoiceGet({ id: "eeae714d-cf5a-419d-bcb6-a1e91a16de67" }, (error, data) => {

            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.');
            }

            this.setState({
                isLoaded: true,
                invoice: data,
            })
        });
    }

    render() {
        const { classes } = this.props;

        var { isLoaded, invoice } = this.state;
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