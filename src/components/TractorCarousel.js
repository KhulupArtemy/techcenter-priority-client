import React from 'react';
import {Carousel} from "react-bootstrap";
import tractor1 from "../assets/img/tractor1.jpg";
import tractor2 from "../assets/img/tractor2.jpg";
import tractor3 from "../assets/img/tractor3.jpg";

const TractorCarousel = () => {
    return (
        <Carousel fade>
            <Carousel.Item interval={3000}>
                <img
                    className="img-fluid mx-auto d-block w-100"
                    src={tractor1}
                    alt="Первый слайд"
                />
                <Carousel.Caption>
                    <h3>Заголовок первого слайда</h3>
                    <p>Описание первого слайда.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="img-fluid mx-auto d-block w-100"
                    src={tractor2}
                    alt="Второй слайд"
                />
                <Carousel.Caption>
                    <h3>Заголовок второго слайда</h3>
                    <p>Описание второго слайда.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="img-fluid mx-auto d-block w-100"
                    src={tractor3}
                    alt="Третий слайд"
                />
                <Carousel.Caption>
                    <h3>Заголовок третьего слайда</h3>
                    <p>Описание третьего слайда.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default TractorCarousel;