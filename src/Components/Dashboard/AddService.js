import React, { useState } from 'react';

const AddService = () => {

    const [info,setInfo] = useState({})
    const [file,setFile] = useState(null)

    const handleBlur = (e) =>{
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (e) =>{
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);
        

        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    alert("service added successfully")
                }
                else{
                    alert("Failed to add service")
                }
            })
           
        e.preventDefault()
    }

    const handleFileChange = (e) =>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    return (
        <div style={{backgroundColor:"white"}} className="p-3">
            <form  onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="exampleInputEmail1">Service Title</label>
                        <input onBlur={handleBlur} type="text" required className="form-control" name="title" placeholder="Service Title" />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="exampleInputPassword1">Description</label>
                        <input onBlur={handleBlur} type="text" required className="form-control" name="description" placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="exampleInputPassword1">icon</label>
                        <input onChange={handleFileChange} required  type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
        </div>
    );
};

export default AddService;