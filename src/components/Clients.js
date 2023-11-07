import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import SitesList from "./SitesList";
import {Container} from "react-bootstrap";
import background from "../assets/img/parallax/Clients.jpg";
import ParallaxTitle from "./ParallaxTitle";
import Ancor from "./Ancor";

const Clients = observer(() => {
    const {clients} = useContext(Context)

    return (
        <div className="my-5">
            <Ancor id={"clients"}/>
            <ParallaxTitle background={background} title={"Наши клиенты"}/>
            <Container className="app__text">
                <p>
                    Наши клиенты – это как крупнейшие игроки нефтегазовой и энергетической отрасли России, агрохолдинги, так и субъекты малого предпринимательства, фермерские хозяйства.
                </p>
                <p>
                    Список клиентов:
                </p>
                <SitesList list={clients}/>
            </Container>
        </div>
    );
});

export default Clients;