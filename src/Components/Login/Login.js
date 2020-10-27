import React from 'react';
import logo from "../../images/logos/logo.png"
import google from "../../images/logos/google1.png"
import "./Login.css"
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useContext } from 'react';
import { userContex } from '../../App';
import firebaseConfig from './FirebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig)

const Login = () => {

    const [isloggedIn,setloggedIn] = useContext(userContex);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    let provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(result => {
           const {displayName,email} = result.user
          if(displayName && email){
            const userInfo = {name : displayName,email:email}
            setloggedIn(userInfo)
            history.replace(from)
          }
        })
    }
    return (
        <div>
            <div className="d-flex mt-5 mb-5">
                <img className="mx-auto" style={{width:"150px",height:"47px"}} src={logo} alt=""/>
            </div>
           <div className="d-flex align-items-center justify-content-center">
                <div className="login-box">
                    <h3 className="mt-5">Login with</h3>
                    <button onClick={handleSignIn} className="sign-in-btn mb-5"><img className="btn-img" src={google} alt=""/> Continue With Google</button>
                    <p className="text-center mb-5 font-weight-bold">Don't have an account?<span onClick={handleSignIn}  style={{color:"#3F90FC",cursor:"pointer"}}>Create an acccount</span></p>
                </div>
           </div>
        </div>
    );
};

export default Login;