import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContex } from '../../App';
import logo from '../../images/logos/logo.png'

const DashboardHeader = ({option}) => {
    const [isloggedIn,setloggedIn] = useContext(userContex);
    return (
        <div className="row mt-4">
           <Link to="/home"><img style={{width:"150px"}} className="mr-auto ml-5"  src={logo} alt=""/></Link>
           <h5 className="ml-5 font-weight-bold">{option}</h5>
           <h5 className="ml-auto mr-5">{isloggedIn.name}</h5>
        </div>
    );
};

export default DashboardHeader;