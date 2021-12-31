import React from 'react'
import {ArcAppFooterDemo} from '../components/footer/footer';

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

            <ArcAppFooterDemo />
        </div>
    )
}

export default library