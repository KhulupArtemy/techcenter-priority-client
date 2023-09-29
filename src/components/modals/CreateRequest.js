import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {sendEmail} from "../../http/emailAPI";

const CreateRequest = ({show, onHide, good, model}) => {
    const [initials, setInitials] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [comment, setComment] = useState('')
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const sendMessage = async () => {
        try {
            await sendEmail({initials, email, phone, good, model, comment}).then(data => alert(data))
            setInitials('')
            setEmail('')
            setPhone('')
            setComment('')
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Оставить заявку
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form.Label>Введите ФИО<b style={{color: "red"}}>*</b></Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={initials}
                            onChange={e => setInitials(e.target.value)}
                            placeholder="Поле для ввода ФИО"
                        />
                        <Form.Control.Feedback type="invalid">
                            Введите ФИО
                        </Form.Control.Feedback>
                        <Form.Label className="mt-3">Введите email<b style={{color: "red"}}>*</b></Form.Label>
                        <Form.Control
                            required
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Поле для ввода email"
                        />
                        <Form.Control.Feedback type="invalid">
                            Введите email
                        </Form.Control.Feedback>
                        <Form.Label className="mt-3">Введите контактный телефон<b style={{color: "red"}}>*</b></Form.Label>
                        <Form.Control
                            required
                            type="tel"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder="Поле для ввода телефона"
                        />
                        <Form.Control.Feedback type="invalid">
                            Введите контактный телефон
                        </Form.Control.Feedback>
                        <Form.Label className="mt-3">Добавьте комментарий</Form.Label>
                        <Form.Control
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            as="textarea"
                            rows={5}
                        />
                        <Form.Group className="mt-3">
                            <Form.Check
                                required
                                type="checkbox"
                                label="Нажимая кнопку «Оставить заявку», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006
                                года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных"
                                feedback="Вам необходимо дать согласие на обработку ваших персональных данных"
                                feedbackType="invalid"
                            />
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={sendMessage} type="submit">Оставить заявку</Button>
                    <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default CreateRequest;