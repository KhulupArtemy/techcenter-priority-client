import React, {useContext, useState} from 'react';
import {Badge, Button, Container, ListGroup} from "react-bootstrap";
import SitesList from "./SitesList";
import CreateRequest from "./modals/CreateRequest";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import '../styles/Tenders.scss'
import background from "../assets/img/parallax/Tenders.jpg";
import ParallaxTitle from "./ParallaxTitle";
import Ancor from "./Ancor";

const Tenders = observer(() => {
    const [createRequestVisible, setCreateRequestVisible] = useState(false)
    const helpButtons = [
        {id: 1, description: 'Определить бюджет'},
        {id: 2, description: 'Подготовить техническое задание'},
        {id: 3, description: 'Подготовить конкурсную документацию'},
        {id: 4, description: 'Выбрать тендерную площадку'},
        {id: 5, description: 'Получить технику в срок'}
    ]
    const [selectedButton, setSelectedButton] = useState(helpButtons[0])
    const {tenders} = useContext(Context)

    return (
        <div className="tenders my-5">
            <Ancor id={"tenders"}/>
            <ParallaxTitle background={background} title={"Тендеры"}/>
            <Container className="app__text">
                <p>
                    Специалисты нашей компании проводят грамотный мониторинг стоимости предмета закупки, условий и
                    стоимости сопутствующих услуг, входящих в стоимость контракта (страхование, поставки,
                    сервисного обслуживания и др.). Мы также можем оказать помощь и дать рекомендации при
                    составлении документации по проводимой закупке.
                </p>
                <p>
                    Если вы являетесь заказчиком по 44-ФЗ или 223-ФЗ мы вам поможем:
                </p>
                <ListGroup className="mt-5" horizontal="xl">
                    {helpButtons.map(item =>
                        <ListGroup.Item
                            className="help-button m-2 text-center"
                            style={item.id === selectedButton.id ? {backgroundColor: "#18c139", color: "white", borderRadius: 25} : {borderRadius: 25}}
                            action
                            onClick={() => {
                                setSelectedButton(item)
                            }}
                            key={item.id}
                        >
                            <Badge
                                bg={item.id === selectedButton.id ? 'primary' : 'secondary'}
                                style={{position: "absolute", right: -5, top: -5}}
                                pill
                            >
                                {item.id}
                            </Badge>
                            <b>{item.description}</b>
                        </ListGroup.Item>
                    )}
                </ListGroup>
                {
                    selectedButton.id === 1
                        ?
                        <div className="mt-5">
                            <h3><u>Определить бюджет</u></h3>
                            <ul>
                                <li>Мы подберем требуемую технику, сделаем расчет для определения НМЦК.</li>
                                <li>Начальная (максимальная) цена контракта — это предельное значение
                                    цены, которое указывается в извещении о проведении закупки, документации
                                    о закупке, приглашении принять участие в закрытой закупке.</li>
                                <li>Корректное определение НМЦК позволяет создать благоприятные условия
                                    как для самого Заказчика, так и для потенциальных участников, а также
                                    наиболее эффективно расходовать бюджетные средства.</li>
                                <li>Данная информация может быть получена от различных компаний в виде коммерческих
                                    предложений на поставку товаров, выполнения работ, оказания услуг, сопоставимых
                                    с условиями планируемой закупки.</li>
                                <li>В целях определения НМЦК методом сопоставимых рыночных цен рекомендуется
                                    использовать не менее 3 вариантов цен товара (работы, услуги), предлагаемых
                                    различными поставщиками.</li>
                            </ul>
                            <p>
                                Подробнее: начальная максимальная цена договора обычно определяется методом
                                сопоставимых рыночных цен, на основании информации о рыночных ценах идентичных
                                товаров, работ, услуг, планируемых к закупкам.
                            </p>
                        </div>
                    : selectedButton.id === 2
                        ?
                        <div className="mt-5">
                            <h3><u>Подготовить техническое задание</u></h3>
                            <p>
                                Техническое задание - важная часть закупочной документации, так как именно в нем
                                содержатся сведения о приобретаемом товаре (работах/услугах) и необходимые
                                требования к нему, при составлении важно определить.
                            </p>
                            <p>
                                Основное назначение технического задания - определить требования к объекту закупки.
                                Согласно ч. 4 ст. 23 Федерального закона № 44-ФЗ, наименование закупки должно
                                указываться в соответствии с каталогом товаров, работ, услуг (КТРУ), утверждённым
                                Постановлением Правительства РФ от 8 февраля 2017 года № 145.
                            </p>
                            <p>
                                Если объект закупки присутствует в КТРУ, заказчик должен описать его, как это предусмотрено
                                каталогом. Если описание закупаемой продукции отличается от описания в КТРУ, заказчик обязан
                                включить в него письменное обоснование.
                            </p>
                            <p>
                                Требования к выполнению ТЗ заказчик формирует на основании правил описания объекта закупки
                                (ст. 33 Федерального закона № 44-ФЗ).
                            </p>
                            <p>
                                При составлении ТЗ необходимо основываться на положениях 44-ФЗ, а также в обязательном порядке
                                соблюдать нормы законодательства (гражданского, бюджетного, антимонопольного).
                            </p>
                            <div>
                                Чтобы составить техзадание по 44-ФЗ, можно разбить документ на разделы:
                                <ul>
                                    <li>общая информация;</li>
                                    <li>сведения об объекте закупки;</li>
                                    <li>требования к исполнителю заказа;</li>
                                    <li>условия исполнения контракта;</li>
                                    <li>приложения к ТЗ (на усмотрение заказчика).</li>
                                </ul>
                            </div>
                        </div>
                    : selectedButton.id === 3
                        ?
                        <div className="mt-5">
                            <h3><u>Подготовить конкурсную документацию</u></h3>
                            <p>
                                Конкурсная документация — пакет документов, регламентирующих порядок и условия проведения закупки, а
                                также суть предполагаемого заказа. Грамотное составление конкурсной документации — залог эффективной и
                                отлаженной работы не только на этапе заключения сделки, но и в процессе сопровождения.
                            </p>
                            <p>
                                В конкурсной документации следует:
                            </p>
                            <div>
                                1. Определиться со способом закупки. Существует множество вариантов, но мы остановимся на некоторых из них:
                                <ul>
                                    <li>конкурсы — двухэтапные, селективные, открытые, закрытые и др.;</li>
                                    <li>аукционы — открытые и закрытые;</li>
                                    <li>запросы котировок;</li>
                                    <li>запросы предложений.</li>
                                </ul>
                            </div>
                            <p>
                                2. Установить требования по оценке предложений исходя из критериев.
                            </p>
                            <div>
                                3. Требование по допуску малых компаний к закупкам. Участие малых компаний в качестве поставщика имеет преимущества:
                                <ul>
                                    <li>особые льготы (налоговые, финансовые и административные) для субъектов МСП дают возможность получить лучшие решения для сделки;</li>
                                    <li>небольшие компании обладают большей гибкостью в принятии решений под индивидуальные пожелания клиента, указанные в тендерной документации.</li>
                                </ul>
                            </div>
                        </div>
                    : selectedButton.id === 4
                        ?
                        <div className="mt-5">
                            <h3><u>Выбрать тендерную площадку</u></h3>
                            <p>
                                Основные критерии для отбора электронной площадки — это качество работы площадки и стоимость услуг.
                            </p>
                            <p>
                                Выбор торговой площадки — взвешенное решение, определяющее не только удобство совершения закупки, но и позволяющее избежать неоправданных расходов.
                            </p>
                            <p>
                                Рекомендуемые ООО "Техцентр Приоритет" площадки:
                            </p>
                            <SitesList list={tenders}/>
                        </div>
                    : selectedButton.id === 5
                        ?
                        <div className="mt-5">
                            <h3><u>Получить технику в срок</u></h3>
                            <p>
                                Опытные специалисты ООО «Техцентр Приоритет» помогут оформить все необходимые документы и поставить технику в срок.
                            </p>
                        </div>
                    : null
                }
                <div className="text-center my-5">
                    <Button
                        className="flare-button"
                        onClick={() => setCreateRequestVisible(true)}
                    >
                        <h2 className="m-0 py-3">Оставить заявку</h2>
                    </Button>
                </div>
            </Container>
            <CreateRequest
                show={createRequestVisible}
                onHide={() => setCreateRequestVisible(false)}
                good={false}
                model={false}
                leasing={false}
                tenders={true}
            />
        </div>
    );
});

export default Tenders;