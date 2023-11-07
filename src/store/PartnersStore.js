import {makeAutoObservable} from "mobx";
import Gazprombank_Leasing from "../assets/img/partners/Gazprombank Leasing.png";
import Alfa_Leasing from "../assets/img/partners/Alfa-Leasing.jpg";
import Sberbank_Leasing from "../assets/img/partners/Sberbank Leasing.jpg";
import VTB_Leasing from "../assets/img/partners/VTB Leasing.jpg";
import LC_Europlan from "../assets/img/partners/LC Europlan.jpg";
import Baltic_leasing from "../assets/img/partners/Baltic leasing.jpg";
import State_transport_leasing_company from "../assets/img/partners/State transport leasing company.png";
import RESO_Leasing from "../assets/img/partners/RESO-Leasing.jpg";
import PSB_Leasing from "../assets/img/partners/PSB Leasing.jpg";
import LC_Evolution from "../assets/img/partners/LC Evolution.png";
import Interleasing from "../assets/img/partners/Interleasing.jpg";
import Universal_leasing_company from "../assets/img/partners/Universal leasing company.jpg";
import Sovcombank_Leasing from "../assets/img/partners/Sovcombank Leasing.png";
import Vostok_Leasing from "../assets/img/partners/Vostok-Leasing.png";
import DeltaLeasing from "../assets/img/partners/DeltaLeasing.jpg";
import REGION_Leasing from "../assets/img/partners/REGION Leasing.png";
import Element_Leasing from "../assets/img/partners/Element Leasing.jpg";
import URAL_LEASING from "../assets/img/partners/URAL LEASING.jpg";
import PAO_TRANSFIN_M from "../assets/img/partners/PAO TRANSFIN-M.jpg";
import JSC_LC_RODELEN from "../assets/img/partners/JSC LC RODELEN.jpg";
import DELTA_LEASING_COMPANY_LLC from "../assets/img/partners/DELTA LEASING COMPANY LLC.jpg";
import TIMELeasing_LLC from "../assets/img/partners/TIMELeasing LLC.png";
import LLC_LEASING_TRADE from "../assets/img/partners/LLC LEASING-TRADE.png";
import LLC_MK_LEASING from "../assets/img/partners/LLC MK LEASING.jpg";
import LLC_CONTROL_LEASING from "../assets/img/partners/LLC CONTROL LEASING.jpg";
import ECONOMLEASING_LLC from "../assets/img/partners/ECONOMLEASING LLC.jpg";
import SOBI_LEASING_LLC from "../assets/img/partners/SOBI-LEASING LLC.jpg";
import LLC_TRANSPORT_LEASING_COMPANY from "../assets/img/partners/LLC TRANSPORT LEASING COMPANY.png";
import LK_SESPEL_FINANCE_LLC from "../assets/img/partners/LK SESPEL-FINANCE LLC.jpg";
import ZAO_ALLIANCE_LEASING from "../assets/img/partners/ZAO ALLIANCE - LEASING.jpg";
import LLC_STONE_XXI from "../assets/img/partners/LLC STONE-XXI.jpg";
import LLC_TECHNO_LEASING from "../assets/img/partners/LLC TECHNO LEASING.jpg";
import JSC_MIK from "../assets/img/partners/JSC MIK.png";
import LIZFINANCE_LLC from "../assets/img/partners/LIZFINANCE LLC.jpg";
import JSC_MASHPROMLIZING from "../assets/img/partners/JSC MASHPROMLIZING.jpg";
import JSC_STOLICHNY_LEASING from "../assets/img/partners/JSC STOLICHNY LEASING.jpg";
import MSB_LEASING_LLC from "../assets/img/partners/MSB-LEASING LLC.jpg";
import NEFTEPROMLIZING_LLC from "../assets/img/partners/NEFTEPROMLIZING LLC.jpg";
import SOLID_LEASING_LLC from "../assets/img/partners/SOLID-LEASING LLC.jpg";
import UNICREDIT_LEASING_LLC from "../assets/img/partners/UNICREDIT LEASING LLC.jpg";
import AQUILON_LEASING_LLC from "../assets/img/partners/AQUILON-LEASING LLC.jpg";

