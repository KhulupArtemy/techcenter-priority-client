import React from 'react';
import {Card, Col} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const PartnersItem = ({partner}) => {
    return (
        <Col xs={4} sm={3} md={3} lg={2} xl={2} xxl={1}>
            <NavLink to={partner.link} target="_blank" rel="noreferrer">
                <Card className="partner">
                    <Card.Img
                        variant="top"
                        className="img-fluid mx-auto"
                        width={150}
                        height={150}
                        src={partner.img}
                        alt={partner.name}
                        loading="lazy"
                        decoding="async"
                    />
                    <Card.Body className="p-1">
                    </Card.Body>
                </Card>
            </NavLink>
        </Col>
    );
};

export default PartnersItem;