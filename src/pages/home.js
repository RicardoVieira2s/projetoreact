import React from 'react';
import TopBar from '../components/topBar/topBar';
import {ArcAppFooterDemo} from '../components/footer/footer';
import '../App.css';

const home = () => {
    const username = "Ricardo";
    return (
        <div>
            <TopBar userAccount={username} />
            <ArcAppFooterDemo />
        </div>
    )
}

export default home