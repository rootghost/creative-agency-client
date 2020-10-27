import React, { useContext } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { userContex } from '../../App';

const OrderForm = ({service}) => {

    const [isloggedIn,setloggedIn] = useContext(userContex);
    const [orderInfo,setOrderInfo] = useState({})
    const { register, handleSubmit, watch, errors } = useForm();

     const onSubmit = data =>{
         const info = {...data,status : "pending"}
         fetch("https://secret-garden-14792.herokuapp.com/addOrder",{
             method:"POST",
             headers : {"Content-type": "application/json"},
             body : JSON.stringify(info)
         })
         .then(res => res.json())
         .then( data =>{
             if(data){
                 alert("Order placed successfully")
             }
             else{
                 alert("failed to place order")
             }
         })
     }
 
    return (
        <div className="col-md-6">
            <form  onSubmit={handleSubmit(onSubmit)} >
                <div class="form-group">
                    <input type="text" ref={register({ required: true })} class="form-control"  name="name" defaultValue={isloggedIn.name} placeholder="Your name/company Name"  aria-describedby="emailHelp"/>
                    {errors.name && <span style={{color:"red"}}>Name is required</span>}
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" ref={register({ required: true })} name="email" defaultValue={isloggedIn.email} placeholder="Your email address"  aria-describedby="emailHelp"/>
                    {errors.name && <span style={{color:"red"}}>Email is required</span>}
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" ref={register({ required: true })} name="serviceTitle" defaultValue={service} aria-describedby="emailHelp"/>
                    {errors.name && <span style={{color:"red"}}>Service Title is required</span>}
                </div>
                <div class="form-group">
                    <textarea class="form-control" placeholder="Product Details" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Price" aria-describedby="emailHelp"/>
                </div>
                <button style={{backgroundColor:"#111430"}} className="btn pr-5 pl-5 text-white">Send</button>
                
            </form>
        </div>
    );
};

export default OrderForm;