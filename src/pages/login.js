import { Link } from 'react-router-dom'
import { Button, Card, Divider, Grid, TextField, Typography, CardContent } from '@mui/material'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../components/utils/color'
import Title from '../components/utils/Title'
import React, { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google'
import { accessApi } from '../api'
import { ClientAccessSchema } from '../api/src'
import Cookies from 'universal-cookie'

export default function Login() {

  const handleSubmit = async e => {

    let body = new ClientAccessSchema(false, email)
    body.password = password;

    accessApi.loginPost(body, (error, data, response) => {
      // if (response !== undefined && response !== null && response.statusCode !== 200) {
      //   //alert(JSON.parse(response.text).error);
      //   alert("custom")
      // } else
      if (error) {
        console.error(error);
        alert("123")
      }
      else {
        // const cookies = new Cookies();
        // cookies.set("client", JSON.stringify(data), { path: '/' });
        // cookies.set("clientEmail", String(email), { path: '/' });


        // console.log(cookies.get('client'));
        console.log(data)
        alert("asdasdasdas")

      }
    })
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
                <Button
                  fullWidth
                  color="error"
                  startIcon={<GoogleIcon />}
                  size="large"
                  variant="contained"
                >
                  Iniciar conta Google
                </Button>
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