import React from 'react';
import {Col, Row} from "react-bootstrap";
import ModelBar from "./ModelBar";
import TractorList from "./TractorList";
import Pages from "./Pages";

const Catalog = () => {
    return (
        <div className="mt-5" id="catalog">
            <h1 className="fw-normal text-center">Каталог</h1>
            <Row className="mt-5">
                <Col md={3}>
                    <ModelBar/>
                </Col>
                <Col md={9}>
                    <TractorList/>
                    <Pages/>
                </Col>
            </Row>
        </div>
    );
};

export default Catalog;