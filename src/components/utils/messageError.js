import { Typography } from '@mui/material'

export default function renderIfEmpty(length, message){
    if (length == 0)
        return <Typography> {message} </Typography>
    return null
}