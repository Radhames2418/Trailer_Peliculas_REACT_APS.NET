import React from 'react';
import Video from './bannerVideo.mp4';

const Banner = () => {
    return (
        <div className='banner'>
            <video src={Video} muted loop autoPlay></video>

            <div className='banner-description'>
                <h2>Avengers End Game</h2>
                <p>
                    Película de superhéroes estadounidense de 2019 basada en el equipo de
                    superhéroes Los Vengadores de Marvel Comics. Producida por Marvel
                    Studios y distribuida por Walt Disney Studios Motion Pictures, es la
                    secuela directa de Avengers: Infinity War (2018) y la película número
                    22 del Universo cinematográfico de Marvel (UCM).
                </p>
            </div>
        </div>
    );
};

export default Banner;
