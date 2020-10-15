import React from 'react';
import logo from "../../../images/logos/logo.png"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg  ">
            <a class="navbar-brand" href="#"><img style={{height:"47px"}} src={logo}></img></a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <a className="nav-link font-weight-bold text-dark mr-5" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link font-weight-bold text-secondary mr-5" href="#">Our Portpolio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link font-weight-bold text-secondary mr-5" href="#">Our Team</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link font-weight-bold text-secondary mr-5 " href="#">Contact Us</a>
                    </li>
                    <button style={{backgroundColor:"#111430"}} className="btn text-white">Log in</button>
                </ul>
            </div>
      </nav>
    );
};

export default Navbar;