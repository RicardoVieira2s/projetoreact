import React from 'react'
import { ArcAppFooterDemo } from '../components/footer/footer'

const library = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                heigh: '90vh'
            }}
        >
            <h1>Library Page.</h1>
            <ArcAppFooterDemo />
        </div>
    )
}

export default library