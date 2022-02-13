import React from 'react'
import { Banner } from '../components/floatingBar/banner'
import ChartTopReviewed from '../components/topReviews/topReviews'
import ChartBestSellers from '../components/bestSellers/bestSellers'
import Title from '../components/utils/Title'
import { COLOR_SHADOW_BLUE } from '../components/utils/color'

function statisticsPage() {
    return (
        <>
            <Banner />
            <Title
                name={'Estatísticas'}
                color={COLOR_SHADOW_BLUE}
            />
            <ChartTopReviewed />
            <ChartBestSellers />
        </>
    )
}

export default statisticsPage;