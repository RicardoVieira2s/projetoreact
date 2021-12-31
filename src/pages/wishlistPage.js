import React from 'react'
import { ArcAppFooterDemo } from '../components/footer/footer'

const wishlist = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                heigh: '90vh'
            }}
        >
            <h1>Wishlist Page.</h1>
            <ArcAppFooterDemo />
        </div>
    )
}

export default wishlist