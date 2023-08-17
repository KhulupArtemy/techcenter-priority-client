import React from 'react';
import {Card, Col, ListGroup} from "react-bootstrap";

const TractorItem = ({tractor}) => {
    return (
        <Col md={3}>
            <Card>
                <Card.Img
                    variant="top"
                    className="img-fluid mx-auto"
                    width={150}
                    height={150}
                    src={tractor.img}
                />
                <Card.Body>
                    <Card.Title>{tractor.name}</Card.Title>
                    <Card.Text>
                        {tractor.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Тип {tractor.type}</ListGroup.Item>
                    <ListGroup.Item>Ширина {tractor.width}</ListGroup.Item>
                    <ListGroup.Item>Высота {tractor.height}</ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    );
};

export default TractorItem;