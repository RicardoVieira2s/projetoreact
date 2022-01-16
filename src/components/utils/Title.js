import React from 'react'
import { Divider } from '@mui/material'
import { CardHeader } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    title: props => ({
        marginLeft: '16px',
        paddingTop: '40px',
        fontSize: '40px',
        color: props.color,
        textOverflow: 'ellipsis',
        overflow: "hidden",
        whiteSpace: 'nowrap',
    }),
    divider: props => ({
        marginBottom: '30px',
        '&.MuiDivider-root': {
            backgroundColor: props.color,
            height: '3px',
            marginBottom: '16px',
        }
    }),
})

export default function Title({ name, color }) {
    const classes = useStyles({ color: color })
    return (
        <div>
            <CardHeader
                title={name}
                titleTypographyProps={{
                    variant: 'p',
                }}
                className={classes.title}
            />
            <Divider
                variant="middle"
                className={classes.divider}
            />
        </div>
    )
}