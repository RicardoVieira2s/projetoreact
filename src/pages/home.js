import React from 'react';
import TopBar from '../components/topBar/topBar';
//import Footer from '../components/footer/footer';
import '../App.css';

const home = () => {
    const username = "Ricardo";
    return (
        <div>
            <TopBar userAccount={username} />
            {/* <Footer /> */}
        </div>
    )
}

export default home