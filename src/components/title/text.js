import React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    Typography: {
        paddingTop: '10px',
        fontSize: '20px'
    },
}))

export default function Text({ text }) {
    const classes = useStyles()
    return (
        <Typography
            className={classes.Typography}
            titleTypographyProps={{
                variant: 'p',
            }}
        >
            {text}
        </Typography>
    )
}