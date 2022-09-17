import React, { useContext, useState, useEffect } from 'react';
import Details from '../videoPlayer/MovieDetails';
import Player from '../videoPlayer/Player';
import AppContext from '../../context/appContext';

const TrailerDetail = ({ match }) => {
    const appContext = useContext(AppContext);

    const [trailer, setTrailer] = useState(null);

    const { trailers } = appContext;

    const current = trailers.find((trailer) => trailer.id == match.params.id);

    return (
        <div className='trailer-detail'>
            <Player url={current.url} />
            <Details current={current} />
        </div>
    );
};

export default TrailerDetail;
