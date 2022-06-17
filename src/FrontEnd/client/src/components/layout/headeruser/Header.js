import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/style.css'
import logo from './IMG/1.PNG';
import {Modal, ModalBody} from "reactstrap";
import Login from '../login_form/LoginForm';




const Header = () => {

      const [modal, setModal] = useState(false);

      const abrirModal =()=>{
        setModal(true)
      }

      const cerrarModal =()=>{
        setModal(false)
      }

    return <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img src={logo} alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mr-auto ">

         
          </ul>

            <Modal className="modal-xl position-center mr w-50 h-25  "
                isOpen={modal}>
              <ModalBody className="bg-dark text-end rounded">
                  <div className="btn  btn-danger mt-3 mb-2" onClick={cerrarModal}><i className="fa fa-times" aria-hidden="true"></i></div>
                  <Login/>
              </ModalBody>
            </Modal>
          
            <button className="btn btn-danger my-2 my-sm-0" type="submit" onClick={abrirModal}>Search</button>
          
        </div>

    </nav>

    </div>;
};

export default Header;
