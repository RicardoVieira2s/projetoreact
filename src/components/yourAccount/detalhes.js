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
import Cookies from 'universal-cookie'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

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
})

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

class Detalhes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            client: null,
            date: null,
            isLoaded: false,
            open: false,
            errorMessage: "",
        }
    }

    componentDidMount() {
        let clientId = new Cookies().get('clientID')

        clientApi.clientGet({ id: clientId }, (error, data) => {

            if (error) {
                console.error(error)
            } else {
                console.log('API called successfully.')
            }

            const formatted = data[0].birthdate.toISOString().slice(0, 10);

            this.setState({
                isLoaded: true,
                client: data[0],
                date: formatted,
            })
        });
    }

    

    handleChange(e) {
        const date = e.target.valueAsDate
        const formatted = date.toISOString().slice(0, 10)
        this.setState({
            date: formatted,
            client: {
                ...this.state.client,
                birthdate: formatted
            }
        });
    }

    render() {

        const { classes } = this.props
        const { isLoaded, client, date } = this.state

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }
            this.setState({
                open: false,
            })
        };

        const updateClient = async e => {
        
            e.preventDefault();
            e.stopPropagation();
    
            if (this.state.client == null)
                return
            let obj = camelCaseKeysToUnderscore(this.state.client)
            obj.birthdate = dateWithoutTimeZone(obj.birthdate)
            obj.vat_id = parseInt(obj.vat_id, 10)
            clientApi.clientPut(obj, obj.id, (error, data, response) => {
                if (error) {
                    this.setState({
                        open: true,
                        errorMessage: JSON.parse(response.text).error
                    })
                } else {
                    window.location.reload(true)
                }
            });
            return false
        }

        return (
            <div>
                <form
                    autoComplete="off"
                    method='POST'
                    onSubmit={updateClient}
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
                                        label="Nome Pr??prio"
                                        value={client.name}
                                        onChange={e => this.setState({
                                            client: {
                                                ...this.state.client,
                                                name: e.target.value
                                            }
                                        })}
                                        name="Nome Pr??prio"
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
                                        label="N??mero de telem??vel"
                                        value={client.phoneNumber}
                                        onChange={e => this.setState({
                                            client: {
                                                ...this.state.client,
                                                phoneNumber: e.target.value
                                            }
                                        })}
                                        name="N??mero de telem??vel"
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
                                        label="N??mero de Identifica????o Fiscal"
                                        name="N??mero de Identifica????o Fiscal"
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
                                name={"Guardar Altera????es"}
                            />
                        </Box>
                    </Card>
                </form>

                <Snackbar open={this.state.open} autoHideDuration={2500} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        {this.state.errorMessage}
                    </Alert>
                </Snackbar>
            </div>
        )
    }
}

export default withStyles(useStyles)(Detalhes)