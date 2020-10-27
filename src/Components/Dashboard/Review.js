import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) =>{
       const info = {...data,image:"person"}
       fetch("https://secret-garden-14792.herokuapp.com/addFeedback",{
           method:"POST",
           headers:{"Content-type":"application/json"},
           body : JSON.stringify(info)
       })
       .then(res => res.json())
       .then(data =>{
           if(data){
               alert("review added successfully")
           }
           else{
               alert("failed to add review")
           }
       })
    }
    return (
        <div className="col-md-6">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group">
                <input type="text" ref={register({ required: true })} name="name" class="form-control" placeholder="Your name"  aria-describedby="emailHelp"/>
                {errors.name && <span style={{color:"red"}}>Name is required</span>}
            </div>
            <div class="form-group">
                <input type="text" ref={register({ required: true })} name="designation" class="form-control" placeholder="Company's Name Designation"  aria-describedby="emailHelp"/>
                {errors.name && <span style={{color:"red"}}>Designation is required</span>}
            </div>
            <div class="form-group">
                <textarea class="form-control" ref={register({ required: true })} name="description" placeholder="Description" rows="3"></textarea>
                {errors.name && <span style={{color:"red"}}>Description is required is required</span>}
            </div>
            <button style={{backgroundColor:"#111430"}} className="btn pr-5 pl-5 text-white">Submit</button>
            
        </form>
    </div>
    );
};

export default Review;