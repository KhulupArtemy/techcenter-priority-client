import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import GoodsItem from "./GoodsItem";

const GoodsList = observer(() => {
    const {catalog} = useContext(Context)

    return (
        <Row className="d-flex g-4 justify-content-center">
            {catalog.selectedCategory.id
                ?
                catalog.goods.filter(item => item.categoryId === catalog.selectedCategory.id).length !== 0
                ?
                    catalog.goods.filter(item => item.categoryId === catalog.selectedCategory.id).map((item, i) =>
                        (i + 1 > (catalog.page - 1) * catalog.limit) && (i + 1 < catalog.page * catalog.limit + 1) ? <GoodsItem key={item.id} good={item}></GoodsItem> : null
                    )
                :
                    <p>Товары по выбранной категории отсутствуют</p>
                :
                catalog.goods.map((item, i) =>
                    (i + 1 > (catalog.page - 1) * catalog.limit) && (i + 1 < catalog.page * catalog.limit + 1) ? <GoodsItem key={item.id} good={item}></GoodsItem> : null
                )
            }
        </Row>
    );
});

export default GoodsList;