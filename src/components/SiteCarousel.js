import React from 'react';
import {Carousel} from "react-bootstrap";
import tractor1 from "../assets/img/carousel/tractor1.jpg";
import tractor2 from "../assets/img/carousel/tractor2.jpg";
import tractor3 from "../assets/img/carousel/tractor3.jpg";

const SiteCarousel = () => {
    return (
        <Carousel fade>
            <Carousel.Item interval={3000}>
                <img
                    className="img-fluid mx-auto d-block"
                    width={1920}
                    height={1080}
                    src={tractor1}
                    alt="Первый слайд"
                />
                {/*<Carousel.Caption>
                    <h3>Заголовок первого слайда</h3>
                    <p>Описание первого слайда.</p>
                </Carousel.Caption>
                */}
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="img-fluid mx-auto d-block"
                    width={1920}
                    height={1080}
                    src={tractor2}
                    alt="Второй слайд"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="img-fluid mx-auto d-block"
                    width={1920}
                    height={1080}
                    src={tractor3}
                    alt="Третий слайд"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default SiteCarousel;