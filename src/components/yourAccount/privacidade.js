import React, { Component } from 'react'
import './yourAccount.css'
import { COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_10PX } from '../utils/border'
import { Box, Card, CardContent, Divider, Grid, TextField } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import CustomButton from '../utils/customButton'
import Title from '../utils/Title'
import { withStyles } from '@material-ui/core/styles'
import { clientApi, accessApi, newsletterApi } from '../../api'
import Cookies from 'universal-cookie'
import camelCaseKeysToUnderscore from '../utils/api/camelCaseKeysToUnderscore'
import { ClientAccessSchema } from '../../api/src'

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

class Privacidade extends Component {

    constructor(props) {
        super(props);
        this.state = {
            client: null,
            emailClient: null,
            password: null,
            isLoaded: false,
            oauth: null,
        }
    }

    componentDidMount() {
        let clientId = new Cookies().get('clientID')
        let emailClient = new Cookies().get('clientEmail')
        let oauth = new Cookies().get("clientOauth")
        clientApi.clientGet({ id: clientId }, (error, data) => {
            if (error) {
                console.error(error)
            } else {
                console.log('API called successfully.')
            }

            this.setState({
                isLoaded: true,
                client: data[0],
                emailClient: emailClient,
                oauth: oauth,
            })
        })
    }

    newsletter(email) {
        newsletterApi.newsletterGet({ email }, (error, data) => {
            if (error) {
                return <FormControlLabel
                    style={{
                        padding: '12px',
                        '& .MuiSwitch-switchBase.Mui-checked': {
                            color: COLOR_BDAZZLED_BLUE,
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                            backgroundColor: COLOR_SHADOW_BLUE,
                        },
                    }}
                    control={<Switch />}
                    label="Subscrição newsletter"
                    labelPlacement="start" />
            } else {
                return <FormControlLabel
                    style={{
                        padding: '12px',
                        '& .MuiSwitch-switchBase.Mui-checked': {
                            color: COLOR_BDAZZLED_BLUE,
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                            backgroundColor: COLOR_SHADOW_BLUE,
                        },
                    }}
                    control={<Switch defaultChecked />}
                    label="Subscrição newsletter"
                    labelPlacement="start" />
            }
        })
    }

    updateClient() {
        let body = new ClientAccessSchema(false, this.state.emailClient)
        body.emailClient = this.state.emailClient
        body.password = this.state.password
        body.oauth = this.state.oauth

        if (this.state.client == null)
            return
        let obj = camelCaseKeysToUnderscore(this.state.client)
        accessApi.accessPut(body, obj.id, (error, data) => {
            let cookie = new Cookies()
            cookie.set("clientEmail", body.emailClient, { path: '/' })
            cookie.set("clientID", obj.id, { path: '/' })

            if (error) {
                console.error(error)
            } else {
                console.log(body.emailClient)
                console.log(body.password)
                console.log(body)
                console.log(obj.id)
                console.log('API called successfully.')
            }
        })
    }

    render() {
        const { classes } = this.props
        const { isLoaded, emailClient } = this.state

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        return (
            // <form autoComplete="off">
            <>
                <Card className={classes.container}>
                    <Title
                        name={'Privacidade'}
                        color={COLOR_BDAZZLED_BLUE} />
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    value={emailClient}
                                    onChange={e => this.setState({
                                        emailClient: e.target.value
                                    })}
                                    fullWidth
                                    label="E-mail"
                                    name="E-mail"
                                    required
                                    variant="outlined"
                                    type="email" />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    fullWidth
                                    onChange={e => this.setState({
                                        password: e.target.value
                                    })}
                                    label="Password"
                                    name="Password"
                                    type="password"
                                    required
                                    variant="outlined" />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                {this.newsletter(emailClient)}
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <Box className={classes.finalBox}>
                        <CustomButton
                            onClick={e => this.updateClient()}
                            name={"Guardar alterações"} />
                    </Box>
                </Card>
            </>
        )
    }
}

export default withStyles(useStyles)(Privacidade)