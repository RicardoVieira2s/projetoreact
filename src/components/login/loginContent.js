import React, { Component } from 'react'
import { Button, CardContent, Grid, TextField, Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'

class loginContent extends Component {
    render() {

        return (
            <CardContent>
                <Grid
                    container
                    spacing={3}
                >
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
                            Ligar conta Google
                        </Button>
                    </Grid>

                    <Grid
                        item
                        md={12}
                        xs={12}
                    >
                        <Typography
                            align="center"
                            variant="body1"
                            color="inherit"
                        >
                            Ligar conta GOOFR
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
                            style={{ marginTop: '20px' }}
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                        >
                            Iniciar sessão
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        )
    }
}

export default loginContent