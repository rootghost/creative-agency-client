import React from 'react';
import { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail] = useState({})
    const handleBlur = (e) =>{
        const info = {...email}
        info[e.target.name] = e.target.value;
        setEmail(info)
    }
    const handleSubmit = (e) =>{
        fetch("https://secret-garden-14792.herokuapp.com/addAdmin",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body : JSON.stringify(email)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                alert("Admin successfully added")
            }
            else{
                alert("failed to add admin")
            }
        })
        e.preventDefault()
    }
    return (
        <div className="p-3">
            <form onSubmit={handleSubmit} >
                <div class="form-group">
                    <input onBlur={handleBlur} type="email" required class="form-control"  name="email"  placeholder="Email"  aria-describedby="emailHelp"/>
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    );
};

export default MakeAdmin;