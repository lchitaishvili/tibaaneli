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
        desc: "White dry wine - Rkatsiteli , made from Rkatsiteli grapes grown in Kakheti, Tibaani, is characterized by a light straw color. Has a harmonious, pleasent taste and aroma with light citrus tones.",
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
                    { name: "Color & Appearance", text: "This wine exhibits a delicate pale straw hue with shimmering golden reflections, showcasing its youthful vibrancy. Its brilliant clarity highlights the meticulous winemaking process, ensuring a pure and clean presentation in the glass. The subtle golden undertones suggest a well-developed yet fresh character." },
                    { name: "Texture & Mouthfeel", text: "With a silky-smooth texture and a refreshing crispness, this wine delivers a lively yet refined drinking experience. The balanced acidity adds an invigorating structure, perfectly complementing the gentle roundness of the fruit flavors." },
                    { name: "Viscosity & Body", text: "Displaying a light to medium viscosity, the wine gracefully coats the glass, indicating a harmonious alcohol balance. Its medium body allows for a vibrant yet delicate presence on the palate—elegant and refreshing without being overly rich or heavy." },
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    { name: "Terroir & Climate Influence", text: "This Rkatsiteli originates from the Tibaani Microzone in the eastern Kakheti region, specifically in Sighnaghi, an area deeply rooted in winemaking tradition. The region's unique climate and soil composition create optimal conditions for cultivating high-quality white wines with a distinct, vibrant character. The moderately continental climate in Tibaani features warm summers and cool autumns, striking a perfect balance between sunshine and rainfall. This allows the grapes to ripen gradually, preserving their natural acidity while developing complex flavors. The cooling breezes from the Caucasus Mountains further enhance freshness, contributing to the wine’s refined structure." },
                    { name: "Vineyard Location & Soil Composition", text: "The vineyards are situated at 360 meters above sea level, where slower grape maturation results in well-balanced acidity. The gentle slopes ensure efficient water drainage, preventing excess moisture that could affect vine health, while consistent sun exposure promotes even ripening. well-draining nutrient-rich composition enhances the wine’s minerality and complexity, while the limestone component adds a refined elegance to its overall structure." },
                    { name: "Temperature & Growing Conditions", text: "Throughout the growing season, temperatures range between 22–25°C, with warm days encouraging sugar development and cool nights preserving freshness and aromatic intensity. This significant diurnal temperature variation is key to maintaining the crisp acidity and expressive character that define this exceptional Rkatsiteli." },
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    { text: "With its vibrant acidity, mineral complexity, and crisp freshness, Rkatsiteli from the Tibaani Microzone is an exceptionally versatile wine. Its bright citrus notes and balanced structure allow it to pair beautifully with both light and flavorful dishes, making it a great choice for a variety of cuisines." },
                    { name: "Seafood & Shellfish", text: "The wine’s lively acidity and mineral-driven profile make it a perfect match for seafood, particularly grilled octopus, pan-seared trout, and steamed mussels. Its freshness cuts through the natural richness of shellfish, while also enhancing the delicate flavors of dishes prepared with lemon or fresh herbs." },
                    { name: "Fresh Greens & Vegetable-Based Dishes", text: "Rkatsiteli pairs excellently with Mediterranean-style salads, charred zucchini, and roasted bell peppers. Its citrusy character complements the crispness of fresh greens, while its subtle fruit notes balance the earthy flavors of roasted vegetables." },
                    { name: "White Meats & Poultry", text: "The wine’s zesty and well-balanced acidity makes it an excellent choice for grilled turkey fillet, herb-roasted quail, and chicken piccata. Lightly seasoned white meats with lemon, thyme, or rosemary enhance the wine’s natural brightness." },
                    { name: "Soft & Aged Cheeses", text: "Its refreshing acidity harmonizes beautifully with cheeses such as halloumi, ricotta, and aged gouda. The contrast between the wine’s crispness and the creamy texture of these cheeses creates a well-rounded and satisfying pairing." },
                    { name: "Sushi & Light Asian Cuisine", text: "Rkatsiteli’s citrusy freshness is an excellent match for tuna tartare, shrimp tempura rolls, and Thai lemongrass soup. Its crisp profile provides a refreshing contrast to the umami elements found in Asian dishes, while enhancing their aromatic complexity." },
                    { name: "Rice & Herb-Based Dishes", text: "The wine’s bright acidity and minerality make it a great companion for saffron-infused risotto, lemony couscous, or mushroom pilaf. These dishes bring out the wine’s depth, while maintaining a harmonious balance of flavors." },
                    { text: "This versatile Rkatsiteli from the Tibaani Microzone offers an exceptional range of pairing possibilities, making it a perfect choice for both casual and refined dining experiences." }
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    { text: "To fully experience the elegance of Rkatsiteli, it’s essential to serve it at the right temperature. This ensures a perfect balance between crisp acidity, fresh fruit flavors, and mineral undertones, allowing the wine to evolve beautifully in the glass." },
                    { name: "Optimal Temperature & Its Effects", text: "The ideal serving temperature for Rkatsiteli is 10–12°C . At cooler temperatures around 10°C , the wine’s zesty citrus notes, green apple crispness, and vibrant acidity are most pronounced, making it incredibly refreshing—especially when paired with seafood, fresh salads, or young cheeses. As it gradually warms closer to 12°C , delicate floral aromas, subtle mineral nuances, and hints of spice become more noticeable, enhancing its complexity and making it a great match for richer dishes like roasted poultry, herbed risottos, or light pasta with cream-based sauces." },
                    { name: "Best Chilling Practices", text: "To achieve the perfect serving temperature, place the bottle in the refrigerator for 1.5 to 2 hours before serving. If you need a quicker method, submerge the bottle in an ice-water bath for 15–20 minutes. Avoid over-chilling, as excessive cold can mute the wine’s expressive aromatics and flavors." },
                    { name: "How Temperature Affects the Experience", text: "Once poured, the wine will slightly warm in the glass, gradually unveiling hidden layers of aroma and texture. The mineral backbone and floral undertones become more apparent, while the acidity softens slightly, creating a rounder, more harmonious mouthfeel. Allowing the wine to sit for a few moments before sipping can enhance its aromatic depth and make for a more immersive tasting experience." },
                    { name: "Glassware & Presentation", text: "For the best tasting experience, use white wine glasses with a slightly tapered bowl, which helps concentrate the delicate aromas and direct them towards the nose. This enhances the perception of fruit, floral, and mineral notes, ensuring a well-rounded and aromatic sip every time." },
                    { text: "By serving Rkatsiteli at the right temperature with the appropriate glassware, you can fully enjoy its refined structure, refreshing acidity, and layered complexity, making every sip more expressive and enjoyable." }
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
            "Kisi , made from the old Georgian grape variety - kisi, grown in Kakheti, Tibaani. The wine is characterized by a light golden colour and medium body. The saturated aromas of tropical fruits distinguish it. Has a harmonious, and light taste.",
        detailedInfo: [
            {
                name: "Vinification",
                subItems: [
                    { text: "This Kisi wine is crafted following the European method, which emphasizes maintaining the fresh and lively characteristics of the grape. After the grapes are handpicked at their peak ripeness, they are carefully sorted to ensure only the finest fruit is selected. The grapes are gently pressed, and the juice is promptly transferred to stainless steel tanks to begin fermentation." },
                    { text: "Fermentation takes place in stainless steel at controlled, lower temperatures, which helps preserve the natural fruit flavors and delicate floral notes inherent to the Kisi grape. This technique ensures that the wine maintains its bright acidity and crisp texture, while keeping the true essence of the varietal intact. The process highlights the purity and freshness of the wine, reflecting the unique qualities of the Tibaani Microzone." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            }
        ]
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
        desc: "The appellation of origin, white dry wine - Tsinandali is made from the Rkatsiteli and Kakhetian Mtsvane grape varieties grown in Kakheti, Tsinandali microzone. Wine is characterized by light straw colour. Features long-lasting floral, white berry, apple & peach aromas. With harmonious and balanced taste.",
        detailedInfo: [
            {
                name: "Vinification",
                subItems: [
                    { text: "This Kisi wine is crafted following the European method, which emphasizes maintaining the fresh and lively characteristics of the grape. After the grapes are handpicked at their peak ripeness, they are carefully sorted to ensure only the finest fruit is selected. The grapes are gently pressed, and the juice is promptly transferred to stainless steel tanks to begin fermentation." },
                    { text: "Fermentation takes place in stainless steel at controlled, lower temperatures, which helps preserve the natural fruit flavors and delicate floral notes inherent to the Kisi grape. This technique ensures that the wine maintains its bright acidity and crisp texture, while keeping the true essence of the varietal intact. The process highlights the purity and freshness of the wine, reflecting the unique qualities of the Tibaani Microzone." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            }
        ]
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
        desc: "White semi-dry wine - Pirosmani, made from Rkatsiteli - grape variety grown in Kakheti, Tibaani. It is distinguished by a light straw colour. Characterized by the aroma of white fruit, field flowers. The harmonious combination of natural sweetness, grape aroma and balanced acidity gives the wine soft and cheerful taste.",
        detailedInfo: [
            {
                name: "Vinification",
                subItems: [
                    { text: "This Kisi wine is crafted following the European method, which emphasizes maintaining the fresh and lively characteristics of the grape. After the grapes are handpicked at their peak ripeness, they are carefully sorted to ensure only the finest fruit is selected. The grapes are gently pressed, and the juice is promptly transferred to stainless steel tanks to begin fermentation." },
                    { text: "Fermentation takes place in stainless steel at controlled, lower temperatures, which helps preserve the natural fruit flavors and delicate floral notes inherent to the Kisi grape. This technique ensures that the wine maintains its bright acidity and crisp texture, while keeping the true essence of the varietal intact. The process highlights the purity and freshness of the wine, reflecting the unique qualities of the Tibaani Microzone." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            }
        ]
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
        desc: "White semi-sweet wine - Alazani Valley , made from Rkatsiteli grapes grown in Kakheti, Tibaani. characterized by light-straw colour. soft, Gentle varietal and white fruit aromas distinguish it. Has a gentle, velvety, sweet taste.",
        detailedInfo: [
            {
                name: "Vinification",
                subItems: [
                    { text: "This Kisi wine is crafted following the European method, which emphasizes maintaining the fresh and lively characteristics of the grape. After the grapes are handpicked at their peak ripeness, they are carefully sorted to ensure only the finest fruit is selected. The grapes are gently pressed, and the juice is promptly transferred to stainless steel tanks to begin fermentation." },
                    { text: "Fermentation takes place in stainless steel at controlled, lower temperatures, which helps preserve the natural fruit flavors and delicate floral notes inherent to the Kisi grape. This technique ensures that the wine maintains its bright acidity and crisp texture, while keeping the true essence of the varietal intact. The process highlights the purity and freshness of the wine, reflecting the unique qualities of the Tibaani Microzone." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                    { name: "", text: "" },
                ]
            }
        ]
    }
]