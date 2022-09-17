import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContext from '../../context/appContext';
import { Redirect } from 'react-router-dom';

const CreateTrailerForm = ({ closeModal }) => {
    const [data, setData] = useState({
        name: '',
        category: '',
        image: null,
        releaseYear: null,
        duration: 0,
        url: '',
        description: '',
    });

    const appContext = useContext(AppContext);

    const { createTrailer } = appContext;

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
        createTrailer(data);
        closeModal();
    };

    return (
        <div className='container text-start '>
            <div className='row'>
                <div className='col-md-12 col-12 rounded form-group bg-dark p-md-5'>
                    <h1 className='mb-5 mt-md-3 mt-5 text-white text-center display-5'>
                        <b>Crear Trailer</b>
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
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                        </div>

                        <button
                            className='btn btn-danger d-block w-100 mb-3 mt-4'
                            type='submit'
                        >
                            Aceptar
                        </button>

                        <button
                            onClick={closeModal}
                            className='btn btn-danger d-block w-100 mt-4'
                            type='submit'
                        >
                            Cancelar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateTrailerForm;
