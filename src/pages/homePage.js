import React from 'react'
import { Banner } from '../components/floatingBar/banner'
import RecomendedGames from '../components/recomendedGames/recomendedGames'

import Title from '../components/utils/Title'
import { COLOR_SHADOW_BLUE, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE } from '../components/utils/color'

const homePage = () => {

    return (
        <>
            <Banner />

            <RecomendedGames/>

            <Title
                name={'PROMOÇÕES'}
                color={COLOR_SHADOW_BLUE}
            />
        </>
    )
}

export default homePage