import React from 'react';
import {Row} from "react-bootstrap";
import SitesItem from "./SitesItem";

const SitesList = ({list}) => {

    return (
        <Row className="d-flex g-4 justify-content-center mt-3">
            {list.sites.map((item) =>
                <SitesItem key={item.id} site={item}/>
            )}
        </Row>
    );
};

export default SitesList;