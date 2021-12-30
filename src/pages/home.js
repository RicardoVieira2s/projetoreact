import React from 'react';
import TopBar from '../components/topBar/topBar';
import { OceanAppFooterDemo } from '../components/footer/footer';
import '../App.css';

const home = () => {
    const username = "Ricardo";
    return (
        <>
            <TopBar userAccount={username} />
            <OceanAppFooterDemo />
        </>

    )
}

export default home