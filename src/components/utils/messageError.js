import { Typography } from '@mui/material'
import { COLOR_PLATINIUM } from '../utils/color'

export default function renderIfEmpty(length, message) {
    if (length === 0)
        return <Typography
                color={COLOR_PLATINIUM}
                > 
        {message} </Typography>
    return null
}