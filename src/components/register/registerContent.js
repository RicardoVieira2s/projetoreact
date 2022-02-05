import React, { Component } from 'react'
import { CardContent, Grid, Button, TextField } from '@mui/material'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM, COLOR_SHADOW_BLUE } from '../utils/color'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'

class registerContent extends Component {

    render() {

        return (
            < CardContent >
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
                        xs={12}
                        md={6}
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
                        xs={12}
                        md={6}
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
                            type="date"
                            variant="outlined"
                            helperText="Data de nascimento"
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
                            label="Número de telemóvel"
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
                            type="tel"
                            inputProps={{ maxLength: 5, pattern: "[1-9]{1}[1-9]{4}" }}
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
                </Grid>
            </CardContent >
        )
    }
}

export default registerContent