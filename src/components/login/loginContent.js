import React, { Component } from 'react'
import { Button, CardContent, Grid, TextField, Typography } from '@mui/material'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../utils/color'
import GoogleIcon from '@mui/icons-material/Google'

class loginContent extends Component {

    render() {
        return (
            <CardContent
                style={{ maxWidth: "50%" }}
            >
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        md={12}
                        xs={12}
                    >
                        <Typography
                            align="left"
                            variant="body1"
                            color="inherit"
                        >
                            Iniciar conta GOOFR
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={12}
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
                        md={12}
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
                        md={12}
                        xs={12}
                    >
                        <Button
                            style={{
                                marginTop: '20px',
                                backgroundColor: COLOR_BDAZZLED_BLUE,
                                color: COLOR_PLATINIUM
                            }}
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                        >
                            Iniciar sessão
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={12}
                    >
                        <Button
                            fullWidth
                            color="error"
                            type="submit"
                            startIcon={<GoogleIcon />}
                            size="large"
                            variant="contained"
                        >
                            Iniciar conta Google
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        )
    }
}

export default loginContent