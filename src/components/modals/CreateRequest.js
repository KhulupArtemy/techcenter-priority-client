import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import Swal from "sweetalert2";
import {sendEmailLeasing, sendEmailTenders, sendEmailGoods} from "../../http/emailAPI";


const CreateRequest = ({show, onHide, good, model, leasing, tenders}) => {
    const [initials, setInitials] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [comment, setComment] = useState('')
    const [validated, setValidated] = useState(false)

    const phoneFormat = function(e) {
        let content = e.target.value;
        if(!content) return;
        content = Array.from(content).filter(ltr => ltr.charCodeAt(0) > 47 && ltr.charCodeAt(0) < 58);

        switch(content[0]) {
            case "8":
                content[0] = "7";
                break;
            case "9":
                content.unshift("7");
                break;
            default:
                break;
        }

        let [countryCode, operatorCode, number3, number21, number22] = [
            content[0],
            content.slice(1,4).join(''),
            content.slice(4,7).join(''),
            content.slice(7,9).join(''),
            content.slice(9,11).join(''),
        ]

        e.target.value = countryCode?.length ? `+${countryCode}` : '';
        if(operatorCode?.length) e.target.value += `(${operatorCode}`;
        if(number3?.length) e.target.value += `)${number3}`;
        if(number21?.length) e.target.value += `-${number21}`;
        if(number22?.length) e.target.value += `-${number22}`;

        return e.target.value;
    }

    const handleSubmit = async (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            setValidated(true)
        } else {
            event.preventDefault()
            setInitials('')
            setEmail('')
            setPhone('')
            setComment('')
            setValidated(false)
            onHide()

            if (leasing) {
                await sendEmailLeasing({initials, email, phone, comment}).then(data => Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: data,
                    showConfirmButton: false,
                    timer: 1500
                }))
            } else if (tenders) {
                await sendEmailTenders({initials, email, phone, comment}).then(data => Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: data,
                    showConfirmButton: false,
                    timer: 1500
                }))
            } else if (good && model) {
                await sendEmailGoods({initials, email, phone, good, model, comment}).then(data => Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: data,
                    showConfirmButton: false,
                    timer: 1500
                }))
            }
        }
    };

    return (
        <Modal
            style={{zIndex: 2147483648}}
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title className="app__title" id="contained-modal-title-vcenter">
                        Оставить заявку
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="app__text">
                    <Form.Group controlId="validationCustom01">
                        <Form.Label>Введите имя<b style={{color: "red"}}>*</b></Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={initials}
                            onChange={e => setInitials(e.target.value)}
                            placeholder="Поле для ввода имени"
                        />
                        <Form.Control.Feedback type="invalid">
                            Введите имя
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="validationCustom02">
                        <Form.Label>Введите e-mail<b style={{color: "red"}}>*</b></Form.Label>
                        <Form.Control
                            required
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Поле для ввода e-mail"
                        />
                        <Form.Control.Feedback type="invalid">
                            Введите email
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="validationCustom03">
                        <Form.Label>Введите контактный телефон<b style={{color: "red"}}>*</b></Form.Label>
                        <Form.Control
                            required
                            type="tel"
                            value={phone}
                            onChange={e => setPhone(phoneFormat(e))}
                            placeholder="X-(XXX)-XXX-XX-XX"
                        />
                        <Form.Control.Feedback type="invalid">
                            Введите контактный телефон
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="validationCustom04">
                        <Form.Label>Добавьте комментарий</Form.Label>
                        <Form.Control
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            as="textarea"
                            rows={5}
                        />
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="validationCustom05">
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
                    <Button variant="outline-primary" type="submit">Оставить заявку</Button>
                    <Button
                        variant="outline-danger"
                        onClick={onHide}
                    >
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default CreateRequest;