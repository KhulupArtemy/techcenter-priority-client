import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import telegram from "../assets/img/icons/telegram.png";
import whatsapp from "../assets/img/icons/whatsapp.png";
import viber from "../assets/img/icons/viber.png";
import download from "../assets/img/icons/download.png";
import downloadFile from "../assets/files/Карточка контрагента ООО Техцентр Приоритет.docx";

const Header = () => {
    return (
        <Row className="app__header m-0 py-1" style={{backgroundColor: "#3e3e3f", color: "white"}}>
            <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} className="text-center p-2">
                <a
                    className="text-decoration-none"
                    href="tel:+7 495 545-58-00"
                >
                    +7 495 545-58-00
                </a>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} className="text-center p-2">
                <a
                    className="text-decoration-none"
                    href="mailto:info@tc-prioritet.ru"
                >
                    info@tc-prioritet.ru
                </a>
            </Col>
            <Col xs={12} sm={6} md={6} lg={2} xl={3} xxl={3} className="text-center p-2">
                <a
                    className="text-decoration-none"
                    href="https://t.me/HQ_men"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="me-2"
                        width="36"
                        height="36"
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
                        width="36"
                        height="36"
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
                        width="36"
                        height="36"
                        src={viber}
                        alt="viber"
                    />
                </a>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={3} xxl={3} className="text-center p-2">
                <div className="text-center">
                    <Button className="flare-button" style={{backgroundColor: "red", borderColor: "red"}}>
                        <h4 className="m-0">
                            <img
                                className="me-2"
                                width="28"
                                height="28"
                                src={download}
                                alt="download"
                            />
                            <a
                                className="text-decoration-none"
                                href={downloadFile}
                                download
                            >
                                Карта контрагента
                            </a>
                        </h4>
                    </Button>
                </div>
            </Col>
        </Row>
    );
};

export default Header;