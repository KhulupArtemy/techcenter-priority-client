import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import TractorItem from "./TractorItem";

const TractorList = observer(() => {
    const {tractor} = useContext(Context)

    return (
        <Row className="d-flex g-4">
            {tractor.selectedModel.id
                ?
                tractor.tractors.filter(item => item.modelId === tractor.selectedModel.id).map((item, i) =>
                    //Отобразить если: (индекс > (номер страницы - 1) * лимит) И (индекс < номер страницы * лимит + 1)
                    (i + 1 > (tractor.page - 1) * tractor.limit) && (i + 1 < tractor.page * tractor.limit + 1) ? <TractorItem key={item.id} tractor={item}></TractorItem> : null
                )
                :
                tractor.tractors.map((item, i) =>
                    (i + 1 > (tractor.page - 1) * tractor.limit) && (i + 1 < tractor.page * tractor.limit + 1) ? <TractorItem key={item.id} tractor={item}></TractorItem> : null
                )
            }
        </Row>
    );
});

export default TractorList;