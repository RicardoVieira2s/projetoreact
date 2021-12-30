import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {
    makeStyles,
    ThemeProvider,
    createTheme,
} from '@material-ui/core/styles';

import { ColumnToRow, Item } from '@mui-treasury/components/flex';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import {
    EmailSubscribe,
    EmailTextInput,
    SubmitButton,
} from '@mui-treasury/components/EmailSubscribe';
import {
    CategoryProvider,
    CategoryTitle,
    CategoryItem,
} from '@mui-treasury/components/menu/category';
import {
    SocialProvider,
    SocialLink,
} from '@mui-treasury/components/socialLink';

import { useMagCategoryMenuStyles } from '@mui-treasury/styles/categoryMenu/mag';
import { usePoofSocialLinkStyles } from '@mui-treasury/styles/socialLink/poof';
import { useReadyEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/ready';
import { usePlainNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/plain';

const darkTheme = createTheme({ palette: { type: 'dark' } });

const useStyles = makeStyles(({ palette, typography }) => ({
    top: {
        backgroundSize: 'cover',
        overflow: 'hidden',
    },
    middle: {
        backgroundColor: palette.type === 'dark' ? '#192D36' : palette.action.hover,
    },
    bottom: {
        backgroundColor:
            palette.type === 'dark' ? '#0F2128' : palette.action.selected,
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
    info: {
        ...typography.caption,
        color: palette.text.hint,
        marginTop: 8,
    }
}));

export const ArcAppFooterDemo = React.memo(function ArcAppFooter() {
    const classes = useStyles();
    return (
        <Box width={'100%'}>
            <Box px={2} py={6} className={classes.top} position={'relative'}>
                <div className={classes.overlay}>
                    <img
                        src={
                            'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80'
                        }
                        alt={''}
                    />
                </div>
                <ThemeProvider theme={darkTheme}>
                    <ColumnToRow
                        at={'sm'}
                        cssPosition={'relative'}
                        columnStyle={{ alignItems: 'center', textAlign: 'center' }}
                        rowStyle={{ justifyContent: 'center' }}
                        gap={{ xs: 2, sm: 3, md: 4 }}
                        wrap
                    >

                    </ColumnToRow>
                </ThemeProvider>
            </Box>
            <Box px={2} py={10} className={classes.middle}>
                <Container disableGutters>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4} lg={3}>
                            <SocialProvider useStyles={usePoofSocialLinkStyles}>
                                <SocialLink brand={'Envelope'} />
                                <SocialLink brand={'GooglePlus'} />
                                <SocialLink brand={'Pinterest'} />
                                <SocialLink brand={'Dribbble'} />
                            </SocialProvider>
                        </Grid>
                        <Grid item xs={12} md={8} lg={3} style={{ marginLeft: 'auto' }}>
                            <Item>
                                Newsletter
                            </Item>
                            <Item>
                                <EmailSubscribe
                                    className={classes.form}
                                    onSubmit={email => alert(`Your email is ${email}.`)}
                                    useStyles={useReadyEmailSubscribeStyles}
                                    inputClearedAfterSubmit
                                >
                                    <EmailTextInput placeholder="Email..." />
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
                                    color={'textSecondary'}
                                >

                                    Designed by Anonymous © Fake Studio 2020 All right
                                    reserved

                                </Typography>
                            </Box>
                        </Item>
                    </ColumnToRow>
                </Container>
            </Box>
        </Box>
    );
});