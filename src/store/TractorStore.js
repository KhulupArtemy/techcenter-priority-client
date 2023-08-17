import {makeAutoObservable} from "mobx";
import BELARUS_310_4_310_4M from "../assets/img/tractors/BELARUS-310.4 310.4М.png";
import BELARUS_311_311M from "../assets/img/tractors/BELARUS-311 311M.png";
import BELARUS_320_4_320_4M from "../assets/img/tractors/BELARUS-320.4 320.4М.png";
import BELARUS_321_321M from "../assets/img/tractors/BELARUS-321 321М.png";
import BELARUS_451 from "../assets/img/tractors/BELARUS-451.png";
import BELARUS_422_4 from "../assets/img/tractors/BELARUS-422.4.png";
import BELARUS_510_512 from "../assets/img/tractors/BELARUS-510 512.png";
import BELARUS_511_511_1 from "../assets/img/tractors/BELARUS-511 511.1.png";
import BELARUS_520_522 from "../assets/img/tractors/BELARUS-520 522.png";
import BELARUS_570 from "../assets/img/tractors/BELARUS-570.png";
import BELARUS_572 from "../assets/img/tractors/BELARUS-572.png";
import BELARUS_592_2 from "../assets/img/tractors/BELARUS-592.2.png";
import BELARUS_811_812 from "../assets/img/tractors/BELARUS-811 812.png";
import BELARUS_911_912 from "../assets/img/tractors/BELARUS-911 912.png";
import BELARUS_651 from "../assets/img/tractors/BELARUS-651.png";
import BELARUS_622 from "../assets/img/tractors/BELARUS-622.png";
import BELARUS_82_3 from "../assets/img/tractors/BELARUS 82.3.png";
import BELARUS_80_1_82_1 from "../assets/img/tractors/BELARUS-80.1 82.1.png";
import BELARUS_820 from "../assets/img/tractors/BELARUS-820.png";
import BELARUS_920_920_2 from "../assets/img/tractors/BELARUS-920 920.2.png";
import BELARUS_892_892_2 from "../assets/img/tractors/BELARUS-892 892.2.png";
import BELARUS_90_92 from "../assets/img/tractors/BELARUS-90 92.png";
import BELARUS_900_3_920_3 from "../assets/img/tractors/BELARUS-900.3 920.3.png";
import BELARUS_900_4_920_4 from "../assets/img/tractors/BELARUS-900.4 920.4.png";
import BELARUS_952_952_2 from "../assets/img/tractors/BELARUS-952 952.2.png";
import BELARUS_952_3 from "../assets/img/tractors/BELARUS-952.3.png";
import BELARUS_952_4 from "../assets/img/tractors/BELARUS-952.4.png";
import BELARUS_952_7 from "../assets/img/tractors/BELARUS-952.7.png";
import BELARUS_922_3 from "../assets/img/tractors/BELARUS-922.3.png";
import BELARUS_922_4 from "../assets/img/tractors/BELARUS-922.4.png";
import BELARUS_923_3 from "../assets/img/tractors/BELARUS-923.3.png";
import BELARUS_923_4 from "../assets/img/tractors/BELARUS-923.4.png";
import BELARUS_923_7 from "../assets/img/tractors/BELARUS-923.7.png";
import BELARUS_1021 from "../assets/img/tractors/BELARUS-1021.png";
import BELARUS_1021_3 from "../assets/img/tractors/BELARUS-1021.3.png";
import BELARUS_1021_4 from "../assets/img/tractors/BELARUS-1021.4.png";
import BELARUS_1025_2 from "../assets/img/tractors/BELARUS-1025.2.png";
import BELARUS_1025_3 from "../assets/img/tractors/BELARUS-1025.3.png";
import BELARUS_1025_4 from "../assets/img/tractors/BELARUS-1025.4.png";
import BELARUS_1025_7 from "../assets/img/tractors/BELARUS-1025.7.png";
import BELARUS_1220_3 from "../assets/img/tractors/BELARUS-1220.3.png";
import BELARUS_1220_4 from "../assets/img/tractors/BELARUS-1220.4.png";
import BELARUS_1220_7 from "../assets/img/tractors/BELARUS-1220.7.png";
import BELARUS_1221T_2 from "../assets/img/tractors/BELARUS-1221Т.2.png";
import BELARUS_1221_2_1221B_2 from "../assets/img/tractors/BELARUS-1221.2 1221B.2.png";
import BELARUS_1221_3 from "../assets/img/tractors/BELARUS-1221.3.png";
import BELARUS_1221_4 from "../assets/img/tractors/BELARUS-1221.4.png";
import BELARUS_1221_7 from "../assets/img/tractors/BELARUS-1221.7.png";
import BELARUS_1222_3 from "../assets/img/tractors/BELARUS 1222.3.png";
import BELARUS_1523_1523T1 from "../assets/img/tractors/BELARUS-1523 1523T1.png";
import BELARUS_1523_3_1523T1_3 from "../assets/img/tractors/BELARUS-1523.3 1523T1.3.png";
import BELARUS_1523_4 from "../assets/img/tractors/BELARUS-1523.4.png";
import BELARUS_1502 from "../assets/img/tractors/BELARUS-1502.png";
import BELARUS_1822_3 from "../assets/img/tractors/BELARUS-1822.3.png";
import BELARUS_2022_3_2022B_3 from "../assets/img/tractors/BELARUS-2022.3 2022B.3.png";
import BELARUS_2022_4 from "../assets/img/tractors/BELARUS-2022.4.png";
import BELARUS_2022_5 from "../assets/img/tractors/BELARUS-2022.5.png";
import BELARUS_2022_6 from "../assets/img/tractors/BELARUS-2022.6.png";
import BELARUS_2122_3 from "../assets/img/tractors/BELARUS-2122.3.png";
import BELARUS_2122_4 from "../assets/img/tractors/BELARUS-2122.4.png";
import BELARUS_2103 from "../assets/img/tractors/BELARUS-2103.png";
import BELARUS_3022_DC1 from "../assets/img/tractors/BELARUS-3022.ДЦ1.png";
import BELARUS_3522 from "../assets/img/tractors/BELARUS-3522.png";
import BELARUS_3525 from "../assets/img/tractors/BELARUS-3525.png";

