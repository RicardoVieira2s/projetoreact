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
import { clientApi } from '../../api'

const useStyles = theme => ({
    container: {
        backgroundColor: COLOR_PLATINIUM,
        color: COLOR_BDAZZLED_BLUE,
        borderRadius: BORDER_RADIUS_10PX,
        paddingRight: '15px',
        paddingLeft: '15px',
    },
    interruptor: {
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: COLOR_BDAZZLED_BLUE,
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: COLOR_SHADOW_BLUE,
        },
    },
    finalBox: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '16px',
    },
});

class Privacidade extends Component {

    constructor(props) {
        super(props);
        this.state = {
            client: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        // clientApi.clientGet('eeae714d-cf5a-419d-bcb6-a1e91a16de67', (error, data) => {

        //     if (error) {
        //         console.error(error);
        //     } else {
        //         console.log('API called successfully.');
        //     }

        //     this.setState({
        //         isLoaded: true,
        //         client: data,
        //     })
        // });
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
                        name={'Privacidade'}
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
                                    label="E-mail"
                                    name="E-mail"
                                    required
                                    variant="outlined"
                                    type="email"
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
                                    required
                                    variant="outlined"
                                    
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
                                    className={classes.interruptor}
                                    label="Subscrição newsletter"
                                    labelPlacement="start"
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

export default withStyles(useStyles)(Privacidade)