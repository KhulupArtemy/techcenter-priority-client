import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import {Context} from "../index";
import {useNavigate, useParams} from "react-router-dom";
import CreateRequest from "../components/modals/CreateRequest";
import Footer from "../components/Footer";
import bg from "../assets/img/background.png";

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
        <div style={{backgroundImage: `url(${bg})`}}>
            <Container>
                <Row>
                    <Col md={6} className="p-3">
                        <Row className="d-flex flex-column align-items-center">
                            <h2>{selectedItem?.name} {selectedItem?.model}</h2>
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
                            <h2>Описание</h2>
                            <p className="mt-3 lead">{selectedItem?.description}</p>
                            <Button
                                className="mt-3"
                                variant="outline-primary"
                                onClick={() => navigate('/')}
                            >
                                Вернуться назад
                            </Button>
                            <Button
                                className="mt-3"
                                variant="outline-primary"
                                onClick={() => setCreateRequestVisible(true)}
                            >
                                Оставить заявку
                            </Button>
                        </Row>
                    </Col>
                </Row>
                <div className="mt-3">
                    <center>
                        <h2>Технические характеристики</h2>
                    </center>
                    <Table className="mt-3" responsive striped bordered>
                        <thead>
                        <tr>
                            <th>Наименование характеристики</th>
                            <th>Описание</th>
                        </tr>
                        </thead>
                        <tbody>
                        {selectedItem.specifications?.map(specification =>
                            <tr key={specification.id}>
                                <td>{specification.name}</td>
                                <td>{specification.value}</td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
                <Footer/>
                <CreateRequest
                    show={createRequestVisible}
                    onHide={() => setCreateRequestVisible(false)}
                    good={selectedItem?.name}
                    model={selectedItem?.model}
                />
            </Container>
        </div>
    );
};

export default GoodPage;