import React, { useState, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContext from '../../context/appContext';

const EditTrailerForm = ({ trailer, closeModal }) => {
    const [data, setData] = useState({
        id: 0,
        name: '',
        category: '',
        image: null,
        releaseYear: null,
        duration: 0,
        url: '',
        description: '',
    });

    useEffect(() => {
        setData({
            ...data,
            id: trailer.id,
            name: trailer.name,
            category: trailer.category,
            duration: trailer.duration,
            url: trailer.url,
            description: trailer.description,
        });
    }, []);

    const appContext = useContext(AppContext);

    const { updateTrailer } = appContext;

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleImageChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.files[0],
        });
    };

    const sendData = (event) => {
        event.preventDefault();
        updateTrailer(data);
        closeModal();
    };

    return (
        <div className='container  text-start '>
            <div className='row'>
                <div className='col-md-1 col-12  '></div>

                <div className='col-md-10 col-12 rounded form-group bg-dark '>
                    <h1 className='mb-5 mt-md-3 mt-5 text-white text-center display-5'>
                        <b>Editar Trailer</b>
                    </h1>

                    <form
                        className='p-5'
                        onSubmit={sendData}
                        encType='multipart/form-data'
                    >
                        <div className='row'>
                            <div className='col-md-6 col-12 text-white'>
                                <label className='d-block mb-2'>Nombre</label>
                                <input
                                    className='form-control d-inline  w-100 mx-  mb-3 '
                                    type='text'
                                    name='name'
                                    value={data.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className='col-md-6 col-12  text-white'>
                                <label className='d-block  mb-2'>Categoria</label>
                                <select
                                    className='form-select mb-3 '
                                    aria-label='Default selecte'
                                    name='category'
                                    value={data.category}
                                    onChange={handleInputChange}
                                >
                                    <option defaultValue>Category</option>
                                    <option value='Action'>Action</option>
                                    <option value='Comedy'>Comedy</option>
                                    <option value='Drama'>Drama</option>
                                    <option value='Suspense'>Suspense</option>
                                    <option value='Terror'>Terror</option>
                                </select>
                            </div>

                            <div className='col-md-6 col-12  text-white'>
                                <label className='d-block  mb-2'>
                                    Año de lanzamiento
                                </label>
                                <input
                                    className='form-control d-inline  w-100 mx-  mb-3 '
                                    type='date'
                                    name='releaseYear'
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className='col-md-6 col-12   text-white'>
                                <label className='d-block  mb-2'>
                                    Duracion en minutos
                                </label>
                                <input
                                    className='form-control d-inline  w-100 mx-  mb-3 '
                                    type='number'
                                    name='duration'
                                    value={data.duration}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className='col-md-6 col-12   text-white'>
                                <label className='d-block  mb-2'>Imagen</label>
                                <input
                                    className='form-control d-inline  w-100 mx-  mb-3 '
                                    type='file'
                                    name='image'
                                    onChange={handleImageChange}
                                    required
                                />
                            </div>

                            <div className='col-md-6 col-12  text-white'>
                                <label className='d-block  mb-2'>Trailer url</label>
                                <input
                                    className='form-control d-inline  w-100 mx-  mb-3 '
                                    type='text'
                                    name='url'
                                    value={data.url}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className='col-12 text-white'>
                                <label className='d-block text-center  mb-2'>
                                    Descripcion{' '}
                                </label>
                                <textarea
                                    name='description'
                                    cols='30'
                                    rows='4'
                                    maxLength='250'
                                    className='w-100 form-control'
                                    value={data.description}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                        </div>

                        <button className='btn btn-danger d-block w-100 mb-3 mt-4'>
                            Aceptar
                        </button>
                        <button
                            onClick={closeModal}
                            className='btn btn-danger d-block w-100 mb-3 mt-4'
                        >
                            Cancelar
                        </button>
                    </form>
                </div>

                <div className='col-md-1  '></div>
            </div>
        </div>
    );
};

export default EditTrailerForm;
