import React, { Component } from 'react'
import './yourAccount.css'
import { Box, Card, CardContent, Divider, Grid, TextField } from '@mui/material'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_10PX } from '../utils/border'
import CustomButton from '../utils/customButton'
import Title from '../utils/Title'
import { withStyles } from '@material-ui/core/styles'
import { addressApi } from '../../api'

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

class Endereco extends Component {

    constructor(props) {
        super(props);
        this.state = {
            client: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        addressApi.addressGet('eeae714d-cf5a-419d-bcb6-a1e91a16de67', (error, data) => {

            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.');
            }

            this.setState({
                isLoaded: true,
                client: data,
            })
        });
    }

    render() {

        const { classes } = this.props;
        var { isLoaded, client } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        return (
            <form
                autoComplete="off"
            >
                <Card className={classes.container}>
                    <Title
                        name={'Endereço'}
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
                                    label="Rua"
                                    value={client.street}
                                    name="Rua"
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
                                    label="Número de porta"
                                    value={client.doorNumber}
                                    name="Número de porta"
                                    type="tel"
                                    inputProps={{ maxLength: 5, pattern: "[1-9]{1}" }}
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
                                    label="Código Postal"
                                    value={client.zipCode}
                                    name="Código Postal"
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
                                    label="Cidade"
                                    value={client.city}
                                    name="Cidade"
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
                                    value={client.country}
                                    label="País"
                                    name="País"
                                    variant="outlined"
                                    required
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <Box className={classes.finalBox}>
                        <CustomButton
                            name={"Guardar alterações"}
                        />
                    </Box>
                </Card>
            </form>
        )
    }
}

export default withStyles(useStyles)(Endereco)