import React, { useState, useContext } from 'react';
import logo from './headerLogo.png';
import ImgUser from './Ellipse 6.png';
import { Modal, ModalBody } from 'reactstrap';
import Login from '../../forms/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppContext from '../../../context/appContext';
import { Redirect } from 'react-router-dom';

const Header = () => {
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    };

    const appContext = useContext(AppContext);

    const { isLoged, logout } = appContext;

    const closeModal = () => {
        setModal(false);
    };

    const onLogout = () => {
        logout();
    };

    return (
        <div className='header'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link to='/' className='navbar-brand' href='#'>
                    <img src={logo} alt='' />
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                {isLoged && (
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav  mr-auto '>
                            <li className='nav-item active'>
                                <Link className='nav-link' to='/admin'>
                                    <i className='fas fa-cog'></i> Manage{' '}
                                </Link>
                            </li>
                        </ul>

                        <div className='separar d-none d-sm-block mr-2'>
                            <img src={ImgUser} className='w-100' alt='' />
                        </div>

                        <DropdownButton
                            id='dropdown-basic-button'
                            variant='dark'
                            title=''
                        >
                            <Dropdown.Item onClick={onLogout} href='#/action-1'>
                                {' '}
                                Log out{' '}
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                )}

                {!isLoged && (
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav  mr-auto '>
                            <li className='nav-item active'>
                                <a className='nav-link' href='#'></a>
                            </li>
                        </ul>

                        <div className='header-modal'>
                            <Modal
                                className='modal-s position-center w-75'
                                isOpen={modal}
                            >
                                <ModalBody className='bg-dark text-end '>
                                    <div
                                        className='btn  btn-danger mb-2'
                                        onClick={closeModal}
                                    >
                                        <i className='fa fa-times' aria-hidden='true'></i>
                                    </div>
                                    <Login closeModal={closeModal} />
                                </ModalBody>
                            </Modal>
                        </div>

                        <button
                            className='login btn btn-danger my-2 my-sm-0'
                            type='submit'
                            onClick={openModal}
                        >
                            Login
                        </button>
                    </div>
                )}
            </nav>
            {!isLoged && <Redirect to='/' />}
        </div>
    );
};

export default Header;
