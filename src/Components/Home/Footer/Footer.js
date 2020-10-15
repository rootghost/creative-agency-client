import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <section className="footer mt-5">
           <div className="container"> 
               <div className="row">
                    <div className="col-md-5 mt-5">
                        <h4>Let us handle your <br/> project, professionally.</h4>
                        <small>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</small>
                    </div>
                    <div className="col-md-7 mt-5">
                        <form>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Your Email Address" aria-describedby="emailHelp"/>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Your Name/Company Name" aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                                    <textarea class="form-control" rows="7" placeholder="Your message"></textarea>
                            </div>
                            <button style={{backgroundColor:"#111430"}} className="btn pr-5 pl-5 text-center text-white">Send</button>
                        </form>
                    </div>
                </div>
                <footer className="text-center text-secondary p-5">copyright Orange labs 2020</footer>
            </div>
        </section>
    );
};

export default Footer;