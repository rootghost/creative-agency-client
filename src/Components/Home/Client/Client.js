import React from 'react';
import "./client.css"
import google from "../../../images/logos/google.png"
import netflix from "../../../images/logos/netflix.png"
import slack from "../../../images/logos/slack.png"
import airbnb from "../../../images/logos/airbnb.png"
import uber from "../../../images/logos/uber.png"


const Client = () => {
    return (
        <section className="row  d-flex justify-content-center mt-5 offset-md-1 offset-sm-2 offset-4 mb-3">

            <div className='col-md-2 col-sm-6 col-12 align-self-center'>
                <img className="d-inline client-img mr-5" src={slack} alt=""/>
            </div>
            <div className='col-md-2 col-sm-6 col-12'>
                <img className="d-inline client-img mr-5"src={google} alt=""/>
            </div>
            <div className="col-md-2 col-sm-6 col-12">
                <img className="d-inline client-img mr-5"src={uber} alt=""/>
            </div>
            <div className="col-md-2 col-sm-6 col-12">
                <img className="d-inline client-img mr-5"src={netflix} alt=""/> 
            </div>
            <div className="col-md-3 col-sm-6 col-12">
                <img className="d-inline client-img mr-5"src={airbnb} alt=""/>
            </div>

        </section>
    );
};

export default Client;