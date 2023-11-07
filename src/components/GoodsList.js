import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Container, Row} from "react-bootstrap";
import GoodsItem from "./GoodsItem";

const GoodsList = observer(() => {
    const {catalog} = useContext(Context)

    return (
        <Container>
            <Row className="d-flex g-4 justify-content-center">
                {catalog.selectedCategory.id
                    ?
                    catalog.goods.filter(item => item.categoryId === catalog.selectedCategory.id).length !== 0
                        ?
                        catalog.goods.filter(item => item.categoryId === catalog.selectedCategory.id).map((item) =>
                            <GoodsItem key={item.id} good={item}></GoodsItem>
                        )
                        :
                        <p>Товары по выбранной категории отсутствуют</p>
                    :
                    catalog.goods.map((item) =>
                        <GoodsItem key={item.id} good={item}></GoodsItem>
                    )
                }
            </Row>
        </Container>
    );
});

export default GoodsList;