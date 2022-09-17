import React from 'react';

const Player = ({ url }) => {
    return (
        <div className='player mt-5'>
            <iframe width='100%' height='700px' src={url}></iframe>
        </div>
    );
};

export default Player;
