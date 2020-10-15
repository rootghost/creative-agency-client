import React from 'react';
import Carousel from '../Carousel/Carousel';
import Client from '../Client/Client';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Client></Client>
            <Services></Services>
            <Carousel></Carousel>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;