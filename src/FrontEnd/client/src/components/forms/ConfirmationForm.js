import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContext from '../../context/appContext';

const ConfirmationForm = ({ id, closeModal }) => {
    const appContext = useContext(AppContext);

    const { deleteTrailer } = appContext;

    const handleDelete = () => {
        deleteTrailer(id);
        closeModal();
    };

    return (
        <div className='container   '>
            <div className='row'>
                <div className='col-md-2 col-12  '></div>
                <div className='col-md-8 col-12 rounded form-group bg-dark p-md-5'>
                    <h1 className='mb-md-5 mt-md-3 mt-5 text-white text-center display-5'>
                        <p>Are you sure that you want to delete this trailer? </p>
                    </h1>

                    <div className='p-5'>
                        <div className='row'>
                            <div className='col-md-6 col-12 text-white'>
                                <button
                                    onClick={handleDelete}
                                    className='btn p-2 btn-danger d-block w-100 mb-3 mt-4'
                                    type='submit'
                                >
                                    <b>Accept</b>
                                </button>
                            </div>

                            <div className='col-md-6 col-12 text-white'>
                                <button
                                    onClick={closeModal}
                                    className='btn p-2 btn-danger d-block w-100 mb-3 mt-4'
                                    type='submit'
                                >
                                    <b>Cancel</b>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-2  '> </div>
            </div>
        </div>
    );
};

export default ConfirmationForm;
