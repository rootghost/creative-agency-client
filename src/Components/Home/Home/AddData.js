import React from 'react';
import { useState } from 'react';

const AddData = () => {
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
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault()
    }

    const handleFileChange = (e) =>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">des</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="des" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    );
};

export default AddData;