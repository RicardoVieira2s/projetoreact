import React from 'react'
import { CardHeader } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    title: props => ({
        marginLeft: '26px',
        paddingTop: '40px',
        fontSize: '30px',
        color: props.color,
        textOverflow: 'ellipsis',
        overflow: "hidden",
        whiteSpace: 'nowrap',
        textAlign: 'center'
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
        </div>
    )
}