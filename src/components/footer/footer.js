import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import { makeStyles } from '@material-ui/core/styles'
import { Item, Row } from '@mui-treasury/components/flex'
import { EmailSubscribe, EmailTextInput } from '@mui-treasury/components/EmailSubscribe'
import { newsletterApi } from '../../api'

const useStyles = makeStyles(({ palette, typography }) => ({

    footer: {
        backgroundColor: COLOR_RICH_BLACK,
        width: '100%',
        position: 'relative',
        bottom: '0',
    },
    newsletterText: {
        color: COLOR_PLATINIUM,
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
        maxWidth: '350px',
        fontFamily: 'Viga',
        fontSize: '20px',
        flex: 1,
        padding: '0.5rem 1rem',
        paddingRight: '7.7rem',
        backgroundColor: COLOR_PLATINIUM,
        color: COLOR_BDAZZLED_BLUE,
        border: 'none',
        borderRadius: 5,
        outline: 'none',
        transition: 'box-shadow 0.3s ease-out',
    },
    submit: {
        fontFamily: 'Viga',
        fontSize: '20px',
        border: 'none',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        borderRadius: 5,
        backgroundColor: COLOR_BDAZZLED_BLUE,
        color: COLOR_PLATINIUM,
        padding: '0.5rem 1rem',
        transition: 'transform 0.2s',
        transformOrigin: 'right',
        cursor: 'pointer',
        '&:hover, &:focus': {
            backgroundColor: COLOR_OXFORD_BLUE,
            color: COLOR_PLATINIUM
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



export const Footer = React.memo(function GOOFRFooter() {
    const classes = useStyles()
    const [email, setEmail] = useState("");

    const handleSubmit = async e => {

        newsletterApi.newsletterPost(email, (error, data, response) => {
            console.log("email", email)
            if (error) {
                alert(JSON.parse(response.text).error);
            }
            else {
                alert("Nesletter subscrita com sucesso");
            }
        })
    };

    return (
        <footer>
            <Box className={classes.footer} >
                <Container >
                    <Box pt={4} pb={4} >
                        <Row wrap alignItems="center">
                            <Item grow={2}>
                                <Item >
                                    <FacebookRoundedIcon
                                        onClick={() => window.open('https://www.facebook.com/', "_blank")}
                                        sx={{
                                            color: COLOR_BDAZZLED_BLUE,
                                            ':hover': {
                                                color: COLOR_PLATINIUM,
                                            },
                                            mt: '6px',
                                            paddingRight: '10px',
                                            cursor: 'pointer'
                                        }}
                                        fontSize="medium"
                                    />
                                    <TwitterIcon
                                        onClick={() => window.open('https://www.twitter.com/', "_blank")}
                                        sx={{
                                            color: COLOR_BDAZZLED_BLUE,
                                            ':hover': {
                                                color: COLOR_PLATINIUM,
                                            },
                                            mt: '6px',
                                            paddingRight: '10px',
                                            cursor: 'pointer'
                                        }}
                                        fontSize="medium"
                                    />
                                    <InstagramIcon
                                        onClick={() => window.open('https://www.instagram.com/', "_blank")}
                                        sx={{
                                            color: COLOR_BDAZZLED_BLUE,
                                            ':hover': {
                                                color: COLOR_PLATINIUM,
                                            },
                                            mt: '6px',
                                            cursor: 'pointer'
                                        }}
                                        fontSize="medium"
                                    />
                                </Item>
                            </Item>
                            <Item paddingRight='15px'>
                                <Typography className={classes.textNewsletter}>
                                    Newsletter
                                </Typography>
                            </Item>
                            <Item>
                                <EmailSubscribe
                                    className={classes.form}
                                    onSubmit={handleSubmit}
                                    useStyles={useStyles}
                                    inputClearedAfterSubmit
                                    method='POST'
                                >
                                    <EmailTextInput placeholder="Email..." onChange={e => setEmail(e.target.value)} />
                                    <input type="submit" className={classes.submit} value="Subscrever" />
                                </EmailSubscribe>
                            </Item>
                        </Row>
                    </Box>
                    <Divider className={classes.divider} />
                    <Box pt={3} pb={3}>
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
        </footer>
    )
})