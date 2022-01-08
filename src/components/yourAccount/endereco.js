import React from 'react'
import './yourAccount.css'
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_1, BORDER_RADIUS_2, BORDER_RADIUS_3 } from '../utils/border'
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
    finalBox: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '16px',
    },
}))

export default function Endereco() {

    const classes = useStyles()

    return (
        <form
            autoComplete="off"
            noValidate
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
                                name="Número de porta"
                                type="number"
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
