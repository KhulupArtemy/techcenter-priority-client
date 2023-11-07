import React from 'react';
import {Container} from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="footer text-center">
            <Container>
                <div className="container p-3">
                    © 2023. ООО "Техцентр Приоритет". Все права защищены.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;