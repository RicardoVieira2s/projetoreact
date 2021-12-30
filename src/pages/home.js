import React from 'react';
import TopBar from '../components/topBar/topBar';
// import Footer from '../components/footer/footer';
import '../App.css';

const home = () => {
    const user = {name:"Ricardo"};
    const cart = {count: 4};
    return (
        <div>
            <TopBar 
                userAccount = {user}
                userCart = {cart}
            />
            {/* <Footer /> */}
        </div>
    )
}

export default home