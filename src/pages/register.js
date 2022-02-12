import React from 'react'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from '../components/utils/color'
import { Divider, Card, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Title from '../components/utils/Title'
import RegisterContent from '../components/register/registerContent'

const Register = () => {

  return (
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
        name={'Registar'}
        color={COLOR_BDAZZLED_BLUE}
      />
      <RegisterContent />
      <Divider
        style={{ marginTop: '18px' }}
      />
      <Link
        to="/login">
        <Button
          fullWidth
          sx={{
            marginTop: '30px',
            ':hover': {
              backgroundColor: COLOR_PLATINIUM,
            },
          }}
        >
          Voltar
        </Button>
      </Link>
    </Card >
  )
}

export default Register