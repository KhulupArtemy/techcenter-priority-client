import React from 'react';
import Contacts from "../components/Contacts";
import Catalog from "../components/Catalog";
import Footer from "../components/Footer";
import {Container} from "react-bootstrap";
import SiteCarousel from "../components/SiteCarousel";
import bg from "../assets/img/background.png";

const Main = () => {
    return (
        <div style={{backgroundImage: `url(${bg})`}}>
            <Container>
                <Contacts/>
                <SiteCarousel/>
                <Catalog/>
                <Footer/>
            </Container>
        </div>
    );
};

export default Main;