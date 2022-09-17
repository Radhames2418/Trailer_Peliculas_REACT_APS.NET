import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrailerRow from './TrailerRow';
import CreateTrailerForm from '../forms/CreateTrailerForm';
import AppContext from '../../context/appContext';
import { Modal, ModalBody } from 'reactstrap';

const Trailertable = () => {
    const appContext = useContext(AppContext);

    const { getTrailers, trailers } = appContext;

    const [modal, setModal] = useState(false);

    const [search, setSearch] = useState('');

    const openCModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    useEffect(() => {
        getTrailers();
        console.log(trailers);
    }, []);

    const handleInputChange = (e) => {
        setSearch(e.target.value);
        getTrailers(search);
    };

    const searchTrailer = () => {
        setSearch('');
        getTrailers();
    };

    return (
        <div className='trailer-table'>
            <table className='table table-striped table-dark'>
                <thead>
                    <tr className='text-center'>
                        <th>Id</th>
                        <th>Cover</th>
                        <th>Nombre</th>
                        <th>Categoria</th>
                        <th>
                            <button
                                onClick={openCModal}
                                className='login btn btn-success add'
                                type='submit'
                            >
                                Add
                            </button>
                        </th>
                        <th>
                            <div className='table-form'>
                                <input
                                    className='form-control '
                                    type='search'
                                    value={search}
                                    onChange={handleInputChange}
                                    placeholder='Search'
                                    aria-label='Search'
                                />
                                <button
                                    onClick={searchTrailer}
                                    className='login btn btn-danger ml-1'
                                    type='submit'
                                >
                                    Clear
                                </button>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {trailers.map((trailer) => (
                        <TrailerRow key={trailer.id} trailer={trailer} />
                    ))}
                </tbody>
            </table>
            <Modal className='modal-xl position-center w-100' isOpen={modal}>
                <ModalBody className='bg-dark text-end '>
                    <CreateTrailerForm closeModal={closeModal} />
                </ModalBody>
            </Modal>
        </div>
    );
};

export default Trailertable;
