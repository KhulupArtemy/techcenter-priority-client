import React from 'react';
import {Card, Col} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const GoodsItem = ({good}) => {

    return (
        <Col xs={9} sm={5} md={5} lg={4} xl={3} xxl={3}>
            <Card className="h-100" style={{boxShadow: "0 0 10px rgba(0,0,0,0.5)"}}>
                <Card.Img
                    variant="top"
                    className="img-fluid mx-auto"
                    src={good.img}
                />
                <Card.Body className="px-0">
                    <Card.Title className="text-center">{good.name}</Card.Title>
                    <Card.Title className="text-center">{good.model}</Card.Title>
                    <Card.Text className="text-center">
                        <NavLink style={{color: 'blue', textDecoration: 'none'}} to={'good/' + good.id}>
                            Подробнее
                        </NavLink>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default GoodsItem;