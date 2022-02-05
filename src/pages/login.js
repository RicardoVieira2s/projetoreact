import { Link } from 'react-router-dom'
import { Button, Card, Divider, Grid } from '@mui/material'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../components/utils/color'
import Title from '../components/utils/Title'
import React from 'react'
import LoginContent from '../components/login/loginContent'

const Login = () => {

  return (
    <form
      autoComplete="off"
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
          <LoginContent />
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

export default Login