import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'


import IconButton from '@mui/material/IconButton'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

import { makeStyles } from '@material-ui/core/styles'

import { ColumnToRow, Item, Row } from '@mui-treasury/components/flex'
import { EmailSubscribe, EmailTextInput, SubmitButton } from '@mui-treasury/components/EmailSubscribe'

import { useReadyEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/ready'


const useStyles = makeStyles(({ palette, typography }) => ({

    footer: {
        backgroundColor: COLOR_RICH_BLACK,
        width: '100%',
        position: 'fixed',
        bottom: '0',
    },
    newsletterText: {
        color: '#fff',
        fontFamily: 'Viga',
        fontSize: '20px',
    },
    form: {
        display: 'flex',
        position: 'relative',
        width: '100%',
    },
    input: {
        minWidth: '100px',
        width: '350px',
        fontFamily: 'Viga',
        fontSize: '20px',
        flex: 1,
        padding: '0.5rem 1rem',
        paddingRight: '7.7rem',
        backgroundColor: '#C4C4C4',
        color: '#E0E1DDF',
        border: 'none',
        borderRadius: 5,
        outline: 'none',
        transition: 'box-shadow 0.3s ease-out',
    },
    submit: {
        fontFamily: 'Viga',
        fontSize: '20px',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        borderRadius: 5,
        backgroundColor: '#415A77',
        color: '#E0E1DD',
        padding: '0.5rem 1rem',
        transition: 'transform 0.2s',
        transformOrigin: 'right',
        '&:hover, &:focus': {
            backgroundColor: '#1b263b',
            color: '#E0E1DD'
        },
        '&:active': {
            transform: 'scale(0.92)'
        }
    },
    divider: {
        height: 2,
        margin: '-1px 0',
        backgroundColor: COLOR_SHADOW_BLUE,
    },
    text: {
        color: COLOR_SHADOW_BLUE,
        fontSize: '20px'
    },
    textNewsletter: {
        color: COLOR_SHADOW_BLUE,
        fontSize: '20px'
    },
    textCopy: {
        color: COLOR_SHADOW_BLUE,
        fontSize: '15px'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        filter: 'grayscale(80%)',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
    },
    icon: {
        color: COLOR_BDAZZLED_BLUE,
        backgroundColor: 'transparent',
    },
    info: {
        ...typography.caption,
        color: palette.text.hint,
        marginTop: 8,
    }
}))

export const Footer = React.memo(function ArcAppFooter() {
    const classes = useStyles()
    return (
        <Box className={classes.footer} >
            <Container >
                <Box pt={8} pb={2} className={classes.top} position={'relative'}>
                    <Row wrap alignItems="center">
                        <Item grow={2}>
                            <Item >
                                <FacebookRoundedIcon sx={{
                                    color: COLOR_BDAZZLED_BLUE,
                                    ':hover': {
                                        color: COLOR_PLATINIUM,
                                    },
                                    mt: '6px',
                                }}
                                    fontSize="large" />
                                <TwitterIcon sx={{
                                    color: COLOR_BDAZZLED_BLUE,
                                    ':hover': {
                                        color: COLOR_PLATINIUM,
                                    },
                                    mt: '6px',
                                }}
                                    fontSize="large" />
                                <InstagramIcon sx={{
                                    color: COLOR_BDAZZLED_BLUE,
                                    ':hover': {
                                        color: COLOR_PLATINIUM,
                                    },
                                    mt: '6px',
                                }}
                                    fontSize="large" />
                            </Item>
                        </Item>
                        <Item paddingRight= '15px'>
                            <Typography className={classes.textNewsletter}>
                                Newsletter
                            </Typography>
                        </Item>
                        <Item>
                            <EmailSubscribe
                                className={classes.form}
                                onSubmit={email => alert(`Your email is ${email}.`)}
                                useStyles={useStyles}
                                inputClearedAfterSubmit
                            >
                                <EmailTextInput placeholder="Email..." />
                                {/* <SubmitButton>Subscrever</SubmitButton> */}
                            </EmailSubscribe>
                        </Item>
                    </Row>
                </Box>
                <Divider className={classes.divider} />
                <Box pt={3} pb={1}>
                    <Container>
                        <Row wrap
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Item>
                                <Box>
                                    <Link to="/">
                                        <img src="/images/store.png" alt="" />
                                    </Link>
                                </Box>
                            </Item>
                            <Item>
                                <Box>
                                    <Typography
                                        component={'p'}
                                        variant={'caption'}
                                        className={classes.textCopy}
                                    >
                                        © 2022 GOOFR. All rights reserved.
                                    </Typography>
                                </Box>
                            </Item>
                        </Row>
                    </Container>
                </Box>
            </Container>
        </Box >
    )
})