import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import logo from "../../images/icons/service1.png"

const ServiceCard = ({order}) => {
    const {serviceTitle,status} = order
    const [service,setService] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/service?title=${serviceTitle}`)
        .then(res => res.json())
        .then(data => {
            setService(data)
        })
    },[])
    
    
    return (
      <div className="col-md-6 p-3">
            <div className="card">
                <div className=" p-4 row d-flex justify-content-between">
                    <div>
                        <img style={{height:"74px",width:"74px"}} src={`data:image/png;base64,${service[0]?service[0].image.img:""}`} alt=""/>
                    </div>
                    <div>
                        <button className={status === "pending"?"btn btn-danger":"btn btn-success"}>{status ==="pending"?"Pending":"Done"}</button>
                    </div>
                </div>
                    <div className="card-body">
                    
                        <h5 className="card-title">{service[0]?service[0].title:""}</h5> 
                        <p className="card-text">{service[0]?service[0].description:""}</p>
                    </div>
            </div>
      </div>
    );
};

export default ServiceCard;