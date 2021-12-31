import React from 'react'
import {ArcAppFooterDemo} from '../components/footer/footer'

const accountPage = () => {
    return (
        <div 
            style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                heigh: '90vh' 
            }}
        >
            <h1>account Page.</h1>
            <ArcAppFooterDemo />
        </div>
    )
}

export default accountPage