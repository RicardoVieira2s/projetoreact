import * as React from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'
import { Paper } from '@mui/material'

export default function ImageLogo() {
    return (
        <Link to="/">
            <Paper sx={{ width: '150px', backgroundColor: 'transparent' }}>
                <img src="/images/store.png" alt="" height='40px' width='100%' />
            </Paper>
        </Link>
    )
}