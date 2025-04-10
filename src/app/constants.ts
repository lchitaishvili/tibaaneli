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
            "and aroma with light citrus tones.",
        detailedInfo: [
            {
                name: "Vinification Process",
                subItems: [
                    { text: "The vinification of Rkatsiteli follows a modern European approach, emphasizing the preservation of the grape’s natural freshness and lively character. Sourced from the Tibaani microzone in Sighnaghi, the hand-harvested grapes reflect the distinctive qualities of this exceptional terroir."},
                    { text: "Once picked, the grapes undergo a gentle pressing to extract the juice, which is promptly transferred to stainless steel tanks for fermentation. This process is carefully managed at low temperatures to enhance the wine’s bright fruit and floral aromas while maintaining its crisp acidity." },
                    { text: "After fermentation, the wine is left to settle in the tanks before undergoing a light filtration and bottling process, ensuring that its freshness and varietal purity are preserved. The final result is an elegant white wine that embodies the essence of Rkatsiteli—vibrant, well-balanced, and expressive." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    { name: "Aroma & Palate", text: "This Rkatsiteli reveals an inviting bouquet filled with fresh green apples, citrus blossoms, and delicate hints of pear. Nuances of white flowers and honeydew melon introduce an added layer of complexity, complemented by a subtle mineral undertone. On the palate, the wine is crisp and lively, delivering vibrant flavors of ripe green apple, quince, and citrus zest. As it evolves, gentle notes of stone fruits such as peach and apricot emerge, balanced by a soft herbal touch that enhances its depth and character."},
                    { name: "Style", text: "Crafted in a refined European style, this Rkatsiteli is a dry white wine that highlights the purity of the fruit, supported by a lively acidity. Its smooth, well-rounded texture allows the varietal’s natural freshness and vibrancy to shine, making it an elegant and expressive wine." },
                    { name: "Acidity & Finish", text: "The wine’s bright and refreshing acidity enhances its crispness, adding to its dynamic and energetic profile. This invigorating acidity not only makes it an excellent companion for food pairings but also ensures a lively standalone experience. The finish is clean, lingering with notes of citrus and a delicate minerality, leaving a refined and lasting impression." },
                    { name: "Tannins", text: "As a white wine, this Rkatsiteli has no noticeable tannins, allowing the focus to remain on its fresh acidity and pure fruit expression. This absence of tannins contributes to its smooth, elegant mouthfeel, further highlighting its balance and drinkability." },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" }
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" }
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" }
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" }
                ]
            },
        ]
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
            "guish it. Has a harmonious, and light taste.",
        detailedInfo: []
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
        desc: "",
        detailedInfo: []
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
            "balanced acidity gives the wine so and cheerful taste.",
        detailedInfo: []
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
            "aromas distinguish it. Has a gentle, velvety, sweet taste.",
        detailedInfo: []
    }
]