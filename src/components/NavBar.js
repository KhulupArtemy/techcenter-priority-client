import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import logo from "../assets/img/logo.png";
import '../styles/NavBar.scss'

const NavBar = () => {
    return (
        <nav className="nav-bar px-3">
            <Navbar expand="xl">
                <Navbar.Brand>
                    <img
                        className="d-inline-block align-top"
                        src={logo}
                        alt="Техцентр Приоритет"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="nav-bar__links">
                        <Nav.Link href="#about">О нас</Nav.Link>
                        <Nav.Link href="#catalog">Каталог</Nav.Link>
                        <Nav.Link href="#leasing">Лизинг</Nav.Link>
                        <Nav.Link href="#tenders">Тендеры</Nav.Link>
                        <Nav.Link href="#clients">Наши клиенты</Nav.Link>
                        <Nav.Link href="#vacancies">Вакансии</Nav.Link>
                        <Nav.Link href="#contacts">Контакты</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    );
};

export default NavBar;