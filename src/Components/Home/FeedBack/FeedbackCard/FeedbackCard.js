import React from 'react';

const FeedbackCard = ({feedBack}) => {
    const {name,designation,description,image} = feedBack
    return (
       <div className="col-md-4 mb-4">
            <div class="card" style={{width: "18rem"}}>
                <div class="card-body">
                    <div className="d-flex">
                        <img style={{height:"50px",width:"50px"}} src={`data:image/png;base64,${image.img}`}></img>
                        <div className="ml-2">
                            <h5 class="card-title">{name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{designation}</h6>
                        </div>
                    </div>
                    <p class="card-text">{description}</p>
                </div>
            </div>
       </div>
    );
};

export default FeedbackCard;