export default class PartnersStore {
    constructor() {
        this._financePartners = [
            {
                id: 1,
                name: 'Газпромбанк Лизинг',
                img: Gazprombank_Leasing,
                link: 'https://www.gpbl.ru'
            },
            {
                id: 2,
                name: 'Альфа-Лизинг',
                img: Alfa_Leasing,
                link: 'https://alfaleasing.ru/products/special-equipment/'
            },
            {
                id: 3,
                name: 'Сбербанк Лизинг',
                img: Sberbank_Leasing,
                link: 'https://www.sberleasing.ru'
            },
            {
                id: 4,
                name: 'ВТБ Лизинг',
                img: VTB_Leasing,
                link: 'https://www.vtb-leasing.ru/'
            },
            {
                id: 5,
                name: 'ЛК "Европлан"',
                img: LC_Europlan,
                link: 'https://europlan.ru'
            },
            {
                id: 6,
                name: 'Балтийский лизинг',
                img: Baltic_leasing,
                link: 'https://baltlease.ru/'
            },
            {
                id: 7,
                name: 'Государственная транспортная лизинговая компания',
                img: State_transport_leasing_company,
                link: 'https://www.gtlk.ru/'
            },
            {
                id: 8,
                name: 'РЕСО-Лизинг',
                img: RESO_Leasing,
                link: 'https://www.resoleasing.com/'
            },
            {
                id: 9,
                name: 'ПСБ Лизинг',
                img: PSB_Leasing,
                link: 'https://www.psbank.ru/Corporate/LongTerm'
            },
            {
                id: 10,
                name: 'ЛК Эволюция',
                img: LC_Evolution,
                link: 'https://www.evoleasing.ru'
            },
            {
                id: 11,
                name: 'Интерлизинг',
                img: Interleasing,
                link: 'https://www.ileasing.ru'
            },
            {
                id: 12,
                name: 'Универсальная лизинговая компания',
                img: Universal_leasing_company,
                link: 'https://www.ulk.ru'
            },
            {
                id: 13,
                name: 'Совкомбанк Лизинг',
                img: Sovcombank_Leasing,
                link: 'https://sovcombank-leasing.ru/'
            },
            {
                id: 14,
                name: 'Восток-Лизинг',
                img: Vostok_Leasing,
                link: 'https://www.v-leasing.ru'
            },
            {
                id: 15,
                name: 'ДельтаЛизинг',
                img: DeltaLeasing,
                link: 'https://www.deltaleasing.ru'
            },
            {
                id: 16,
                name: 'РЕГИОН Лизинг',
                img: REGION_Leasing,
                link: 'https://www.region.ru/business/leasing/'
            },
            {
                id: 17,
                name: 'Элемент Лизинг',
                img: Element_Leasing,
                link: 'https://www.elementleasing.ru'
            },
            {
                id: 18,
                name: 'ООО "ПРАКТИКА ЛК"',
                img: URAL_LEASING,
                link: 'https://www.urall.ru'
            },
            {
                id: 19,
                name: 'ПАО "ТРАНСФИН-М"',
                img: PAO_TRANSFIN_M,
                link: 'https://www.transfin-m.ru'
            },
            {
                id: 20,
                name: 'АО ЛК "РОДЕЛЕН"',
                img: JSC_LC_RODELEN,
                link: 'https://www.rodelen.ru'
            },
            {
                id: 21,
                name: 'ООО ЛИЗИНГОВАЯ КОМПАНИЯ "ДЕЛЬТА"',
                img: DELTA_LEASING_COMPANY_LLC,
                link: 'https://www.lkdelta.ru'
            },
            {
                id: 22,
                name: 'ООО "ТАЙМЛИЗИНГ"',
                img: TIMELeasing_LLC,
                link: 'https://timeleasing.ru'
            },
            {
                id: 23,
                name: 'ООО "ЛИЗИНГ-ТРЕЙД"',
                img: LLC_LEASING_TRADE,
                link: 'https://leasing-trade.ru'
            },
            {
                id: 24,
                name: 'ООО "МК ЛИЗИНГ"',
                img: LLC_MK_LEASING,
                link: 'https://mkleasing.ru'
            },
            {
                id: 25,
                name: 'ООО "КОНТРОЛ ЛИЗИНГ"',
                img: LLC_CONTROL_LEASING,
                link: 'https://ctrl.lc'
            },
            {
                id: 26,
                name: 'ООО "ЭКОНОМЛИЗИНГ"',
                img: ECONOMLEASING_LLC,
                link: 'https://economleasing.ru'
            },
            {
                id: 27,
                name: 'ООО "СОБИ-ЛИЗИНГ"',
                img: SOBI_LEASING_LLC,
                link: 'https://www.sobileasing.ru'
            },
            {
                id: 28,
                name: 'ООО "ТРАНСПОРТНАЯ ЛИЗИНГОВАЯ КОМПАНИЯ"',
                img: LLC_TRANSPORT_LEASING_COMPANY,
                link: 'https://ooo-tlk.ru/'
            },
            {
                id: 29,
                name: 'ООО ЛК "СЕСПЕЛЬ-ФИНАНС"',
                img: LK_SESPEL_FINANCE_LLC,
                link: 'https://sespelfinance.ru'
            },
            {
                id: 30,
                name: 'ЗАО "АЛЬЯНС - ЛИЗИНГ"',
                img: ZAO_ALLIANCE_LEASING,
                link: 'http://alliance-leasing.ru/'
            },
            {
                id: 31,
                name: 'ООО "СТОУН-XXI"',
                img: LLC_STONE_XXI,
                link: 'https://www.stone-xxi.ru'
            },
            {
                id: 32,
                name: 'ООО "ТЕХНО ЛИЗИНГ"',
                img: LLC_TECHNO_LEASING,
                link: 'https://tehnoleasing.ru'
            },
            {
                id: 33,
                name: 'АО "МИК"',
                img: JSC_MIK,
                link: 'https://mik-lizing.ru'
            },
            {
                id: 34,
                name: 'ООО "ЛИЗФАЙНЭНС"',
                img: LIZFINANCE_LLC,
                link: 'https://lf-co.ru/'
            },
            {
                id: 35,
                name: 'АО "МАШПРОМЛИЗИНГ"',
                img: JSC_MASHPROMLIZING,
                link: 'http://aompl.ru/'
            },
            {
                id: 36,
                name: 'АО "СТОЛИЧНЫЙ ЛИЗИНГ"',
                img: JSC_STOLICHNY_LEASING,
                link: 'https://www.clcom.ru'
            },
            {
                id: 37,
                name: 'ООО "МСБ-ЛИЗИНГ"',
                img: MSB_LEASING_LLC,
                link: 'https://www.msb-leasing.ru'
            },
            {
                id: 38,
                name: 'ООО "НЕФТЕПРОМЛИЗИНГ"',
                img: NEFTEPROMLIZING_LLC,
                link: 'https://www.rosneft.ru/about/partners/leasing/'
            },
            {
                id: 39,
                name: 'ООО "СОЛИД-ЛИЗИНГ"',
                img: SOLID_LEASING_LLC,
                link: 'https://solid-leasing.ru'
            },
            {
                id: 40,
                name: 'ООО "ЮНИКРЕДИТ ЛИЗИНГ"',
                img: UNICREDIT_LEASING_LLC,
                link: 'https://unicreditleasing.ru'
            },
            {
                id: 41,
                name: 'ООО "АКВИЛОН-ЛИЗИНГ"',
                img: AQUILON_LEASING_LLC,
                link: 'https://www.akvilon-leasing.ru'
            }
        ]

        makeAutoObservable(this)
    }

    get financePartners() {
        return this._financePartners
    }

}