import React from 'react';
import {Col, Row} from "react-bootstrap";
import CategoryBar from "./CategoryBar";
import GoodsList from "./GoodsList";
import Pages from "./Pages";

const Catalog = () => {
    return (
        <div className="mt-5" id="catalog">
            <h1 className="fw-normal text-center">Каталог</h1>
            <Row>
                <Col className="mt-5" md={4} lg={3} xl={3} xxl={3}>
                    <CategoryBar/>
                </Col>
                <Col className="mt-5" md={8} lg={9} xl={9} xxl={9}>
                    <GoodsList/>
                    <Pages/>
                </Col>
            </Row>
        </div>
    );
};

export default Catalog;