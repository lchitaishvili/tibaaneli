import {WINE_TYPE} from "./enums";
import {IWine} from "./interfaces";

export const WINE_TYPES: WINE_TYPE[] = [
    WINE_TYPE.WHITE,
    WINE_TYPE.RED,
    WINE_TYPE.ROSE,
    WINE_TYPE.QVEVRI,
    WINE_TYPE.CHACHA,
];

export const WINES: IWine[] = [
    {
        id: 1,
        name: "Rkatsiteli",
        type: WINE_TYPE.WHITE,
        subtype: "White Dry Wine",
        grape: "Rkatsiteli",
        alcohol: "12-13%",
        region: "Kakheti, Georgia",
        terroir: "Tibaani Microzone",
        style: "Classic",
        vinification: "Stainless Steel Tanks",
        imgName: "rkatsiteli",
        tastingTemp: "10-12°C"
    },
    {
        id: 2,
        name: "Kisi",
        type: WINE_TYPE.WHITE,
        subtype: "White Dry Wine",
        grape: "Kisi",
        alcohol: "12-13.5%",
        region: "Kakheti, Georgia",
        terroir: "Tibaani Microzone",
        style: "Classic",
        vinification: "Stainless Steel Tanks",
        imgName: "kisi",
        tastingTemp: "10-12°C"
    },
    {
        id: 3,
        name: "Tsinandali",
        type: WINE_TYPE.WHITE,
        subtype: "White Dry Wine",
        grape: "Rkatsiteli & Kakhuri Mtsvane",
        alcohol: "12-13%",
        region: "Kakheti, Georgia",
        terroir: "Tsinandali Microzone",
        style: "Classic",
        vinification: "Stainless Steel Tanks",
        imgName: "tsinandali",
        tastingTemp: "10-12°C"
    },
    {
        id: 4,
        name: "Pirosmani",
        type: WINE_TYPE.WHITE,
        subtype: "White Semi-Dry Wine",
        grape: "Rkatsiteli",
        alcohol: "12-13%",
        region: "Kakheti, Georgia",
        terroir: "Tibaani Microzone",
        style: "Classic",
        vinification: "Stainless Steel Tanks",
        imgName: "pirosmani",
        tastingTemp: "8-10°C"
    },
    {
        id: 5,
        name: "Alazani Valley",
        type: WINE_TYPE.WHITE,
        subtype: "White Semi-Sweet Wine",
        grape: "Rkatsiteli",
        alcohol: "12-13%",
        region: "Kakheti, Georgia",
        terroir: "Tibaani Microzone",
        style: "Classic",
        vinification: "Stainless Steel Tanks",
        imgName: "alazani-valley",
        tastingTemp: "8-10°C"
    }
]