import React from 'react'
import { Banner } from '../components/floatingBar/banner'
import RecomendedGames from '../components/recomendedGames/recomendedGames'

const homePage = () => {

    return (
        <>
            <Banner />

            <RecomendedGames/>
        </>
    )
}

export default homePage