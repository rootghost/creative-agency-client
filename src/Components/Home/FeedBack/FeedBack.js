import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FeedbackCard from './FeedbackCard/FeedbackCard';

const FeedBack = () => {
    const [feedBack,setFeedback] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/feedback")
        .then(res => res.json())
        .then(data => setFeedback(data))
    },[])
    return (
        <section className="container mt-5">
            <h4 style={{color:"#111430"}} className="text-center font-weight-bold">Clients <span style={{color:"#7AB259"}}>Feedback</span></h4>
            <div className="row mt-5">
                {
                    feedBack.map(feedBack => <FeedbackCard feedBack={feedBack}></FeedbackCard>)
                }
            </div>
        </section>
    );
};

export default FeedBack;