export default class TractorStore {
    constructor() {
        this._models = [
            {id: 1, name: 'BELARUS-300'},
            {id: 2, name: 'BELARUS-400'},
            {id: 3, name: 'BELARUS-500'},
            {id: 4, name: 'BELARUS-600'},
            {id: 5, name: 'BELARUS-800'},
            {id: 6, name: 'BELARUS-900'},
            {id: 7, name: 'BELARUS-1000'},
            {id: 8, name: 'BELARUS-1200'},
            {id: 9, name: 'BELARUS-1300'},
            {id: 10, name: 'BELARUS-1500'},
            {id: 11, name: 'BELARUS-1502'},
            {id: 12, name: 'BELARUS-2000'},
            {id: 13, name: 'BELARUS-2103'},
            {id: 14, name: 'BELARUS-3000'},
            {id: 15, name: 'BELARUS-3500'}
        ]
        this._tractors = [
            {id: 1, modelId: 1, name: 'BELARUS-310.4/310.4М', description: 'Описание для трактора', type: 'дизель четырехтактный', width: 1550, height: 2150,
                img: BELARUS_310_4_310_4M},
            {id: 2, modelId: 1, name: 'BELARUS-311/311M', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_311_311M},
            {id: 3, modelId: 1, name: 'BELARUS-320.4/320.4М', description: 'Описание для трактора', type: 'дизель с непосредственным впрыском топлива, без турбонаддува', width: 1970, height: 2190,
                img: BELARUS_320_4_320_4M},
            {id: 4, modelId: 1, name: 'BELARUS-321/321М', description: 'Описание для трактора', type: 'дизель четырехтактный', width: 1550, height: 2150,
                img: BELARUS_321_321M},
            {id: 5, modelId: 2, name: 'BELARUS-451', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_451},
            {id: 6, modelId: 2, name: 'BELARUS-422.4', description: 'Описание для трактора', type: 'дизель с непосредственным впрыском топлива, без турбонаддува', width: 1970, height: 2190,
                img: BELARUS_422_4},
            {id: 7, modelId: 3, name: 'BELARUS-510/512', description: 'Описание для трактора', type: 'дизель четырехтактный', width: 1550, height: 2150,
                img: BELARUS_510_512},
            {id: 8, modelId: 3, name: 'BELARUS-511/511.1', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_511_511_1},
            {id: 9, modelId: 3, name: 'BELARUS-520/522', description: 'Описание для трактора', type: '4-тактный дизель', width: 1970, height: 2190,
                img: BELARUS_520_522},
            {id: 10, modelId: 3, name: 'BELARUS-570', description: 'Описание для трактора', type: '4-тактный дизель', width: 1970, height: 2190,
                img: BELARUS_570},
            {id: 11, modelId: 3, name: 'BELARUS-572', description: 'Описание для трактора', type: '4-тактный дизель', width: 1970, height: 2190,
                img: BELARUS_572},
            {id: 12, modelId: 3, name: 'BELARUS-592.2', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_592_2},
            {id: 13, modelId: 3, name: 'BELARUS-811/812', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_811_812},
            {id: 14, modelId: 3, name: 'BELARUS-911/912', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_911_912},
            {id: 15, modelId: 4, name: 'BELARUS-651', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_651},
            {id: 16, modelId: 4, name: 'BELARUS-622', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_622},
            {id: 17, modelId: 5, name: 'BELARUS 82.3', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_82_3},
            {id: 18, modelId: 5, name: 'BELARUS-80.1/82.1', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_80_1_82_1},
            {id: 19, modelId: 5, name: 'BELARUS-820', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_820},
            {id: 20, modelId: 5, name: 'BELARUS-920/920.2', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_920_920_2},
            {id: 21, modelId: 5, name: 'BELARUS-892/892.2', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_892_892_2},
            {id: 22, modelId: 5, name: 'BELARUS-90/92', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_90_92},
            {id: 23, modelId: 6, name: 'BELARUS-900.3/920.3', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_900_3_920_3},
            {id: 24, modelId: 6, name: 'BELARUS-900.4/920.4', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_900_4_920_4},
            {id: 25, modelId: 6, name: 'BELARUS-952/952.2', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_952_952_2},
            {id: 26, modelId: 6, name: 'BELARUS-952.3', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_952_3},
            {id: 27, modelId: 6, name: 'BELARUS-952.4', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_952_4},
            {id: 28, modelId: 6, name: 'BELARUS-952.7', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_952_7},
            {id: 29, modelId: 6, name: 'BELARUS-922.3', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_922_3},
            {id: 30, modelId: 6, name: 'BELARUS-922.4', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_922_4},
            {id: 31, modelId: 6, name: 'BELARUS-923.3', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_923_3},
            {id: 32, modelId: 6, name: 'BELARUS-923.4', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_923_4},
            {id: 33, modelId: 6, name: 'BELARUS-923.7', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_923_7},
            {id: 34, modelId: 7, name: 'BELARUS-1021', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1021},
            {id: 35, modelId: 7, name: 'BELARUS-1021.3', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1021_3},
            {id: 36, modelId: 7, name: 'BELARUS-1021.4', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1021_4},
            {id: 37, modelId: 7, name: 'BELARUS-1025.2', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1025_2},
            {id: 38, modelId: 7, name: 'BELARUS-1025.3', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1025_3},
            {id: 39, modelId: 7, name: 'BELARUS-1025.4', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1025_4},
            {id: 40, modelId: 7, name: 'BELARUS-1025.7', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1025_7},
            {id: 41, modelId: 8, name: 'BELARUS-1220.3', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1220_3},
            {id: 42, modelId: 8, name: 'BELARUS-1220.4', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1220_4},
            {id: 43, modelId: 8, name: 'BELARUS-1220.7', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1220_7},
            {id: 44, modelId: 9, name: 'BELARUS-1221Т.2', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1221T_2},
            {id: 45, modelId: 9, name: 'BELARUS-1221.2/1221B.2', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1221_2_1221B_2},
            {id: 46, modelId: 9, name: 'BELARUS-1221.3', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1221_3},
            {id: 47, modelId: 9, name: 'BELARUS-1221.4', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1221_4},
            {id: 48, modelId: 9, name: 'BELARUS-1221.7', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1221_7},
            {id: 49, modelId: 9, name: 'BELARUS 1222.3', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1222_3},
            {id: 50, modelId: 10, name: 'BELARUS-1523/1523T1', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1523_1523T1},
            {id: 51, modelId: 10, name: 'BELARUS-1523.3/1523T1.3', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1523_3_1523T1_3},
            {id: 52, modelId: 10, name: 'BELARUS-1523.4', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1523_4},
            {id: 53, modelId: 11, name: 'BELARUS-1502', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1502},
            {id: 54, modelId: 12, name: 'BELARUS-1822.3', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_1822_3},
            {id: 55, modelId: 12, name: 'BELARUS-2022.3/2022B.3', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_2022_3_2022B_3},
            {id: 56, modelId: 12, name: 'BELARUS-2022.4', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_2022_4},
            {id: 57, modelId: 12, name: 'BELARUS-2022.5', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_2022_5},
            {id: 58, modelId: 12, name: 'BELARUS-2022.6', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_2022_6},
            {id: 59, modelId: 12, name: 'BELARUS-2122.3', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_2122_3},
            {id: 60, modelId: 12, name: 'BELARUS-2122.4', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_2122_4},
            {id: 61, modelId: 13, name: 'BELARUS-2103', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_2103},
            {id: 62, modelId: 14, name: 'BELARUS-3022.ДЦ1', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_3022_DC1},
            {id: 63, modelId: 15, name: 'BELARUS-3522', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_3522},
            {id: 64, modelId: 15, name: 'BELARUS-3522', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_3522},
            {id: 65, modelId: 15, name: 'BELARUS-3525', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_3525},
            {id: 66, modelId: 15, name: 'BELARUS-3525', description: 'Описание для трактора', type: '4-тактный дизель', width: 1675, height: 2260,
                img: BELARUS_3525}
        ]

        this._selectedModel = {}

        //
        this._page = 1
        this._totalCount = this._tractors.length
        this._limit = 8
        this._pageCount = Math.ceil( this._totalCount /  this._limit)
        this._pages = []

        for (let i = 0; i < this._pageCount; i++) {
            this._pages.push(i + 1)
        }

        this._tractorList = [
            {id: 1, name: 'BELARUS-80.1'},
            {id: 2, name: 'BELARUS-82.1'},
            {id: 3, name: 'BELARUS-82.3'},
            {id: 4, name: 'BELARUS-923.3'},
            {id: 5, name: 'BELARUS-952.3'},
            {id: 6, name: 'BELARUS-1025.3'},
            {id: 7, name: 'BELARUS-1221.3'},
            {id: 8, name: 'BELARUS-1222.3'},
            {id: 9, name: 'BELARUS-1523.3'},
            {id: 10, name: 'BELARUS-2022.3'},
            {id: 11, name: 'BELARUS-2022В.3'},
            {id: 12, name: 'BELARUS-3022ДЦ'},
            {id: 13, name: 'BELARUS-3522'}
        ]

        makeAutoObservable(this)
    }

    setSelectedModel(model) {
        this._selectedModel = model
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    setPageCount(pageCount) {
        this._pageCount = pageCount
    }

    setPages(pages) {
        this._pages = pages
    }

    get models() {
        return this._models
    }

    get tractors() {
        return this._tractors
    }

    get selectedModel() {
        return this._selectedModel
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }

    get pageCount() {
        return this._pageCount
    }

    get pages() {
        return this._pages
    }

    get tractorList() {
        return this._tractorList
    }
}