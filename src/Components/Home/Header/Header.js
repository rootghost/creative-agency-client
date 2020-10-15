import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="container ">
           <section className=" header-section mb-5">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
           </section>
        </div>
    );
};

export default Header;