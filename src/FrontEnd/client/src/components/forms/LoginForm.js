import React, { useState, useContext } from 'react';
import AppContext from '../../context/appContext';

const LoginForm = ({ closeModal }) => {
    const [fields, setFieds] = useState({
        email: '',
        password: '',
    });

    const appContext = useContext(AppContext);

    const { login } = appContext;

    const handleInputChange = (e) => {
        setFieds({
            ...fields,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(fields);
        closeModal();
    };

    return (
        <div className='login-form'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12  form-group bg-dark p-md-5'>
                        <form className='' onSubmit={handleSubmit}>
                            <h1 className='mb-5 text-white text-center display-4'>
                                <b>Sing in</b>
                            </h1>

                            <input
                                className='form-control d-block  w-100 mt-4 mb-3 '
                                type='email'
                                name='email'
                                placeholder='Email'
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                className='form-control d-block  w-100 mb-5'
                                type='password'
                                name='password'
                                placeholder='Password'
                                onChange={handleInputChange}
                                required
                            />
                            <button
                                className='btn btn-danger d-block w-100 mb-3'
                                type='submit'
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
