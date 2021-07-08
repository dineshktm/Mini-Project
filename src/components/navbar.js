import React, {Fragment} from "react";
import {Link} from 'react-router-dom';
import './navbar.css';
function Navbar(){
    return (
        <Fragment>
            <nav id="nav" class="navbar navbar-expand-sm bg-dark navbar-danger">
             {/* Brand */}
            <a class="navbar-brand" id="nav-title" href="#">JAYASAKTHI PRINTERS</a>

            {/* <!-- Links --> */}
            <ul id="nav-items" class="navbar-nav">
                <li  class="nav-item">
                <Link class="nav-link" to="/">HOME</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/About">ABOUT US</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/Gallery">GALLERY</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/Login">ORDERS</Link>
                </li>
                {/* <!-- Dropdown --> */}
                 {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    Dropdown link
                </a>
                </li> 
                */}
                {/* <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Link 1</a>
                    <a class="dropdown-item" href="#">Link 2</a>
                    <a class="dropdown-item" href="#">Link 3</a>
                </div> 
                */}
                 
            </ul>
            </nav>
            
            </Fragment> 
);
};

export default Navbar;

