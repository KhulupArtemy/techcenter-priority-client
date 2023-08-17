import React, {useContext, useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {Context} from "../index";
import {sendEmail} from "../http/emailAPI";

const CreateRequest = () => {
    const {tractor} = useContext(Context)

    const [initials, setInitials] = useState('')
    const [selectedTractor, setSelectedTractor] = useState(String(tractor.tractorList[0].name))
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const sendMessage = async () => {
        try {
            await sendEmail({initials, tractor: selectedTractor, email, phone}).then(data => alert(data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className="mt-5" id="request">
            <h1 className="fw-normal text-center">Оставить заявку</h1>
            <div className="mt-5 d-flex justify-content-center align-items-center" id="catalog">
                <Card style={{width: 600}} className="p-5">
                    <Form className="d-flex flex-column lead">
                        <Form.Label>
                            Введите ФИО
                        </Form.Label>
                        <Form.Control
                            value={initials}
                            onChange={e => setInitials(e.target.value)}
                            placeholder="Поле для ввода ФИО"
                        />
                        <Form.Label
                            className="mt-4"
                        >
                            Выберите модель трактора
                        </Form.Label>
                        <Form.Select
                            value={selectedTractor}
                            onChange={e => setSelectedTractor(e.target.value)}
                        >
                            {tractor.tractorList.map(item =>
                                <option
                                    key={item.id}
                                    value={item.name}
                                >
                                    {item.name}
                                </option>
                            )}
                        </Form.Select>
                        <Form.Label
                            className="mt-4"
                        >
                            Введите email
                        </Form.Label>
                        <Form.Control
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Поле для ввода email"
                            type="email"
                        />
                        <Form.Label
                            className="mt-4"
                        >
                            Введите контактный телефон
                        </Form.Label>
                        <Form.Control
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder="Поле для ввода телефона"
                        />
                        <Form.Group
                            className="mt-4"
                        >
                            <Form.Check
                                type="checkbox"
                                label="Даю согласие на обработку персональных данных"
                            />
                        </Form.Group>
                        <Button
                            className="mt-4"
                            variant={"outline-dark"}
                            onClick={sendMessage}
                        >
                            Оставить заявку
                        </Button>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default CreateRequest;