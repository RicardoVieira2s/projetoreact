import React from 'react'
import MenuBar from './menubar'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { display } from '@mui/system'

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
    teste: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table'
    }
}))

export const Banner = React.memo(function BannerApp() {
    const classes = useStyles()

    return (
        <div id='bannerPrincipal' style={{ position: 'relative' }}>
            <div id='imagemPrincipal' className={classes.containerBanner}>
            </div>

            <div id='content' style={{
                position: 'absolute',
                width: '100%',
                top: '0px'
            }}> {/* absolute  com topo 68px*/}
            <div style={{
                position: 'relative',
                width: '100%',
            }}>
            <MenuBar className={classes.teste}
                />
            </div>

            </div>


            {/* <Container className={classes.containerBanner}>
            
            <MenuBar />

        </Container> */}

        </div>
    )
})