import { Link } from 'react-router-dom'
import { Button, Card, CardContent, Grid, TextField, Typography, Divider } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../components/utils/color'
import Title from '../components/utils/Title'
import React from 'react'

const Login = () => {

  return (
    <form
      autoComplete="off"
    >
      <Card
        style={{
          backgroundColor: COLOR_PLATINIUM,
          color: COLOR_BDAZZLED_BLUE,
          marginRight: '40px',
          marginLeft: '40px',
          paddingLeft: '15px',
          paddingRight: '15px',
          paddingBottom: '40px',
        }}
      >
        <Title
          name={'Sign in'}
          color={COLOR_BDAZZLED_BLUE}
        />
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
        <Divider
          style={{ marginTop: '35px' }}
        />
        <Link
          to="/register">
          <Button
            fullWidth
            style={{ marginTop: '50px' }}
          >
            Registar
          </Button>
        </Link>
      </Card >
    </form >
  )
}

export default Login