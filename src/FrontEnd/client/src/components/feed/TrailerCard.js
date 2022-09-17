import React from 'react';

const Trailercard = ({ name, coverSrc }) => {
    return (
        <div className='trailer-card'>
            <img src={coverSrc} className='img'></img>
            <h3 className='card-title'>{name}</h3>
        </div>
    );
};

export default Trailercard;
