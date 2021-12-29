import React from 'react';
import TopBar from '../components/topBar/topBar';
import {OceanAppFooterDemo} from '../components/footer/footer';
import '../App.css';

const home = () => {
    const username = "Ricardo";
    return (
            <div>
                <TopBar userAccount={username} />
                <OceanAppFooterDemo />
            </div>                    
    )
}

export default home