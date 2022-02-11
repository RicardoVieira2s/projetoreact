import React from 'react'
import Title from '../utils/Title'
import { COLOR_SHADOW_BLUE } from '../utils/color'
import MoreAbout from './moreAbout';

function content() {
    return (
        <div>
            <Title
                name={'Nome'}
                color={COLOR_SHADOW_BLUE}
            />

            <Title
                name={'Mais sobre a editora'}
                color={COLOR_SHADOW_BLUE}
            />

            <MoreAbout />
            
            <Title
                name={'Avaliações'}
                color={COLOR_SHADOW_BLUE}
            />

            <div>dasdas</div>
        </div>
    )
}

export default content;