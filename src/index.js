import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { StyledEngineProvider } from '@mui/material/styles'

 export let client = {
  "active": true,
  "birthdate": "2022-01-24",
  "id": "3386fbce-bf4d-4f38-bdf2-ccd91d53e32b",
  "name": "Ricardo",
  "phone_number": "918999999",
  "picture": "string",
  "surname": "Vieira",
  "vat_id": 233333333
}

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <App/>
  </StyledEngineProvider>,
  document.querySelector("#root")
)