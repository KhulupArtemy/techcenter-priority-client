import React from 'react';
import {Col, Dropdown, Row} from "react-bootstrap";

const Contacts = () => {
    return (
        <Row className="p-2">
            <Col xs={6} className="text-center p-2">
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
            <Col className="text-center p-2">
                <a
                    className="text-decoration-none"
                    href="tel:+375 (44) 554-84-55"
                >
                    <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/color/32/1DB91D/apple-phone.png"
                        alt="apple-phone"
                    />
                    +375 (44) 554-84-55
                </a>
            </Col>
            <Col className="text-center p-2">
                <Dropdown>
                    <Dropdown.Toggle variant="" style={{border: 0}} className="p-0">
                        <img
                            width="32"
                            height="32"
                            src="https://img.icons8.com/emoji/32/thumbs-up.png"
                            alt="thumbs-up"
                        />
                        Социальные сети и почта
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="viber://chat?number=%2B375445548455">
                            <img
                                className="me-2"
                                width="32"
                                height="32"
                                src="https://img.icons8.com/fluency/32/viber.png"
                                alt="viber"
                            />
                            Viber
                        </Dropdown.Item>
                        <Dropdown.Item href="https://wa.me/375445548455" target="_blank" rel="noreferrer">
                            <img
                                className="me-2"
                                width="32"
                                height="32"
                                src="https://img.icons8.com/color/32/whatsapp--v1.png"
                                alt="whatsapp--v1"
                            />
                            WhatsApp
                        </Dropdown.Item>
                        <Dropdown.Item href="https://t.me/HQ_men" target="_blank" rel="noreferrer">
                            <img
                                className="me-2"
                                width="32"
                                height="32"
                                src="https://img.icons8.com/color/32/telegram-app--v1.png"
                                alt="telegram-app--v1"
                            />
                            Telegram
                        </Dropdown.Item>
                        <Dropdown.Item href="mailto:5548455@mail.ru">
                            <img
                                className="me-2"
                                width="32"
                                height="32"
                                src="https://img.icons8.com/color/32/gmail-new.png"
                                alt="gmail-new"
                            />
                            5548455@mail.ru
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            {/*<hr className="mt-2"/>
                <Col>
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/fluency/48/viber.png"
                        alt="viber"
                    />
                </Col>
                <Col>
                    <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/whatsapp--v1.png"
                    alt="whatsapp--v1"
                    />
                </Col>
                <Col>
                    <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/telegram-app--v1.png"
                    alt="telegram-app--v1"
                    />
                </Col>
                <Col>
                    <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/gmail-new.png"
                    alt="gmail-new"
                    />
                </Col>
            */}
        </Row>
    );
};

export default Contacts;