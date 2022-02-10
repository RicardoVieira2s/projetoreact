import React, { Component } from 'react'
import './yourAccount.css'
import CustomButton from '../utils/customButton'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { Box, Card, CardContent, Divider, Grid, TextField } from '@mui/material'
import { BORDER_RADIUS_10PX } from '../utils/border'
import Title from '../utils/Title'
import { withStyles } from '@material-ui/core/styles'
import { clientApi } from '../../api'
import camelCaseKeysToUnderscore from '../utils/api/camelCaseKeysToUnderscore'
import { dateWithoutTimeZone } from '../utils/date'
import Cookies from 'universal-cookie';

const useStyles = theme => ({
    container: {
        backgroundColor: COLOR_PLATINIUM,
        color: COLOR_BDAZZLED_BLUE,
        borderRadius: BORDER_RADIUS_10PX,
        paddingRight: '15px',
        paddingLeft: '15px',
    },
    finalBox: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '16px',
    },
});

class Detalhes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            client: null,
            date: null,
            isLoaded: false,
        }
    }

    componentDidMount() {
        let clientId = new Cookies().get('clientID');

        clientApi.clientGet({ id: clientId }, (error, data) => {

            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.');
            }

            const formatted = data[0].birthdate.toISOString().slice(0, 10);

            this.setState({
                isLoaded: true,
                client: data[0],
                date: formatted,
            })
        });
    }

    updateClient() {
        if (this.state.client == null)
            return
        let obj = camelCaseKeysToUnderscore(this.state.client)
        obj.birthdate = dateWithoutTimeZone(obj.birthdate)
        obj.vat_id = parseInt(obj.vat_id, 10)
        clientApi.clientPut(obj, obj.id, (error, data) => {
            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.');

            }
        });
    }

    handleChange(e) {
        const date = e.target.valueAsDate
        const formatted = date.toISOString().slice(0, 10);
        this.setState({
            date: formatted,
            client: {
                ...this.state.client,
                birthdate: formatted
            }
        });
    }

    render() {

        const { classes } = this.props;
        const { isLoaded, client, date } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }

        return (
            <form
                autoComplete="off"
            >
                <Card className={classes.container}>
                    <Title
                        name={'Detalhes'}
                        color={COLOR_BDAZZLED_BLUE}
                    />
                    <CardContent>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Nome Próprio"
                                    value={client.name}
                                    onChange={e => this.setState({
                                        client: {
                                            ...this.state.client,
                                            name: e.target.value
                                        }
                                    })}
                                    name="Nome Próprio"
                                    required
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Apelido"
                                    value={client.surname}
                                    onChange={e => this.setState({
                                        client: {
                                            ...this.state.client,
                                            surname: e.target.value
                                        }
                                    })}
                                    name="Apelido"
                                    required
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Número de telemóvel"
                                    value={client.phoneNumber}
                                    onChange={e => this.setState({
                                        client: {
                                            ...this.state.client,
                                            phoneNumber: e.target.value
                                        }
                                    })}
                                    name="Número de telemóvel"
                                    type="tel"
                                    inputProps={{ maxLength: 9, pattern: "[9]{1}[0-9]{8}" }}
                                    variant="outlined"
                                    required
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Número de Identificação Fiscal"
                                    name="Número de Identificação Fiscal"
                                    value={client.vatId}
                                    onChange={e => this.setState({
                                        client: {
                                            ...this.state.client,
                                            vatId: e.target.value
                                        }
                                    })}
                                    type="tel"
                                    variant="outlined"
                                    required
                                    inputProps={{
                                        maxLength: 9,
                                        pattern: "[1-9]{1}[0-9]{8}"
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    value={date}
                                    onChange={e => this.handleChange(e)}
                                    type="date"
                                    variant="outlined"
                                    label="Data de nascimento"
                                    required
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <Box className={classes.finalBox}>
                        <CustomButton
                            onClick={e => this.updateClient()}
                            name={"Guardar Alterações"}
                        />
                    </Box>
                </Card>
            </form>
        )
    }
}

export default withStyles(useStyles)(Detalhes)