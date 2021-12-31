import React from 'react'
import { ArcAppFooterDemo } from '../components/footer/footer'

const cart = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                heigh: '90vh'
            }}
        >
            <h1>Cart Page.</h1>
            <ArcAppFooterDemo />
        </div>
    )
}

export default cart