import React from 'react'
import Header from './Header'
import AboutUs from './AboutUs';
import LatestUpdate from './LatestUpdate';

const Home = () => {

    return (
        <>
            <Header />
            <main>
                <AboutUs />
                <LatestUpdate/>
            </main>
        </>
    )
}

export default Home
