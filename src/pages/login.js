import { Link } from 'react-router-dom'
import { Button, Card, Divider } from '@mui/material'
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
        <LoginContent />
        <Divider
          style={{ marginTop: '35px' }}/>
        <Link to="/register">
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