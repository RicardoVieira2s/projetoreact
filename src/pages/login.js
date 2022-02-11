import { Link } from 'react-router-dom'
import { Button, Card, Divider, Grid, TextField, Typography, CardContent } from '@mui/material'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../components/utils/color'
import Title from '../components/utils/Title'
import React, { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google'
import GoogleLogin from 'react-google-login'
import { accessApi } from '../api'
import { ClientAccessSchema } from '../api/src'
import Cookies from 'universal-cookie'

export default function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    e.stopPropagation();

    let body = new ClientAccessSchema(false, email)
    body.password = password;

    accessApi.loginPost(body, (error, data, response) => {
      if (error) {
        alert(JSON.parse(response.text).error);
      }
      else {
        const cookie = new Cookies();
        cookie.set("clientEmail", email, { path: '/' });
        cookie.set("clientID", data.id, { path: '/' });
        cookie.set("clientOAuth", "false", { path: '/' });

        document.location.href = "/";
      }

    })
    return false;
  };

  const handleLogin = async googleData => {

    const { OAuth2Client } = require('google-auth-library')
    const client = new OAuth2Client(process.env.CLIENT_ID)

    const ticket = await client.verifyIdToken({
      idToken: googleData.tokenId,
      audience: process.env.CLIENT_ID
    });
    const { email } = ticket.getPayload();

    let body = new ClientAccessSchema(true, email)


    accessApi.loginPost(body, (error, data, response) => {
      if (error) {
        alert(JSON.parse(response.text).error);
      }
      else {
        const cookie = new Cookies();
        cookie.set("clientEmail", email, { path: '/' });
        cookie.set("clientID", data.id, { path: '/' });
        cookie.set("clientOAuth", "false", { path: '/' });

        alert(email)
        console.log(email)

        document.location.href = "/";
      }

    })

  }
  return (

    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      method="POST"
    >
      <Card
        style={{
          backgroundColor: COLOR_PLATINIUM,
          color: COLOR_BDAZZLED_BLUE,
          paddingLeft: '15px',
          paddingRight: '15px',
          paddingBottom: '40px',
        }}
      >
        <Title
          name={'Entrar'}
          color={COLOR_BDAZZLED_BLUE}
        />
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
        >
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
                  onChange={e => setEmail(e.target.value)}
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
                  onChange={e => setPassword(e.target.value)}
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
                {console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID)}
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Entrar com conta Google"
                  onSuccess={handleLogin}
                  onFailure={handleLogin}
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
                      Iniciar conta Google
                    </Button>
                  )}

                />
                {/* <Button
                  fullWidth
                  color="error"
                  startIcon={<GoogleIcon />}
                  size="large"
                  variant="contained"
                >
                  Iniciar conta Google
                </Button> */}
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Divider
          style={{ marginTop: '35px' }} />
        <Link to="/register">
          <Button
            fullWidth
            sx={{
              marginTop: '50px',
              ':hover': {
                backgroundColor: COLOR_PLATINIUM,
              },
            }}
          >
            Registar
          </Button>
        </Link>
      </Card >
    </form >
  )
}