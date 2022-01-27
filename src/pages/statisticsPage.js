import React from 'react'
import { Banner } from '../components/floatingBar/banner'
import ChartTopReviewed from '../components/topReviews/topReviews'
import ChartTopLastTwoWeeks from '../components/topLastTwoWeeks/topLastTwoWeeks'
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
            <ChartTopLastTwoWeeks />
        </>
    )
}

export default statisticsPage;