import {makeAutoObservable} from "mobx";
import RTS_Tender from "../assets/img/sites/RTS-Tender.jpg";
import RosElTorg from "../assets/img/sites/RosElTorg.jpg";
import Sber from "../assets/img/sites/Sber.jpg";
import ETP_GPB from "../assets/img/sites/ETP GPB.png";
import RAD from "../assets/img/sites/RAD.jpg";

export default class TendersStore {
    constructor() {
        this._tenderSites = [
            {
                id: 1,
                name: 'РТС-Тендер',
                img: RTS_Tender,
                link: 'https://www.rts-tender.ru'
            },
            {
                id: 2,
                name: 'РосЭлТорг',
                img: RosElTorg,
                link: 'https://www.roseltorg.ru'
            },
            {
                id: 3,
                name: 'Сбер А',
                img: Sber,
                link: 'https://www.sberbank-ast.ru'
            },
            {
                id: 4,
                name: 'ЭТП ГПБ',
                img: ETP_GPB,
                link: 'https://etpgpb.ru'
            },
            {
                id: 5,
                name: 'РАД',
                img: RAD,
                link: 'https://lot-online.ru'
            }
        ]

        makeAutoObservable(this)
    }

    get sites() {
        return this._tenderSites
    }

}