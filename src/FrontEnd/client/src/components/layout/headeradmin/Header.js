import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/style.css'
import logo from './IMG/1.PNG';
import ImgUser from './IMG/Ellipse 6.png';
import { DropdownButton } from 'react-bootstrap';
import {Dropdown} from "react-bootstrap";



const Header = () => {
    return <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img src={logo} alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mr-auto ">
            <li className="nav-item active">
              <a className="nav-link" href="#"><i className='fa fa-home'></i>Home <span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item active">
                <a class="nav-link" href="#"><i className='fa fa-film'></i>Manager <span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item active">
                <a class="nav-link" href="#"><i className='fa fa-users'></i>About us <span class="sr-only">(current)</span></a>
            </li>
         
          </ul>

          
          <form className=" d-flex form-inline my-2 my-lg-0 mx-5">
            <input className="form-control mr-sm-2 mx-1" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>

          <div className="separar d-none d-sm-block ">
              <img src={ImgUser} className="w-50" alt=""/>
          </div>

              <DropdownButton
                id="dropdown-basic-button"
                variant="dark"
                title=""
              >
                <Dropdown.Item href="#/action-2">New Movie</Dropdown.Item>
                <Dropdown.Item href="#/action-1"> Log out </Dropdown.Item>

              </DropdownButton>
       

                    
        </div>

    </nav>

    </div>;
};

export default Header;
