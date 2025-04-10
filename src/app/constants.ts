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
        tastingTemp: "10-12°C",
        desc: "White dry wine - Rkatsiteli , made from Rkatsiteli" +
            "grapes grown in Kakheti, Tibaani, is characterized by" +
            "a light straw color. Has a harmonious, pleasent taste" +
            "and aroma with light citrus tones."
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
        tastingTemp: "10-12°C",
        desc: "White dry wine - " +
            "Kisi , made from the old Georgian" +
            "grape variety-kisi, grown in Kakheti , Tibaani. wine is" +
            "characterized by a light golden colour and medium" +
            "body. e saturated aromas of tropical fruits distin -" +
            "guish it. Has a harmonious, and light taste."
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
        tastingTemp: "10-12°C",
        desc: ""
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
        tastingTemp: "8-10°C",
        desc: "White semi-dry wine - Pirosmani , made from Rkatsiteli-" +
            "grape variety grown in Kakheti, Tibaani. It is distin -" +
            "guished by a light straw colour. Characterized by the" +
            "aroma of white fruit, eld owers. e harmonious" +
            "combination of natural sweetness, grape aroma and" +
            "balanced acidity gives the wine so and cheerful taste."
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
        tastingTemp: "8-10°C",
        desc: "White semi-sweet wine - Alazani Valley , made from" +
            "Rkatsiteli grapes grown in Kakheti, Tibaani. characterized" +
            "by light-straw colour. so, Gentle varietal and white fruit" +
            "aromas distinguish it. Has a gentle, velvety, sweet taste."
    }
]