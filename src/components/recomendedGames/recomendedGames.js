import React from 'react'
import Title from '../utils/Title'
import { COLOR_SHADOW_BLUE, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE } from '../utils/color'
import { makeStyles } from '@material-ui/core/styles'
import GameCardBig from '../utils/gameCard/hpGameCardBig'
import GameCardSmall from '../utils/gameCard/hpGameCardSmall'
import { Grid } from "@material-ui/core";


const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: COLOR_OXFORD_BLUE,
        color: COLOR_BDAZZLED_BLUE,
        paddingBottom: '40px',
        height: '100%'
    },
}))

const games = [
    {
        id: 1,
        name: 'Fortnite',
        description: 'Fortnite is a survival game where 100 players fight against each other in player versus player combat to be the last one standing. It is a fast-paced, action-packed game, not unlike The Hunger Games, where strategic thinking is a must in order to survive. There are an estimated 125 million players on Fortnite.',
        cover_image: 'https://cdn2.unrealengine.com/7up-v2-3840x2160-e11fc91a84d6.jpg',
        url: 'https://www.google.pt',
        rate: 1,
        price: 19.99
    },
    {
        id: 2,
        name: 'CS GO',
        description: 'Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series. ... The game pits two teams, Terrorists and Counter-Terrorists, against each other in different objective-based game modes.',
        cover_image: 'http://media.steampowered.com/apps/csgo/blog/images/fb_image.png',
        url: 'https://www.google.pt',
        rate: 3.4,
        price: 19.99
    },
    {
        id: 3,
        name: 'My Little Pony',
        description: 'Nightmare Moon has returned and covered the land in eternal darkness after escaping her imprisonment by her sister Celestia in the moon. Twilight Sparkle is the only pony to escape the darkness along with Spike the dragon, her assistant, which are attempting to rebuild their home, Ponyville, save everypony and collect the Elements of Harmony to defeat Nightmare Moon and bring sunlight back to the land of Equestria.',
        cover_image: 'https://www.giantbomb.com/a/uploads/scale_small/3/36058/2352970-mlp_new_pack.jpg',
        url: 'https://www.google.pt',
        rate: 3.6,
        price: 10
    },
    {
        id: 4,
        name: 'Metin2',
        description: 'Metin2 é um MMORPG originalmente desenvolvido pela Ymir Entertainment e lançado na Coreia em 2004.',
        cover_image: 'https://cdn.akamai.steamstatic.com/steam/apps/550900/capsule_616x353.jpg',
        url: 'https://www.google.pt',
        rate: 1.9,
        price: 15.7
    },
    {
        id: 5,
        name: 'Sims4',
        description: 'The Sims é uma série de jogos eletrônicos de simulação de vida real criado pelo designer de jogos Will Wright e produzida pela Maxis. O primeiro jogo da série, The Sims, foi lançado em 4 de fevereiro de 2000. Os jogos da série The Sims são, em grande parte, jogos sandbox, pois não possuem objetivos definidos.',
        cover_image: 'https://www.internetmatters.org/wp-content/uploads/2021/07/sims-4-update-1-29.jpg',
        url: 'https://www.google.pt',
        rate: 5,
        price: 12
    },
]

export default function RecomendedGames() {
    const classes = useStyles()
    return (
        <div >
            <Title
                name={'Recomendados'}
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
                                <GameCardSmall game={games[2]} />
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </div>


        </div>



    )
}