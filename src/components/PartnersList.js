import React, {useContext} from 'react';
import {Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import PartnersItem from "./PartnersItem";

const PartnersList = observer(() => {
    const {partners} = useContext(Context)

    return (
        <Row className="d-flex g-4 justify-content-center mt-3">
            {partners.financePartners.map((item) =>
                <PartnersItem key={item.id} partner={item}/>
            )}
        </Row>
    );
});

export default PartnersList;