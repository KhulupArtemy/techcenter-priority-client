import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, ListGroup} from "react-bootstrap";

const CategoryBar = observer(() => {
    const {catalog} = useContext(Context)

    return (
        <ListGroup variant="flush">
            <div style={{boxShadow: "0 0 10px rgba(0,0,0,0.5)"}}>
            {catalog.categories.map(category =>
                <ListGroup.Item
                    style={{cursor: "pointer", fontSize: 15.5}}
                    active={category.id === catalog.selectedCategory.id}
                    action
                    variant="light"
                    onClick={() => {
                        catalog.setSelectedCategory(category)
                        catalog.setPage(1)
                    }}
                    key={category.id}
                >
                    <b>{category.name}</b>
                </ListGroup.Item>
            )}
            </div>
            <Button
                className="mt-3"
                variant="outline-primary"
                onClick={() => {
                    catalog.setSelectedCategory({})
                    catalog.setPage(1)
                }}
            >
                Показать все
            </Button>
        </ListGroup>
    );
});

export default CategoryBar;