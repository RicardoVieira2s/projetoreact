import * as React from 'react'
import CoverFlow from 'coverflow-react';
import { makeStyles } from "@material-ui/core";

const imagesArr = [
    'https://s2.glbimg.com/dLHiEFov94ONVIVLP2V85FWh7hE=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/3/t/9vl0fdRyi9SvlPOe33yA/subway-surfers-mais-baixado-downloads-decada-2010-2019.jpg',
    'https://exame.com/wp-content/uploads/2019/12/mario-kart-tour.jpg',
    'https://t8j5n5j3.rocketcdn.me/wp-content/uploads/2020/03/melhores-jogos-online-lista-com-os-melhores-jogos-para-se-entreter.jpg',
    'https://cdn.maioresemelhores.com/imagens/melhores-jogos-do-roblox-og.jpg',
    'https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2021/07/doodle-do-google.jpg'
];

const useStyles = makeStyles(({ }) => ({
    coverflowFather: {
        top:'94px',
        position: 'absolute'
    },
}))

export const Slideshow = React.memo(function GoofrSlideshow() {
    const classes = useStyles();
    return (
        <div className={classes.coverflowFather}>
            <CoverFlow imagesArr={imagesArr}
                direction='horizontal'
                width='1920'
                height='285'
                itemRatio='9:5'
                background='none'
            />
        </div>
    )
})