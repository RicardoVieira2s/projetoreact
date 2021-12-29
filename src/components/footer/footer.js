import * as React from 'react';

import './footer.css';

import {
    CategoryProvider,
    CategoryTitle,
    CategoryItem,
} from '@mui-treasury/components/menu/category';
import {
    SocialProvider,
    SocialLink,
} from '@mui-treasury/components/socialLink';
import { useBallSocialLinkStyles } from '@mui-treasury/styles/socialLink/ball';

import { useNikiCategoryMenuStyles } from '@mui-treasury/styles/categoryMenu/niki';
import { ColumnToRow, Row, Item } from '@mui-treasury/components/flex';
import {
    EmailSubscribe,
    EmailTextInput,
    SubmitButton,
} from '@mui-treasury/components/EmailSubscribe';
import { useInfoEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/info';
import ArrowForward from '@material-ui/icons/ArrowForward';

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const OceanAppFooterDemo = React.memo(function OceanAppFooter() {
    return (
        <div class='footer-container'>
            <Box width={'100%'} px={{ xs: 2, sm: 3, lg: 4 }}>
                <Box pt={6} pb={{ md: 6 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4} lg={10}>
                            <Box>
                                <SocialProvider useStyles={useBallSocialLinkStyles}>
                                    <SocialLink brand={'Envelope'} />
                                    <SocialLink brand={'GooglePlus'} />
                                    <SocialLink brand={'Pinterest'} />
                                    <SocialLink brand={'Dribbble'} />
                                </SocialProvider>
                            
                                <CategoryProvider useStyles={useNikiCategoryMenuStyles}>
                                    <CategoryTitle>
                                        Subscribe
                                    </CategoryTitle>
                                </CategoryProvider>
                            
                                <EmailSubscribe
                                    onSubmit={email => alert(`Your email is ${email}.`)}
                                    useStyles={useInfoEmailSubscribeStyles}
                                    inputClearedAfterSubmit
                                >
                                    <EmailTextInput placeholder="Email address" />
                                    <SubmitButton aria-label={'subscribe'}>
                                        <ArrowForward />
                                    </SubmitButton>
                                </EmailSubscribe>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Divider />
                <ColumnToRow
                    at={'md'}
                    columnStyle={{ alignItems: 'center' }}
                    rowStyle={{ alignItems: 'unset' }}
                >
                    <Item>
                        <Box py={1} textAlign={{ xs: 'center', md: 'right' }}>
                            <Typography
                                component={'p'}
                                variant={'caption'}
                                color={'textSecondary'}
                            >
                                ©Siriwatknp 2020 All right reserved
                            </Typography>
                        </Box>
                    </Item>
                </ColumnToRow>
            </Box>
        </div>
    );
});