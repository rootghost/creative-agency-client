import React from 'react';
import frame from "../../../images/logos/Frame.png"

const HeaderMain = () => {
    return (
        <section className="container row mt-5 pb-5">
            <div className="col-md-5 col-sm-12">
                <div className=" offset-md-1 mt-5">
                    <h1 className="font-weignt-bold">Let’s Grow Your <br/> Brand To The  <br/>Next  Level</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam placeat nesciunt obcaecati labore. Dolores inventore suscipit incidunt asperiores itaque harum!</p>
                    <button style={{backgroundColor:"#111430"}} className="btn pr-5 pl-5  text-white">Hire us</button>
                </div>
            </div>
            <div className="col-md-7 col-sm-12">
                <div>
                    <img style={{width:"100%"}} className="img-fluid" src={frame} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;