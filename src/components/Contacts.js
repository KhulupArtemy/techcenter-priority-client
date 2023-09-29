import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import logo from "../assets/img/logo.png";

const Contacts = () => {

    return (
        <div>
            <Row className="mx-0">
                <Col xs={12} sm={6} md={6} lg={4} xl={6} xxl={6} className="text-center px-0 my-2">
                    <a
                        className="text-decoration-none"
                        href="https://goo.gl/maps/ApCqfNgycADYXjtK8"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            width="32"
                            height="32"
                            src="https://img.icons8.com/color/32/place-marker--v1.png"
                            alt="place-marker--v1"
                        />
                        г. Москва, Большая Почтовая ул, д. 18/20 стр. 15, помещ. 10/2 офис 22
                    </a>
                </Col>
                <Col xs={12} sm={6} md={6} lg={3} xl={2} xxl={2} className="text-center px-2 my-2">
                    <Button
                        variant="primary"
                        href="https://new-call.me/gsFEZpwn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Позвонить с сайта БЕСПЛАТНО
                    </Button>
                </Col>
                <Col xs={12} sm={6} md={6} lg={3} xl={2} xxl={2} className="text-center px-0 my-2">
                    <a
                        className="text-decoration-none"
                        href="tel:+7 495 545-58-00"
                    >
                        <img
                            width="32"
                            height="32"
                            src="https://img.icons8.com/color/32/1DB91D/apple-phone.png"
                            alt="apple-phone"
                        />
                        +7 495 545-58-00
                    </a>
                </Col>
                <Col xs={12} sm={6} md={6} lg={2} xl={2} xxl={2} className="text-center px-0 my-2">
                    <a
                        className="p-1"
                        href="viber://chat?number=%2B375445548455"
                    >
                        <img
                            width="32"
                            height="32"
                            src="https://img.icons8.com/fluency/32/viber.png"
                            alt="viber"
                        />
                    </a>
                    <a
                        className="p-1"
                        href="https://wa.me/79255535455"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            width="32"
                            height="32"
                            src="https://img.icons8.com/color/32/whatsapp--v1.png"
                            alt="whatsapp--v1"
                        />
                    </a>
                    <a
                        className="p-1"
                        href="https://t.me/HQ_men"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            width="32"
                            height="32"
                            src="https://img.icons8.com/color/32/telegram-app--v1.png"
                            alt="telegram-app--v1"
                        />
                    </a>
                    <a
                        className="p-1"
                        href="mailto:info@tc-prioritet.ru"
                    >
                        <img
                            width="32"
                            height="32"
                            src="https://img.icons8.com/color/32/gmail-new.png"
                            alt="gmail-new"
                        />
                    </a>
                </Col>
            </Row>
            <Row className="mx-0">
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="px-0 my-2">
                    <img
                        src={logo}
                        className="img-fluid"
                        alt="Логотип"
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Contacts;