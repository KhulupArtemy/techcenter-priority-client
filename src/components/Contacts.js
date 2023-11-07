import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import telegram from "../assets/img/icons/telegram.png";
import whatsapp from "../assets/img/icons/whatsapp.png";
import viber from "../assets/img/icons/viber.png";
import background from "../assets/img/parallax/Contacts.jpg";
import ParallaxTitle from "./ParallaxTitle";
import Ancor from "./Ancor";

const Contacts = () => {
    return (
        <div className="my-5">
            <Ancor id={"contacts"}/>
            <ParallaxTitle background={background} title={"Контакты"}/>
            <div className="app__contacts mx-3">
                <Card>
                    <Row className="mt-3 d-flex align-items-start">
                        <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3} className="text-center">
                            <h3>Адрес</h3>
                            <p>
                                <a
                                    className="text-decoration-none"
                                    href="https://yandex.by/maps/213/moscow/house/bolshaya_pochtovaya_ulitsa_18_20s15/Z04YcA5hSkIPQFtvfXt2dX5gbQ==/?from=mapframe&ll=37.691848%2C55.774744&source=mapframe&utm_source=mapframe&z=18"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    105082, г. Москва, ул. Большая почтовая, дом 18/20, строение 15, помещение 10/2, офис 22
                                </a>
                            </p>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3} className="text-center">
                            <h3>Телефон</h3>
                            <p>
                                <a
                                    className="text-decoration-none"
                                    href="tel:+7 495 545-58-00"
                                >
                                    +7 495 545-58-00
                                </a>
                            </p>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3} className="text-center">
                            <h3>Почта</h3>
                            <p>
                                <a
                                    className="text-decoration-none"
                                    href="mailto:info@tc-prioritet.ru"
                                >
                                    info@tc-prioritet.ru
                                </a>
                            </p>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3} className="text-center">
                            <h3>Мы в мессенджерах</h3>
                            <p>
                                <a
                                    className="text-decoration-none"
                                    href="https://t.me/HQ_men"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="me-2"
                                        width="48"
                                        height="48"
                                        src={telegram}
                                        alt="telegram"
                                    />
                                </a>
                                <a
                                    className="text-decoration-none"
                                    href="https://wa.me/79255535455"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="mx-2"
                                        width="48"
                                        height="48"
                                        src={whatsapp}
                                        alt="whatsapp"
                                    />
                                </a>
                                <a
                                    className="text-decoration-none"
                                    href="viber://chat?number=%2B375445548455"
                                >
                                    <img
                                        className="mx-2"
                                        width="48"
                                        height="48"
                                        src={viber}
                                        alt="viber"
                                    />
                                </a>
                            </p>
                        </Col>
                    </Row>
                </Card>
                <Row className="mt-3">
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <div>
                            <iframe
                                title="Техцентр Приоритет"
                                src="https://yandex.by/map-widget/v1/?ll=37.691646%2C55.773804&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjczMjgyOBJR0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCR0L7Qu9GM0YjQsNGPINCf0L7Rh9GC0L7QstCw0Y8g0YPQu9C40YbQsCwgMTgvMjDRgTE1IgoN-MMWQhXTGF9C&z=17.06"
                                style={{pointerEvents: "none"}}
                                width="100%"
                                height="500"
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Contacts;