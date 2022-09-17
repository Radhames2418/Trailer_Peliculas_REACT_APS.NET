import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DetailsMovie({ current }) {
    const getYear = () => {
        const date = new Date(current.releaseYear);
        return date.getFullYear();
    };
    return (
        <div className='movie-details'>
            <div className='container-fluid  p-5 '>
                <h3 className='mb-5 font'>
                    <b>{current.name}</b>
                </h3>

                <h4 className='font'>
                    <b>
                        {getYear()} @ {current.duration}mins
                    </b>
                </h4>
                <h6 className='mb-5 color'>{current.category}</h6>

                <h5 className='mb-3 font'>
                    <b>Description</b>
                </h5>
                <p className='color font'>{current.description}</p>
            </div>
        </div>
    );
}
