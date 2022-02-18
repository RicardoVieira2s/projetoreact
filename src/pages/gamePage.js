import React from 'react'
import Content from '../components/gamePage/content'
import { useParams } from 'react-router-dom'


function GamePage() {
    const { id } = useParams()
    return (
        <div>
            <Content gameId={id} />
        </div>
    )
}

export default GamePage
