import React from 'react';
import {Card, Col} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const GoodsItem = ({good}) => {
    return (
        <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={2}>
            <NavLink className="text-decoration-none" to={'good/' + good.id}>
                <Card className="card mt-3">
                    <Card.Img
                        variant="top"
                        className="card__img img-fluid mx-auto"
                        width="auto"
                        height="auto"
                        src={good.img}
                        alt={good.name}
                        loading="lazy"
                        decoding="async"
                    />
                    <Card.Body className="px-0">
                        <Card.Title className="text-center">{good.name}</Card.Title>
                        <Card.Title className="text-center">{good.model}</Card.Title>
                    </Card.Body>
                </Card>
            </NavLink>
        </Col>
    );
};

export default GoodsItem;