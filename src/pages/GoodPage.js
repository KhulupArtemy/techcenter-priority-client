import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import {Context} from "../index";
import {useNavigate, useParams} from "react-router-dom";
import CreateRequest from "../components/modals/CreateRequest";
import {Helmet} from "react-helmet";
import PhoneButton from "../components/PhoneButton";

const GoodPage = () => {
    const {catalog} = useContext(Context)
    const [selectedItem, setSelectedItem] = useState([])
    const [createRequestVisible, setCreateRequestVisible] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        setSelectedItem(catalog.goods.filter(item => item.id === Number(id))[0])
    }, [catalog, id])

    return (
        <div>
            <Helmet>
                <meta name="keywords" content={selectedItem?.keywords}/>
                <meta name="description" content={selectedItem?.description}/>
                <title>{selectedItem?.name + ' ' + selectedItem?.model}</title>
            </Helmet>
            <PhoneButton/>
            <Container>
                <Row>
                    <Col md={6} className="p-3">
                        <Row className="d-flex flex-column align-items-center">
                            <h2 className="app__title">{selectedItem?.name} {selectedItem?.model}</h2>
                            <div className="mt-3">
                                <img
                                    className="img-fluid mx-auto"
                                    width={400}
                                    height={400}
                                    src={selectedItem?.img}
                                    alt={selectedItem?.name}
                                />
                            </div>
                        </Row>
                    </Col>
                    <Col md={6} className="p-3">
                        <Row className="d-flex flex-column align-items-center">
                            <h2 className="app__title">Описание</h2>
                            <p className="app__text mt-3">{selectedItem?.description}</p>
                            <Button
                                className="mt-3 flare-button"
                                variant="primary"
                                onClick={() => setCreateRequestVisible(true)}
                            >
                                Оставить заявку
                            </Button>
                            <Button
                                className="mt-3"
                                variant="primary"
                                onClick={() => navigate(-1)}
                            >
                                Вернуться в каталог
                            </Button>
                        </Row>
                    </Col>
                </Row>
                <div className="mt-3">
                    <center>
                        <h2 className="app__title">Технические характеристики</h2>
                    </center>
                    <Table className="app__table mt-3" responsive striped bordered>
                        <thead>
                        <tr>
                            <th>Наименование характеристики</th>
                            <th>Описание</th>
                        </tr>
                        </thead>
                        <tbody>
                        {selectedItem?.specifications?.map(specification =>
                            <tr key={specification.id}>
                                <td>{specification.name}</td>
                                <td>{specification.value}</td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
                <CreateRequest
                    show={createRequestVisible}
                    onHide={() => setCreateRequestVisible(false)}
                    good={selectedItem?.name}
                    model={selectedItem?.model}
                    leasing={false}
                    tenders={false}
                />
            </Container>
        </div>
    );
};

export default GoodPage;