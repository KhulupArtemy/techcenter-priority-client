import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from "../assets/img/logo_elipse.png";

const NavBar = () => {
    return (
        <Navbar bg="light" data-bs-theme="light" expand="sm">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        width={80}
                        height={80}
                        src={logo}
                        className="d-inline-block align-top"
                        alt="Логотип"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Главная</Nav.Link>
                            <Nav.Link href="#catalog">Каталог техники</Nav.Link>
                            <Nav.Link href="#request">Оставить заявку</Nav.Link>
                            {/*<Nav.Link href="#faq">FAQ</Nav.Link>*/}
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;