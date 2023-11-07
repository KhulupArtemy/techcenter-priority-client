import React from 'react';
import {NavLink} from "react-router-dom";
import {Card, Col} from "react-bootstrap";

const SitesItem = ({site}) => {
    return (
        <Col xs={4} sm={4} md={4} lg={2} xl={2} xxl={2} >
            <NavLink to={site.link} target="_blank" rel="noreferrer">
                <Card className="app__site">
                    <Card.Img
                        variant="top"
                        className="img-fluid mx-auto"
                        width={150}
                        height={150}
                        src={site.img}
                        alt={site.name}
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

export default SitesItem;