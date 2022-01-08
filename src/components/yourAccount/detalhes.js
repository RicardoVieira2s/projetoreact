import React from 'react'
import './yourAccount.css'
import CustomButton from './customButton'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { Box, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material'
import { BORDER_RADIUS_1, BORDER_RADIUS_2, BORDER_RADIUS_3 } from '../utils/border'
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
    finalBox: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '16px',
    },
}))

export default function Detalhes() {

    const classes = useStyles()

    return (
        <form
            autoComplete="off"
            noValidate
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
                                label="E-mail"
                                name="E-mail"
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
                                name="Número de telemóvel"
                                type="number"
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
                                type="date"
                                variant="outlined"
                                helperText="Data de nascimento" />
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
                                type="number"
                                variant="outlined"
                                required
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <Box className={classes.finalBox}>
                    <CustomButton
                        name={"Guardar Alterações"}
                    />
                </Box>
            </Card>
        </form>
    )
}
