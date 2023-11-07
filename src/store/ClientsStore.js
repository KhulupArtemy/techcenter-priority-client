import {makeAutoObservable} from "mobx";
import Gazprom from "../assets/img/clients/Gazprom.jpg";
import Rosneft from "../assets/img/clients/Rosneft.jpg";
import Lukoil from "../assets/img/clients/Lukoil.jpg";
import Tatneft from "../assets/img/clients/Tatneft.jpg";
import Rosseti from "../assets/img/clients/Rosseti.jpg";

export default class ClientsStore {
    constructor() {
        this._clientSites = [
            {
                id: 1,
                name: 'Газпром',
                img: Gazprom,
                link: 'https://www.gazprom.ru/about/'
            },
            {
                id: 2,
                name: 'Роснефть',
                img: Rosneft,
                link: 'https://www.rosneft.ru/about/'
            },
            {
                id: 3,
                name: 'Лукойл',
                img: Lukoil,
                link: 'https://lukoil.ru'
            },
            {
                id: 4,
                name: 'Татнефть',
                img: Tatneft,
                link: 'https://tatneft.ru'
            },
            {
                id: 5,
                name: 'Россети',
                img: Rosseti,
                link: 'https://www.rosseti.ru/ '
            }
        ]

        makeAutoObservable(this)
    }

    get sites() {
        return this._clientSites
    }

}