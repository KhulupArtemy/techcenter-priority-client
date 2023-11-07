import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Container, ListGroup} from "react-bootstrap";

const CategoryBar = observer(() => {
    const {catalog} = useContext(Context)

    return (
        <Container>
            <ListGroup className="my-5" horizontal="xl">
                {catalog.categories.map(category =>
                    <ListGroup.Item
                        className="category m-2 text-center"
                        style={{borderRadius: 25}}
                        active={category.id === catalog.selectedCategory.id}
                        action
                        onClick={() => {
                            category.id === catalog.selectedCategory.id ? catalog.setSelectedCategory({}) : catalog.setSelectedCategory(category)
                        }}
                        key={category.id}
                    >
                        <b>{category.name}</b>
                    </ListGroup.Item>
                )}
            </ListGroup>
        </Container>
    );
});

export default CategoryBar;