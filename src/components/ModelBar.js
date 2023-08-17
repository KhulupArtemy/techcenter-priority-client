import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, ListGroup} from "react-bootstrap";

const ModelBar = observer(() => {
    const {tractor} = useContext(Context)

    return (
        <ListGroup>
            {tractor.models.map(model =>
                <ListGroup.Item
                    style={{cursor: "pointer"}}
                    active={model.id === tractor.selectedModel.id}
                    onClick={() => {
                        tractor.setSelectedModel(model)
                        tractor.setPage(1)
                    }}
                    key={model.id}
                >
                    {model.name}
                </ListGroup.Item>
            )}
            <Button
                className="mt-4"
                variant={"outline-dark"}
                onClick={() => {
                    tractor.setSelectedModel({})
                    tractor.setPage(1)
                }}
            >
                Сбросить фильтр
            </Button>
        </ListGroup>
    );
});

export default ModelBar;