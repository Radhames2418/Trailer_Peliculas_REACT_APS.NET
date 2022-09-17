import React, { useContext, useEffect } from 'react';
import TrailerCard from './TrailerCard';
import AppContext from '../../context/appContext';
import { Link } from 'react-router-dom';

const Trailers = () => {
    const appContext = useContext(AppContext);

    const { getTrailers, trailers } = appContext;

    useEffect(() => {
        getTrailers();
    }, []);

    return (
        <div className='trailers'>
            <h2>Trailers</h2>

            <div className='feed'>
                {trailers.map((trailer) => (
                    <Link key={trailer.id} to={`/trailer/${trailer.id}`}>
                        <TrailerCard coverSrc={trailer.coverSrc} name={trailer.name} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Trailers;
