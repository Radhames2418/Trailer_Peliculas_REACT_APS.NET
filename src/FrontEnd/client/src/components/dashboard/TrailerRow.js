import React, { useState, useContext } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import ConfirmationForm from '../forms/ConfirmationForm';
import EditTrailerForm from '../forms/EditTrailerform';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrailerRow = ({ trailer }) => {
    const [confirmationModal, setConfirmationModal] = useState(false);

    const [editModal, setEditModal] = useState(false);

    const openConfirmationModal = () => {
        setConfirmationModal(true);
    };

    const closeConfirmationModal = () => {
        setConfirmationModal(false);
    };

    const openEditModal = () => {
        setEditModal(true);
    };

    const closeEditModal = () => {
        setEditModal(false);
    };
    return (
        <tr className='text-center'>
            <th scope='row'>
                <div className='data'>{trailer.id}</div>
            </th>
            <td className='table-img'>
                <img className='img-fluid' src={trailer.coverSrc}></img>
            </td>
            <td>
                <div className='data'>{trailer.name}</div>
            </td>
            <td>
                <div className='data'>{trailer.category}</div>
            </td>
            <td></td>
            <td>
                <div className='icons'>
                    <i
                        onClick={openEditModal}
                        className='fas fa-edit edit text-warning'
                    ></i>
                    <i
                        onClick={openConfirmationModal}
                        className='fas fa-trash-alt icon-delete text-danger delete'
                    ></i>
                </div>
            </td>
            <Modal className='modal-xl position-center w-50' isOpen={confirmationModal}>
                <ModalBody className='bg-dark text-end '>
                    <ConfirmationForm
                        id={trailer.id}
                        closeModal={closeConfirmationModal}
                    />
                </ModalBody>
            </Modal>

            <Modal className='modal-xl position-center w-100' isOpen={editModal}>
                <ModalBody className='bg-dark text-end '>
                    <EditTrailerForm trailer={trailer} closeModal={closeEditModal} />
                </ModalBody>
            </Modal>
        </tr>
    );
};

export default TrailerRow;
