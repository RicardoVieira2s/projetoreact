import React from 'react'
import MenuBar from './menubar'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(({ palette, typography }) => ({
    containerBanner: {
        position: 'relative',
        backgroundImage: 'url("https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-valhalla-pdp-hero-01-ps4-17jul20$en?$native$")',
        maxWidth: '100%',
        width: '100%',
        height: '600px',
        backgroundSize: 'cover',
        backgroundPosition: 'right top',
        alignItems: 'center',
        justifyContent: 'center',
    },

}))

export const Banner = React.memo(function BannerApp() {
    const classes = useStyles()

    return (
        <Container className={classes.containerBanner}>

            <MenuBar />

        </Container>
    )
})