import React, { Component } from 'react'
import { CardContent, Grid, Button, TextField } from '@mui/material'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM, COLOR_SHADOW_BLUE } from '../utils/color'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import GoogleIcon from '@mui/icons-material/Google'
import GoogleLogin from 'react-google-login'
import Cookies from 'universal-cookie'
import { ClientWalletSchema, RegisterClientSchema, ClientSchema, ClientAccessSchema, ClientAddressSchema } from '../../api/src'
import { accessApi, newsletterApi } from '../../api'
import camelCaseKeysToUnderscore from '../utils/api/camelCaseKeysToUnderscore'
import { dateWithoutTimeZone } from '../utils/date'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

class registerContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            client: new ClientSchema(),
            clientAccess: new ClientAccessSchema(),
            clientAddress: new ClientAddressSchema(),
            clientNewsletter: false,
            google: false,
            open: false,
            errorMessage: "",
        }
    }

    render() {

        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }
            this.setState({
                open: false,
            })
        };

        const handleChange = e => {
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

        const handleRegisterGoogle = async googleData => {

            const { OAuth2Client } = require('google-auth-library')
            const clientGoogle = new OAuth2Client(process.env.CLIENT_ID)

            const ticket = await clientGoogle.verifyIdToken({
                idToken: googleData.tokenId,
                audience: process.env.CLIENT_ID
            });

            const { email, given_name, family_name } = ticket.getPayload();

            let access = this.state.clientAccess
            let client = this.state.client
            access.email = email
            access.oauth = true
            client.name = given_name
            client.surname = family_name

            this.setState({
                client: client,
                clientAccess: access,
                google: true
            })
        }

        const handleRegister = async e => {
            e.preventDefault();
            e.stopPropagation();

            let access = this.state.clientAccess
            if (this.state.clientAccess.oauth === undefined || this.state.clientAccess.oauth === null) {
                access.oauth = false
            }

            let client = this.state.client
            let address = this.state.clientAddress
            client.picture = 'http://localhost:3000/images/avatar/avatar-Man-1.png'
            client.active = true

            client = camelCaseKeysToUnderscore(client)
            address = camelCaseKeysToUnderscore(address)
            client.birthdate = dateWithoutTimeZone(client.birthdate)
            client.vat_id = parseInt(client.vat_id, 10)

            let clientWallet = new ClientWalletSchema(0, '€')
            let bodyRegister = new RegisterClientSchema(client, access, address, clientWallet)


            accessApi.registerPost(bodyRegister, (error, data, response) => {
                if (error) {
                    this.setState({
                        open: true,
                        errorMessage: JSON.parse(response.text).error
                    })
                }
                else {
                    const cookie = new Cookies();
                    cookie.set("clientEmail", access.email, { path: '/' });
                    cookie.set("clientID", data.id, { path: '/' });
                    cookie.set("clientOAuth", access.oauth, { path: '/' });

                    document.location.href = "/"
                }
            })

            if (this.state.clientNewsletter == true) {
                newsletterApi.newsletterPost(access.email, null)
            }

            return false
        }

        return (
            <div>
                <form
                    autoComplete="off"
                    onSubmit={handleRegister}
                    method='POST'
                >
                    <CardContent>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    label="E-mail"
                                    name="E-mail"
                                    value={this.state.clientAccess.email}
                                    required
                                    type="email"
                                    variant="outlined"
                                    disabled={this.state.google}
                                    InputLabelProps={{ shrink: (this.state.clientAccess.email !== undefined && this.state.clientAccess.email !== "") }}
                                    autoFocus={true}
                                    onChange={e => this.setState({
                                        clientAccess: {
                                            ...this.state.clientAccess,
                                            email: e.target.value
                                        }
                                    })}
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Password"
                                    name="Password"
                                    type="password"
                                    disabled={this.state.google}
                                    required
                                    variant="outlined"
                                    onChange={e => this.setState({
                                        clientAccess: {
                                            ...this.state.clientAccess,
                                            password: e.target.value
                                        }
                                    })}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    label="Nome Próprio"
                                    name="Nome Próprio"
                                    InputLabelProps={{ shrink: (this.state.client.name !== undefined && this.state.client.name !== "") }}
                                    required
                                    variant="outlined"
                                    value={this.state.client.name}
                                    onChange={e => this.setState({
                                        client: {
                                            ...this.state.client,
                                            name: e.target.value
                                        }
                                    })}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    label="Apelido"
                                    name="Apelido"
                                    InputLabelProps={{ shrink: (this.state.client.surname !== undefined && this.state.client.surname !== "") }}
                                    required
                                    variant="outlined"
                                    value={this.state.client.surname}
                                    onChange={e => this.setState({
                                        client: {
                                            ...this.state.client,
                                            surname: e.target.value
                                        }
                                    })}
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    type="date"
                                    InputLabelProps={{ shrink: (true) }}
                                    variant="outlined"
                                    label="Data de nascimento"
                                    required
                                    onChange={e => handleChange(e)}
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
                                    name="Número de telemóvel"
                                    type="tel"
                                    inputProps={{ maxLength: 9, pattern: "[9]{1}[0-9]{8}" }}
                                    variant="outlined"
                                    onChange={e => this.setState({
                                        client: {
                                            ...this.state.client,
                                            phoneNumber: e.target.value
                                        }
                                    })}
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
                                    type="tel"
                                    variant="outlined"
                                    required
                                    inputProps={{
                                        maxLength: 9,
                                        pattern: "[1-9]{1}[0-9]{8}"
                                    }}
                                    onChange={e => this.setState({
                                        client: {
                                            ...this.state.client,
                                            vatId: e.target.value
                                        }
                                    })}
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Rua"
                                    name="Rua"
                                    required
                                    variant="outlined"
                                    onChange={e => this.setState({
                                        clientAddress: {
                                            ...this.state.clientAddress,
                                            street: e.target.value
                                        }
                                    })}
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
                                    name="Número de porta"
                                    type="tel"
                                    inputProps={{ maxLength: 5 }}
                                    required
                                    variant="outlined"
                                    onChange={e => this.setState({
                                        clientAddress: {
                                            ...this.state.clientAddress,
                                            doorNumber: e.target.value
                                        }
                                    })}
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
                                    name="Código Postal"
                                    required
                                    variant="outlined"
                                    onChange={e => this.setState({
                                        clientAddress: {
                                            ...this.state.clientAddress,
                                            zipCode: e.target.value
                                        }
                                    })}
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
                                    name="Cidade"
                                    variant="outlined"
                                    required
                                    onChange={e => this.setState({
                                        clientAddress: {
                                            ...this.state.clientAddress,
                                            city: e.target.value
                                        }
                                    })}
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="País"
                                    name="País"
                                    variant="outlined"
                                    required
                                    onChange={e => this.setState({
                                        clientAddress: {
                                            ...this.state.clientAddress,
                                            country: e.target.value
                                        }
                                    })}
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <FormControlLabel
                                    style={{ padding: '12px' }}
                                    control={<Switch defaultChecked />}
                                    label="Subscrição newsletter"
                                    labelPlacement="start"
                                    sx={{
                                        '& .MuiSwitch-switchBase.Mui-checked': {
                                            color: COLOR_BDAZZLED_BLUE,
                                        },
                                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                            backgroundColor: COLOR_SHADOW_BLUE,
                                        },
                                    }}
                                    onChange={e => this.setState({
                                        clientNewsletter: e.target.checked
                                    })}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={12}
                            >
                                <Button
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        cursor: 'pointer',
                                        backgroundColor: COLOR_BDAZZLED_BLUE,
                                        color: COLOR_PLATINIUM,
                                        ':hover': {
                                            backgroundColor: COLOR_BDAZZLED_BLUE,
                                        },
                                    }}
                                >
                                    Registar
                                </Button>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={12}
                            >
                                <GoogleLogin
                                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                    buttonText="Entrar com conta Google"
                                    onSuccess={handleRegisterGoogle}
                                    onFailure={handleRegisterGoogle}
                                    cookiePolicy={'single_host_origin'}
                                    render={renderProps => (
                                        <Button
                                            onClick={renderProps.onClick}
                                            disabled={renderProps.disabled}
                                            fullWidth
                                            color="error"
                                            startIcon={<GoogleIcon />}
                                            size="large"
                                            variant="contained"
                                        >
                                            Registar com Conta Google
                                        </Button>
                                    )}

                                />
                            </Grid>
                        </Grid>
                    </CardContent>
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

export default registerContent