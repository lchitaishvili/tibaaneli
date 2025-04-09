import {WINE_TYPE} from "./enums";

export interface IWine {
    id: number;
    name: string;
    type: WINE_TYPE;
    subtype: string;
    grape: string;
    alcohol: string;
    region: string;
    terroir: string;
    style: string;
    vinification: string;
    imgName: string;
    tastingTemp: string;
}