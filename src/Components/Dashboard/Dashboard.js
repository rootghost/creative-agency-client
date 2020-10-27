import { faCoffee, faComment, faGlassMartiniAlt, faHdd, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Dashboard.css"
import OrderForm from './OrderForm';
import DashboardHeader from "./DashboardHeader"
import Review from './Review';
import ServiceCard from './ServiceCard';
import { useContext } from 'react';
import { userContex } from '../../App';
import { useEffect } from 'react';
import AdminServiceList from './AdminServiceList';
import AddService from './AddService';
import MakeAdmin from './MakeAdmin';

const Dashboard = () => {
    const [isAdmin,setAdmin] = useState(false)
    const [option,setOption] = useState("Order");
    const [adminOption,setAdminOption] = useState("Service List")
    const [allOrder,setAllOrder] = useState([])
    const [isloggedIn,setloggedIn] = useContext(userContex);
    
    
    const handleOption = (name) => {
        if(isAdmin){
            setAdminOption(name)
        }
        else{
            setOption(name)
        }
    }

    useEffect(()=>{
        fetch(`https://secret-garden-14792.herokuapp.com/orders?email=${isloggedIn.email}`)
        .then(res => res.json())
        .then(data => setAllOrder(data))

        fetch("https://secret-garden-14792.herokuapp.com/admin",{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body : JSON.stringify({email : isloggedIn.email})
        })
        .then(res=> res.json())
        .then(data =>{
            setAdmin(data)
        })
    },[option])

    const {sreviceTitle} = useParams()

    return (
        <section>
            {
                isAdmin? <DashboardHeader option={adminOption}></DashboardHeader>: <DashboardHeader option={option}></DashboardHeader>
            }
             <div className="container-fluid row mt-4">
                    <div className="col-md-2 col-2">
                        <div>
                           <div className="mt-5">
                               { 
                                  isAdmin === false &&
                                   <>
                                         <h6 onClick={()=>handleOption("Order")} className={option === "Order"?"active font-weight-bold ":"font-weight-bold"}><FontAwesomeIcon className={option === "Order"?"active mr-2":"mr-2"} icon={faShoppingCart} />Order</h6>

                                        <h6 onClick={()=>handleOption("Service List")} className={option === "Service List"?"active font-weight-bold":"font-weight-bold"}><FontAwesomeIcon className={option === "Service List"?"active mr-2":"mr-2"} icon={faHdd} />Service list</h6>

                                        <h6 onClick={()=>handleOption("Review")} className={option === "Review"?"active font-weight-bold ":"font-weight-bold"}><FontAwesomeIcon className={option === "Review"?"active mr-2":"mr-2"} icon={faComment} />Review</h6>
                                   </>
                               }
                               { 
                                  isAdmin === true &&
                                   <>
                                        <h6 onClick={()=>handleOption("Service List")} className={adminOption === "Service List"?"active font-weight-bold":"font-weight-bold"}><FontAwesomeIcon className={adminOption === "Service List"?"active mr-2":"mr-2"} icon={faHdd} />Service list</h6>


                                         <h6 onClick={()=>handleOption("Add Service")} className={adminOption === "Add Service"?"active font-weight-bold ":"font-weight-bold"}><FontAwesomeIcon className={adminOption === "Add Service"?"active mr-2":"mr-2"} icon={faPlus} />Add Service</h6>

                                        <h6 onClick={()=>handleOption("Make Admin")} className={adminOption === "Make Admin"?"active font-weight-bold ":"font-weight-bold"}><FontAwesomeIcon className={adminOption === "Make Admin"?"active mr-2":"mr-2"} icon={faUserPlus} />Make Admin</h6>
                                   </>
                               }
                           </div>
                        </div>
                    </div>
                    {
                        isAdmin === false && 
                        <div className="col-md-10 row pt-5 pb-5 dashboard-main">
                            {
                                option === "Order" &&
                            <OrderForm service={sreviceTitle}></OrderForm>
                            }
                            {
                                option === "Review" && 
                                <Review></Review>
                            }
                            {
                                option === "Service List" &&
                                allOrder.map(order => <ServiceCard key={order._id}  order={order}></ServiceCard>)
                            }
                        </div>
                    }
                    {
                        isAdmin === true &&
                        <div className="col-md-10 col-10 p-3 dashboard-main">
                            {
                                adminOption === "Service List" &&
                                <AdminServiceList></AdminServiceList>
                            }
                            {
                                adminOption === "Add Service" &&
                                <AddService></AddService>
                            }
                            {
                                adminOption === "Make Admin" &&
                                <MakeAdmin></MakeAdmin>
                            }
                        </div>
                    }
                </div>
        </section>
    );
};

export default Dashboard;