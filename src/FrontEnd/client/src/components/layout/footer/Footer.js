import React from 'react';
import Logo from './IMG/Captura.PNG';
import Facebook from './IMG/Facebook.svg';
import Instagram from './IMG/Instagram.svg';
import Flecha from './IMG/Flecha.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <link
                href='https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap'
                rel='stylesheet'
            />

            <footer className='p-3'>
                <div className='row'>
                    <div className='col-md-4 col-12 mt-5 text-center'>
                        <a href='' className='d-inline mx-3 enlaces'>
                            Feedback
                        </a>
                        <a href='' className='borderletra d-inline mx-3 px-4 enlaces'>
                            Help
                        </a>
                        <a href='' className='d-inline mx-sm-3 enlaces'>
                            FAQ
                        </a>
                    </div>

                    <div className='col-md-4 mt-5 mt-md-0 text-center'>
                        <p className='d-inline  mx-3'>
                            <img src={Logo} className='w-50' alt='' />
                        </p>
                    </div>

                    <div className='col-md-3  mt-5 fb-icon'>
                        <p className='d-inline  mx-3 Follow'>FOLLOW ON</p>
                        <a href='#' className='d-inline  mx-3'>
                            <img src={Facebook} className='borderimg  px-3' alt='' />
                        </a>
                        <a href='#' className='d-inline  '>
                            <img src={Instagram} alt='' />
                        </a>
                    </div>

                    <div className='col-md-1  col-12 cpx-5  p-4'>
                        <a className='btn btn-danger w-100' href=''>
                            <img src={Flecha} alt='' />
                        </a>
                    </div>
                </div>

                <div className=' text-center'>
                    <p className='pt-5 h6 enlaces'>©2021 All rights reserved </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
