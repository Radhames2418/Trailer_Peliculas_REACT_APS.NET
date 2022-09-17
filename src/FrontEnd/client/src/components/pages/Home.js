import React from 'react';
import Banner from '../feed/Banner';
import Trailers from '../feed/Trailers';

const Home = ({ trailers }) => {
    return (
        <div className='home'>
            <Banner />
            <Trailers trailers={trailers} />
        </div>
    );
};

export default Home;
