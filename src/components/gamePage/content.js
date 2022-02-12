import React from 'react'
import Title from '../utils/Title'
import { COLOR_SHADOW_BLUE } from '../utils/color'
import MoreAbout from './moreAbout';
import AboutGame from './aboutGame';
import Reviews from './reviews';

function content() {
    return (
        <div>
            <Title
                name={'Nome'}
                color={COLOR_SHADOW_BLUE}
            />

            <AboutGame />

            <Title
                name={'Mais sobre a editora'}
                color={COLOR_SHADOW_BLUE}
            />

            <MoreAbout />

            <Title
                name={'Avaliações'}
                color={COLOR_SHADOW_BLUE}
            />

            <Reviews />
        </div>
    )
}

export default content;