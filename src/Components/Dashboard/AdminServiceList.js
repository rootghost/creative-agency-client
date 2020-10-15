import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceTable from './ServiceTable';

const AdminServiceList = () => {
    const [allService,setAllService] = useState([])
   useEffect(()=>{
        fetch("http://localhost:5000/allorder")
        .then(res => res.json())
        .then(data =>{
            setAllService(data)
        })
   },[])
   
    return (
        <div style={{backgroundColor:"white"}} className="p-3">
            <table className="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Service</th>
                    <th scope="col">Projeect Details</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allService.map(service => <ServiceTable key={service._id} service={service}></ServiceTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AdminServiceList;