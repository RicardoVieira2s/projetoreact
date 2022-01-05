import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import {
    makeStyles,
    ThemeProvider,
    createTheme,
} from '@material-ui/core/styles'

import { ColumnToRow, Item } from '@mui-treasury/components/flex'
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation'
import {
    EmailSubscribe,
    EmailTextInput,
    SubmitButton,
} from '@mui-treasury/components/EmailSubscribe'
import {
    CategoryProvider,
    CategoryTitle,
    CategoryItem,
} from '@mui-treasury/components/menu/category'
import {
    SocialProvider,
    SocialLink,
} from '@mui-treasury/components/socialLink'

import { useMagCategoryMenuStyles } from '@mui-treasury/styles/categoryMenu/mag'
import { usePoofSocialLinkStyles } from '@mui-treasury/styles/socialLink/poof'
import { useReadyEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/ready'
import { usePlainNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/plain'

const darkTheme = createTheme({ palette: { type: 'dark' } })

const useStyles = makeStyles(({ palette, typography }) => ({
    footer: {
        backgroundColor: '#0D1B2A',
        width: '100%',
        position: 'fixed',
        bottom: '0',
    },
    newsletterText: {
        color: '#fff',
        fontSize: '0.875rem',
    },
    form: {
        margin: 0,
        minWidth: 343,
        fontSize: '0.875rem',
    },
    legalLink: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '0.75rem',
        justifyContent: 'center',
        color: palette.text.hint,
        letterSpacing: '0.5px',
    },
    divider: {
        height: 2,
        margin: '-1px 0',
        backgroundColor: '#778DA9',
    },
    text: {
        color: '#778DA9'
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
        color: '#778DA9',
    },
    info: {
        ...typography.caption,
        color: palette.text.hint,
        marginTop: 8,
    }
}))

export const ArcAppFooterDemo = React.memo(function ArcAppFooter() {
    const classes = useStyles()
    return (
        <Box className={classes.footer}>
            <Box px={2} py={10}>
                <Container disableGutters>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4} lg={3}>
                            <SocialProvider useStyles={usePoofSocialLinkStyles}>
                                <SocialLink brand={'Twitter'} className={classes.icon} />
                                <SocialLink brand={'Instagram'} className={classes.icon} />
                                <SocialLink brand={'FacebookCircle'} className={classes.icon} />
                            </SocialProvider>
                        </Grid>
                        <Grid item xs={12} md={8} lg={3} style={{ marginLeft: 'auto' }}>
                            <Typography className={classes.text} >
                                Newsletter
                            </Typography>
                            <Item>
                                <EmailSubscribe
                                    className={classes.form}
                                    onSubmit={email => alert(`Your email is ${email}.`)}
                                    useStyles={useReadyEmailSubscribeStyles}
                                    inputClearedAfterSubmit
                                >
                                    <EmailTextInput placeholder="Email..." />

                                    {/* FIXME: ARRANJAR O BOTÃO DE SUBMIT */}

                                    {/* <SubmitButton>Subscrever</SubmitButton> */}

                                </EmailSubscribe>
                            </Item>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container disableGutters>
                <Divider className={classes.divider} />
            </Container>
            <Box px={1} py={1} className={classes.bottom}>
                <Container disableGutters>
                    <ColumnToRow
                        at={'md'}
                        columnStyle={{ alignItems: 'center' }}
                        rowStyle={{ alignItems: 'unset' }}
                        justifyContent="center"
                    >
                        <Item>
                            <Box>
                                <Typography
                                    component={'p'}
                                    variant={'caption'}
                                    className={classes.text}
                                >
                                    © 2022 GOOFR. All rights reserved.
                                </Typography>
                            </Box>
                        </Item>
                    </ColumnToRow>
                </Container>
            </Box>
        </Box>
    )
})