import React from 'react';
import TopBar from '../components/TopBar/TopBar';

function Home() {
    const username = "Ricardo";
    return (
        <div>
            <TopBar userAccount={username} />
        </div>
    )
}

export default Home