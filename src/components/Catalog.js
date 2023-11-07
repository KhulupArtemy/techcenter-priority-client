import React from 'react';
import CategoryBar from "./CategoryBar";
import GoodsList from "./GoodsList";
import '../styles/Catalog.scss'
import background from "../assets/img/parallax/Catalog.jpg";
import ParallaxTitle from "./ParallaxTitle";
import Ancor from "./Ancor";

const Catalog = () => {
    return (
        <div className="catalog my-5">
            <Ancor id={"catalog"}/>
            <ParallaxTitle background={background} title={"Каталог"}/>
            <CategoryBar/>
            <GoodsList/>
        </div>
    );
};

export default Catalog;