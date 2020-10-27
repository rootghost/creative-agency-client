import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContex } from '../../../App';
import logo from "../../../images/logos/logo.png"

const Navbar = () => {
    const [isloggedIn,setloggedIn] = useContext(userContex)
    return (
        <nav className="navbar navbar-expand-lg  ">
            <Link className="navbar-brand" to="/home"><img style={{height:"47px"}} src={logo}></img></Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link font-weight-bold text-dark mr-5" to="/home">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link font-weight-bold text-secondary mr-5" to="/portfolio">Our Portpolio</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link font-weight-bold text-secondary mr-5" to="/team">Our Team</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link font-weight-bold text-secondary mr-5 " to="contact">Contact Us</Link>
                    </li>
                    <Link to="/dashboard"><button style={{backgroundColor:"#111430"}} className="btn text-white">{isloggedIn.email?"Dashboard":"Log in"}</button></Link>
                </ul>
            </div>
      </nav>
    );
};

export default Navbar;