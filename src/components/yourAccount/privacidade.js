import React from 'react'
import './yourAccount.css'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_1, BORDER_RADIUS_2, BORDER_RADIUS_3 } from '../utils/border'
import { Box, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import CustomButton from './customButton'
import Title from '../title/Title'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: COLOR_PLATINIUM,
        color: COLOR_BDAZZLED_BLUE,
        borderRadius: BORDER_RADIUS_2,
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
}))

export default function Privacidade() {

    const classes = useStyles()

    return (
        <form
            autoComplete="off"
            noValidate
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
                                label="Password"
                                name="Password"
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