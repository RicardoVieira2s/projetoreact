import * as React from 'react';

import './footer.css';

import {
    CategoryProvider,
    CategoryTitle,
    CategoryItem,
} from '@mui-treasury/components/menu/category';
import { useNikiCategoryMenuStyles } from '@mui-treasury/styles/categoryMenu/niki';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { SocialProvider, SocialLink } from '@mui-treasury/components/socialLink';
import { useBallSocialLinkStyles } from '@mui-treasury/styles/socialLink/ball';
import { ColumnToRow, Item } from '@mui-treasury/components/flex';
import { EmailSubscribe, EmailTextInput, SubmitButton } from '@mui-treasury/components/EmailSubscribe';
import { useReadyEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/ready';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
    form: {
        margin: 0,
        minWidth: 343,
        fontSize: '0.875rem',
        justifyContent: 'center',
        textAlign: 'center',
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

export const OceanAppFooterDemo = React.memo(function OceanAppFooter() {
    const classes = useStyles();
    return (
        
        <Box width={'100%'} px={{ xs: 2, sm: 3, lg: 4 }}>
            <Box pt={1} pb={{ md: 6 }}>
                <Grid item xs={12} md={4} lg={10}>
                    <Box>
                        <ColumnToRow
                            at={'sm'}
                            cssPosition={'relative'}
                            columnStyle={{ alignItems: 'right', textAlign: 'right' }}
                            rowStyle={{ justifyContent: 'right' }}
                            gap={{ xs: 2, sm: 3, md: 4 }}
                            wrap
                        >
                            <SocialProvider useStyles={useBallSocialLinkStyles}>
                                <SocialLink brand={'Envelope'} />
                                <SocialLink brand={'GooglePlus'} />
                                <SocialLink brand={'Pinterest'} />
                                <SocialLink brand={'Dribbble'} />
                            </SocialProvider>
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
                        </ColumnToRow>
                    </Box>
                </Grid>
            </Box>
            <Divider />
            <ColumnToRow
                at={'md'}
                columnStyle={{ alignItems: 'center' }}
                rowStyle={{ alignItems: 'unset' }}
            >
                <Item>
                    <Box py={1} textAlign={{ xs: 'center', md: 'center' }}>
                        <Typography
                            component={'p'}
                            variant={'caption'}
                            color={'textSecondary'}
                        >
                            © 2022 GOOFR. All rights reserved.
                        </Typography>
                    </Box>
                </Item>
            </ColumnToRow>
        </Box>
    );
});