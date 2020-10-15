import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {

    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res =>  res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section className="container mt-5">
                <h4 className="text-center mb-5 font-weight-bold">Provide awesome <span style={{color:"#7AB259"}}>services</span></h4>

                <div className='row'>
                    {
                        services.map(service => <ServiceCard service={service}></ServiceCard>)
                    }
                </div>
        </section>
        
    );
};

export default Services;