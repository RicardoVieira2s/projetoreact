import React from 'react'
import Title from '../utils/Title'
import { COLOR_SHADOW_BLUE } from '../utils/color'
import GameCardBig from '../utils/gameCard/hpGameCardBig'
import GameCardSmall from '../utils/gameCard/hpGameCardSmall'
import { Grid } from "@material-ui/core";

export default function GamesOnSale( {games} ) {
    
    return (
        <div >
            <Title
                name={'Promoções'}
                color={COLOR_SHADOW_BLUE}
            />
            <div style={{ padding: '0px 14px 0px 14px ' }}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="stretch"
                >
                    {/*  TODO: align center*/}

                    <Grid item xs={12} sm={12} md={5} lg={5}
                        style={{ padding: '0px 10px 0px 0px ' }}>
                        <Grid style={{ height: "100%" }} >
                            <GameCardBig game={games[0]} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7} style={{ padding: '0px 0px 0px 10px' }} >
                        <Grid container style={{ height: "100%" }} >
                            <Grid item xs={12} sm={12} md={6} lg={6} style={{ padding: '0px 10px 10px 0px' }}>
                                <GameCardSmall game={games[1]} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} style={{ padding: '0px 0px 10px 10px' }}>
                                <GameCardSmall game={games} />
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </div>
        </div>
    )
}