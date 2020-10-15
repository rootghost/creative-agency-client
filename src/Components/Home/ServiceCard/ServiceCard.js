import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {title,description,image} = service
    return (
          <div className="col-md-4 col-sm-12 col-12 mb-4">
            <Link to={`/dashboard/${title}`} className="text-decoration-none">
                <div className="card" style={{width: "18rem"}}>
                    <div className="d-flex mx-auto">
                        <img style={{width:"74px",height:"74px"}} src={`data:image/png;base64,${image.img}`} className="mt-4" alt="..."/>
                    </div>
                    <div className="card-body">
                        <h5 className="text-center font-weight-bold">{title}</h5>
                        <p className="card-text text-center text-secondary">{description}</p>
                    </div>
                </div>
            </Link>
          </div>


    );
};

export default ServiceCard;