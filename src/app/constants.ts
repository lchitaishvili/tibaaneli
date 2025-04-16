import {WINE_TYPE} from "./enums";
import {IWine} from "./interfaces";

export const WINE_TYPES: WINE_TYPE[] = [
    WINE_TYPE.WHITE,
    WINE_TYPE.RED,
    WINE_TYPE.ROSE,
    WINE_TYPE.QVEVRI,
    WINE_TYPE.CHACHA,
];

// Products featured on the home page
export const FEATURED_PRODUCTS: number[] = [
  15, // Saperavi Qvevri
  13, // Rkatsiteli Qvevri
  8, // Kindzmarauli
  7, // Mukuzani
  2, // Kisi
  3, // Tsinandali
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
                    {
                        name: "Aroma & Palate",
                        text: "Kisi offers an inviting and vibrant bouquet, with prominent floral scents, particularly white flowers and citrus notes. The aroma is complemented by ripe stone fruits such as peach and apricot, mingling with crisp green apple and subtle herbal nuances. On the palate, it delivers a lively, crisp acidity that forms the backbone of the wine. The taste mirrors the nose, with bold peach and apricot flavors, accented by a slight mineral edge and a hint of citrus zest, all creating a refreshing and clean mouthfeel."
                    },
                    {
                        name: "Style",
                        text: "This Kisi follows a modern European winemaking approach, emphasizing clarity and purity of the fruit expression. It captures the essence of its terroir with a focus on maintaining vibrant acidity and a fresh, fruit-driven profile."
                    },
                    {
                        name: "Acidity & Finish",
                        text: "The wine boasts a bright, invigorating acidity that enhances its crisp structure and food-pairing versatility. It balances the sweetness of the fruit while contributing to the wine's refined character. The finish is smooth and long-lasting, with lingering citrus and stone fruit flavors, complemented by a touch of green herbs and minerality. This elegant finish leaves a refreshing aftertaste, inviting another sip."
                    },
                    {
                        name: "Tannins",
                        text: "The tannins in this wine are soft and subtle, providing just enough structure to support the vibrant acidity and fruit profile without overpowering it. This allows the wine to maintain its elegance and freshness throughout the tasting experience."
                    },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    {
                        name: "Color & Appearance",
                        text: "Kisi presents a pale straw-yellow color, gleaming with youthful energy. Its bright, clear hue is often tinged with subtle green reflections, hinting at the wine's vibrant acidity. This visual clarity reflects its fresh character and careful production."
                    },
                    {
                        name: "Texture & Mouthfeel",
                        text: "The wine offers a smooth, refreshing texture that invigorates the palate. The lively acidity enhances the flavors, providing a clean, crisp finish. Each sip leaves a fresh, uplifting sensation, highlighting the juicy fruit character and elevating the overall drinking experience."
                    },
                    {
                        name: "Viscosity & Body",
                        text: "With a light to medium viscosity, Kisi is easy to enjoy without being too heavy. The wine forms gentle legs when swirled in the glass, indicating its moderate alcohol content. It strikes a perfect balance with a light to medium body, offering enough richness to deliver flavor while maintaining a refreshing, crisp quality that is perfect for warmer days or lighter fare."
                    }
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    {
                        name: "Terroir & Climate Influence",
                        text: "Kisi is grown in the Tibaani microzone, located in the eastern part of Kakheti, Georgia, an area celebrated for its rich winemaking heritage and ideal conditions for grape cultivation. The unique blend of climate, soil, and geography in this region profoundly shapes the wine's distinct profile, contributing to its depth and complexity. The combination of these natural factors results in a wine that is a true expression of its origin."
                    },
                    {
                        name: "Vineyard Location & Soil Composition",
                        text: "The vineyards in the Tibaani microzone are situated at an elevation of 360 meters above sea level, on gentle slopes that encourage excellent airflow and effective drainage. The slope orientation optimizes sunlight exposure, further enhancing the development of the grapes. The soils here are rich in minerals, providing a perfect balance of drainage and nutrients, which supports deep root growth. This soil composition allows the vines to access essential water and minerals, enriching the grape’s overall character and contributing to the wine’s complexity."
                    },
                    {
                        name: "Temperature & Growing Conditions",
                        text: "The long days of sunshine allow for the full ripening of the grapes while helping maintain their natural acidity. The average temperature during the growing season is between 23°C and 25°C, which plays a crucial role in preserving the freshness and acidity of the grapes. This temperature range fosters gradual ripening, allowing the wine to develop a well-balanced profile that reflects its terroir."
                    }
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    {
                        name: "Seafood",
                        text: "Kisi’s lively acidity makes it an excellent match for seafood, especially grilled fish like trout and sea bass, or delicate shellfish such as shrimp and scallops. The wine’s fresh fruit flavors complement the natural brininess of the seafood, creating a refreshing and well-balanced pairing."
                    },
                    {
                        name: "Vegetarian Dishes",
                        text: "Kisi complements a variety of vegetable dishes, particularly those with grilled or roasted vegetables drizzled with olive oil. Light salads with fresh greens, citrus segments, and tangy vinaigrettes work exceptionally well, showcasing the wine’s refreshing qualities."
                    },
                    {
                        name: "Fruits and Fresh Salads",
                        text: "For a light and invigorating finish to a meal, Kisi pairs wonderfully with fruit-based desserts or vibrant salads. Fresh, seasonal fruits in a salad can accentuate the wine’s crisp profile, enhancing its bright, zesty notes."
                    },
                    {
                        name: "Poultry",
                        text: "Kisi is a perfect companion for poultry, especially lighter preparations of chicken or turkey. The wine’s acidity cuts through the richness of roasted or grilled meats, offering a fresh contrast that enhances the overall experience."
                    },
                    {
                        name: "Spicy Dishes",
                        text: "Kisi’s refreshing nature makes it an ideal choice for lightly spiced dishes, such as those found in Mediterranean or Asian cuisines. The wine’s bright acidity helps tame the heat while complementing the bold flavors, ensuring a balanced pairing without overwhelming the palate."
                    }
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    {
                        name: "Optimal Temperature & Its Effects",
                        text: "For the best experience with Kisi, the wine should be served chilled at a temperature of around 10°C. This temperature helps accentuate its fresh and vibrant characteristics, enhancing the flavors and aromas to their fullest potential."
                    },
                    {
                        name: "Best Chilling Practices",
                        text: "To reach the ideal temperature, place the bottle in the refrigerator for 2–3 hours before serving. If you need to chill it faster, submerge the bottle in an ice bucket filled with both ice and water for 20–30 minutes. This will quickly bring the wine to the perfect temperature for serving."
                    },
                    {
                        name: "How Temperature Affects the Experience",
                        text: "Serving Kisi at the right temperature allows its lively, refreshing qualities to stand out. The coolness preserves the wine's crispness and vibrant acidity, creating an enjoyable, refreshing experience that elevates its natural characteristics."
                    },
                    {
                        name: "Glassware & Presentation",
                        text: "Serve Kisi in a tulip-shaped glass to help concentrate its aromas, enhancing the sensory experience. This type of glass allows the wine’s vibrant notes to be fully appreciated, making each sip more enjoyable and well-rounded."
                    },
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
                    { text: "Tsinandali is crafted using a refined winemaking process that showcases the unique characteristics of its grape blend, consisting of 80% Rkatsiteli and 20% Kakhuri Mtsvane. The grapes are meticulously hand-harvested and carefully selected to ensure only the best fruit is used." },
                    { text: "After harvesting, they undergo a gentle pressing to extract the juice while minimizing skin contact, preserving the wine’s freshness and aromatic complexity. Fermentation takes place in temperature-controlled stainless steel tanks, allowing the fruity and floral nuances to develop while maintaining the wine’s crisp acidity and elegant minerality." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    {
                        name: "Aroma & Palate",
                        text: "Tsinandali unveils a delightful nose with aromas of crisp green apple, juicy pear, and delicate floral hints of honeysuckle and acacia. Light citrus zest and a touch of herbal nuances further enrich the fragrance, creating a vibrant and layered bouquet. On the palate, it offers a refreshing, well-balanced experience, with bright apple and pear flavors harmoniously blending with the fresh acidity. Subtle mineral undertones from the soil add an extra layer of refinement to its smooth profile."
                    },
                    {
                        name: "Style",
                        text: "This wine is a dry white with a distinctly European character, marked by its refreshing acidity and a profile of fresh fruit. Its clean and crisp nature makes Tsinandali a versatile wine, perfect for a wide range of occasions."
                    },
                    {
                        name: "Acidity & Finish",
                        text: "Tsinandali stands out for its bright, crisp acidity, which not only balances the wine’s fruity elements but also supports its structure and aging potential. This lively acidity makes it an ideal companion for food pairings. The finish is long-lasting, clean, and crisp, with lingering citrus notes and a delicate hint of almond, leaving a satisfying aftertaste that encourages another taste."
                    },
                    {
                        name: "Tannins",
                        text: "The wine is beautifully smooth, with no harsh tannins present, making it an easy-drinking, elegant choice that emphasizes its refreshing qualities rather than any astringency."
                    },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    {
                        name: "Color & Appearance",
                        text: "Tsinandali exhibits a pale straw hue with hints of green, reflecting its fresh, youthful essence. The wine's clarity and brilliant shine add to its visual allure, drawing attention with its vibrant color and inviting nature."
                    },
                    {
                        name: "Texture & Mouthfeel",
                        text: "The texture is light and refreshing, delivering a lively sensation on the palate. Its smoothness highlights the fresh fruit flavors, offering a pleasurable and invigorating experience with every sip."
                    },
                    {
                        name: "Viscosity & Body",
                        text: "This wine has a light to medium viscosity, creating gentle legs in the glass when swirled. Its balanced consistency enhances the overall drinking experience, without feeling too heavy. The body is similarly light to medium, pairing seamlessly with its crisp acidity and vibrant fruit profile, making it an ideal match for a variety of dishes."
                    }
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    {
                        name: "Terroir & Climate Influence",
                        text: "Tsinandali originates from the renowned Tsinandali Microzone in the Telavi region of Kakheti, Georgia. This area has a deep-rooted winemaking heritage and provides an ideal environment for grape cultivation. The distinctive terroir, influenced by a mix of local practices and natural elements, imparts unique flavors and aromas to the wine, reflecting the true essence of the region."
                    },
                    {
                        name: "Vineyard Location & Soil Composition",
                        text: "The vineyards are located at elevations ranging between 500 and 700 meters above sea level, with gently sloping terrain that ensures optimal sunlight exposure and good air circulation. This natural topography helps reduce the risk of diseases. The region’s soils are primarily a mix of clay and limestone, offering excellent drainage and the ability to retain essential nutrients. These soil characteristics promote healthy vine growth, allowing the roots to reach deeper for minerals, enhancing the grapes' quality and taste."
                    },
                    {
                        name: "Temperature & Growing Conditions",
                        text: "The growing season in the Tsinandali Microzone experiences an average temperature range of 18°C to 25°C, with notable day-to-night temperature fluctuations. This variation is key to developing complex flavors in the grapes, as the warm days encourage ripening, while the cooler nights help preserve the acidity. These growing conditions contribute to the wine's vibrant, aromatic profile and well-balanced character."
                    }
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    {
                        name: "Seafood",
                        text: "The vibrant acidity and fresh profile of Tsinandali make it a great match for a variety of seafood dishes. It pairs wonderfully with grilled fish like sea bass or trout, as well as shellfish such as clams, mussels, and crab. The wine accentuates the delicate oceanic flavors, creating a perfect balance between freshness and depth."
                    },
                    {
                        name: "Pasta",
                        text: "For pasta, Tsinandali pairs excellently with light, herb-based sauces such as basil pesto or pasta with a tomato-basil sauce. The wine's crisp acidity enhances the herbal and citrus elements, making for a clean and vibrant pairing. Avoid rich, creamy pasta dishes, as they might overwhelm the delicate qualities of the wine."
                    },
                    {
                        name: "Cheese",
                        text: "This wine pairs beautifully with a range of cheeses, especially those with a tangy or creamy texture. Consider serving Tsinandali with mild goat cheese, soft Brie, or even a sharp Pecorino. The wine’s acidity cuts through the creaminess of these cheeses, enhancing both the wine and cheese’s flavors."
                    },
                    {
                        name: "Poultry",
                        text: "Tsinandali also complements light poultry dishes, especially grilled or herb-marinated chicken. The crispness of the wine balances the richness of roasted or barbecued meats. For a particularly flavorful match, try pairing it with chicken served with a lemon or herb sauce to highlight the wine's citrus notes."
                    }
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    {
                        name: "Optimal Temperature & Its Effects",
                        text: "Tsinandali is best enjoyed when served chilled, as this enhances its lively, refreshing nature. The ideal temperature for serving is between 8 and 10°C (46 to 50°F). At this range, the wine's bright acidity and aromatic profile are fully expressed, offering a crisp, invigorating tasting experience."
                    },
                    {
                        name: "Best Chilling Practices",
                        text: "To reach the perfect serving temperature, you can place the bottle in an ice bucket filled with both water and ice for around 20 to 30 minutes before pouring. Alternatively, refrigerating the wine for about two hours will also bring it to the ideal temperature. This method ensures that the wine maintains its refreshing qualities, allowing its nuanced flavors to shine."
                    },
                    {
                        name: "How Temperature Affects the Experience",
                        text: "Serving Tsinandali at the right temperature is crucial to unlock its full potential. A chilled bottle highlights the wine's fresh and aromatic character, providing a crisp and clean mouthfeel that enhances its delicate citrus and fruity notes. This temperature allows the wine to be more expressive and enjoyable, especially during warm weather or casual social settings."
                    },
                    {
                        name: "Glassware & Presentation",
                        text: "To present Tsinandali at its best, use a standard white wine glass that allows the wine to breathe and its aromas to open up. A delicate, tulip-shaped glass is ideal for capturing the wine’s vibrant fragrances. The clear, chilled liquid will sparkle in the glass, inviting you to indulge in its fresh and aromatic character."
                    },
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
                    { text: "The Pirosmani White Semi-Dry Wine is produced using 100% Rkatsiteli grapes, a variety celebrated for its crisp acidity and expressive fruit aromas. The wine is crafted following a European-style technique, where stainless steel tanks are employed to retain the grapes' natural freshness and vibrant flavors." },
                    { text: "After the Rkatsiteli grapes are handpicked and carefully sorted to ensure only the best quality fruit is used, fermentation takes place in temperature-controlled stainless steel tanks. The fermentation process is carefully managed at temperatures between 14-16°C, ensuring the preservation of the wine's delicate fruity notes while keeping the natural sugars intact to achieve its semi-dry style." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    {
                        name: "Aroma & Palate",
                        text: "Pirosmani White Semi-Dry opens with an inviting bouquet of ripe stone fruits, especially peach and apricot, harmonized by delicate floral hints of honeysuckle and a dash of citrus zest. The nose carries a light sweetness, with subtle undertones of honey and white blossoms, enhancing its aromatic complexity. On the palate, the wine is smooth and slightly off-dry, revealing flavors of juicy pear, crisp green apple, and refreshing melon, all balanced by vibrant acidity. A touch of lemon and grapefruit zest adds an extra layer of liveliness, creating a refreshing experience."
                    },
                    {
                        name: "Style",
                        text: "This semi-dry white wine is well-balanced, with a harmonious blend of light sweetness and crisp acidity. Its approachable style is both elegant and inviting, offering a perfect equilibrium between fruit-forward flavors and a clean finish."
                    },
                    {
                        name: "Acidity & Finish",
                        text: "The wine features a bright, medium acidity that lifts the fresh fruit flavors and balances the wine’s semi-dry profile. This acidity helps maintain its refreshing quality, making each sip feel invigorating and lively. The finish is clean and long-lasting, with subtle citrus notes and a mineral edge, while a gentle floral note lingers, leaving a smooth, pleasant aftertaste."
                    },
                    {
                        name: "Tannins",
                        text: "Pirosmani White Semi-Dry has a soft, rounded structure with minimal tannins, allowing the fruit and acidity to shine through without any astringency. The lack of prominent tannins enhances the wine's smooth texture and refreshing nature."
                    },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    {
                        name: "Color & Appearance",
                        text: "Pirosmani White Semi-Dry presents a delicate pale straw-yellow color, with hints of gold that shimmer in natural light. Its bright clarity in the glass highlights the wine’s youthful vibrancy and lively character, making it visually appealing and inviting."
                    },
                    {
                        name: "Texture & Mouthfeel",
                        text: "The wine has a smooth and slightly rounded texture, creating a silky mouthfeel. Its semi-dry nature brings a gentle richness, enhanced by a touch of residual sugar, while the balancing acidity ensures a refreshing, harmonious sensation as it glides across the palate."
                    },
                    {
                        name: "Viscosity & Body",
                        text: "With moderate viscosity, the wine forms slow, elegant legs that suggest a slight sweetness typical of a semi-dry style. It has a light to medium body that provides a smooth, balanced weight on the palate, offering a satisfying drinking experience without being too heavy."
                    }
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    {
                        name: "Terroir & Climate Influence",
                        text: "Pirosmani White Semi-Dry is produced from 100% Rkatsiteli grapes, sourced from the Tibaani Microzone in eastern Kakheti. This area is celebrated for its unique terroir, which contributes to the distinctive character and high quality of the wine. The combination of geographic and climatic factors creates ideal conditions for cultivating grapes with remarkable acidity and flavor."
                    },
                    {
                        name: "Vineyard Location & Soil Composition",
                        text: "The vineyards are positioned at 360 meters above sea level, on gentle slopes that ensure optimal sun exposure and excellent drainage. These natural features help prevent waterlogging of the vines while promoting the development of concentrated, flavorful grapes. The soil is rich in minerals, supporting the vines and imparting a fresh, mineral-driven complexity to the wine."
                    },
                    {
                        name: "Temperature & Growing Conditions",
                        text: "With an average growing season temperature of 23-25°C, the Tibaani microzone benefits from warm days and cool nights, allowing the grapes to ripen fully while preserving their natural acidity. This temperature variation is essential for maintaining the vibrant flavors and crispness of the wine, resulting in a well-balanced, semi-dry profile."
                    }
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    {
                        name: "Light Pasta Dishes",
                        text: "Pirosmani works well with light pasta dishes, especially those featuring olive oil, garlic, or lemon-based sauces. The wine’s acidity and fruitiness enhance the delicate flavors of the pasta while adding a refreshing finish to every bite."
                    },
                    {
                        name: "Fruits and Salads",
                        text: "For a refreshing pairing, try Pirosmani with fruit-infused salads or light citrus-based dressings. A mixed salad with apples, pears, or berries, or even juicy melon and peaches, will highlight the wine’s bright, fruity profile, creating a vibrant contrast that enhances the overall experience."
                    },
                    {
                        name: "Spicy Dishes",
                        text: "The slight sweetness of Pirosmani balances well with mildly spicy foods. It pairs beautifully with dishes like Thai curries, spicy grilled chicken, or anything featuring chili and ginger. The wine’s smooth sweetness tempers the heat, creating a refreshing harmony between spice and fruit."
                    },
                    {
                        name: "Seafood",
                        text: "The subtle sweetness and crisp acidity of Pirosmani White Semi-Dry make it a fantastic pairing for a variety of seafood dishes. Enjoy it with grilled shrimp, fresh lobster, or delicately seared scallops. The wine’s fruity notes complement the natural flavors of seafood, and its semi-dry character adds a silky finish to these light, flavorful dishes."
                    },
                    {
                        name: "Vegetarian Cuisine",
                        text: "For a vegetarian pairing, Pirosmani complements grilled vegetables like zucchini, eggplant, and bell peppers. Its light sweetness and acidity bring out the natural flavors of the vegetables, making for a satisfying and balanced meal."
                    }
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    {
                        name: "Optimal Temperature & Its Effects",
                        text: "Pirosmani White Semi-Dry Wine is best enjoyed when served between 8°C and 10°C . This temperature range allows the wine’s delightful fruity notes and semi-sweet character to shine, while maintaining its crisp and refreshing acidity. The wine feels vibrant and balanced, offering an ideal drinking experience."
                    },
                    {
                        name: "Best Chilling Practices",
                        text: "To reach the optimal serving temperature, place the bottle in an ice bucket for a short time or refrigerate it for around 30 minutes before serving. This ensures the wine is properly chilled without compromising its aromatic profile. Avoid excessive chilling, as it can mute the nuances and overall complexity of the wine."
                    },
                    {
                        name: "How Temperature Affects the Experience",
                        text: "When served at 8°C , Pirosmani displays its freshest characteristics, with a heightened sense of crispness and acidity. This cooler temperature is perfect when paired with light seafood or spicy dishes, as it enhances the wine’s ability to cleanse the palate. At 10°C, the fruit flavors become more expressive, offering a fuller mouthfeel, ideal for pairing with richer cheeses or enjoying the wine on its own."
                    },
                    {
                        name: "Glassware & Presentation",
                        text: "For the best presentation, use a white wine glass with a slightly tapered bowl to concentrate the aromas. This glass shape also allows for proper aeration, enhancing the wine’s delicate and fruity bouquet. The glass should be filled to around one-third to allow for easy swirling and maximum aroma release."
                    },
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
                    { text: "The production of Alazani Valley White Semi-Sweet Wine is carefully designed to preserve the natural sweetness of Rkatsiteli grapes, while balancing it with a crisp acidity. The process starts with hand-harvesting the finest Rkatsiteli grapes from the Tibaani Microzone, ensuring that only the highest quality fruit is chosen." },
                    { text: "After the grapes are destemmed and gently pressed, the juice is transferred to stainless steel tanks for fermentation under controlled conditions. Throughout this process, the fermentation temperature is carefully managed to maintain the fresh fruit aromas and the distinct characteristics of the grape variety." },
                    { text: "The winemaker focuses on retaining the delicate fruit aromas and ensuring that the natural sugars remain intact, which are vital for creating the semi-sweet profile of the wine." },
                    { text: "This stainless steel fermentation method results in a bright, clean wine that showcases the natural fruit flavors and subtle floral notes of the Rkatsiteli grape, all while maintaining a balanced, smooth sweetness on the palate." }
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    {
                        name: "Aroma & Palate",
                        text: "The wine opens with a fragrant mix of ripe stone fruits like peach, apricot, and pear, beautifully complemented by soft floral hints of white blossoms and a touch of honey. A light citrus note enhances the bouquet, offering an extra layer of freshness. On the palate, it showcases a smooth and velvety texture, with flavors of juicy peach, apricot, and green apple, intertwined with a light citrus zest. The semi-sweet profile is perfectly balanced with the wine’s fresh acidity, creating a harmonious and refreshing experience."
                    },
                    {
                        name: "Style",
                        text: "This is a well-balanced, semi-sweet white wine with a light to medium body. The fruit-forward sweetness is offset by a crisp acidity, making it easy to enjoy and versatile enough to pair with a variety of dishes, offering an approachable choice for many wine lovers."
                    },
                    {
                        name: "Acidity & Finish",
                        text: "The wine features a moderate acidity that cuts through the richness of the fruit, ensuring a clean, lively finish. The slight acidity enhances the overall freshness, preventing the sweetness from feeling too heavy. The finish is smooth and lingering, leaving behind a subtle honeyed sweetness and a delicate citrus note that refreshes the palate."
                    },
                    {
                        name: "Tannins",
                        text: "As a semi-sweet white wine, the presence of tannins is minimal, allowing the smooth texture and fruit-forward character to take center stage. There are no harsh tannins, ensuring a soft, easy-drinking experience."
                    },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    {
                        name: "Color & Appearance",
                        text: "Alazani Valley has a pale golden-yellow hue that gleams in the glass, signaling its fresh and fruity nature. The brightness of the wine’s color reflects its youthful energy and vibrant character, drawing the eye and inviting enjoyment."
                    },
                    {
                        name: "Texture & Mouthfeel",
                        text: "The texture is smooth and velvety, offering a round and pleasing mouthfeel that gently coats the palate. The semi-sweet profile contributes to a soft, rich sensation, while the crisp acidity ensures a refreshing and clean finish, keeping the experience balanced."
                    },
                    {
                        name: "Viscosity & Body",
                        text: "This wine has a medium viscosity, giving it a slightly rich but not overwhelming sensation as it moves across the palate. It’s classified as light to medium-bodied, providing a refreshing yet substantial mouthfeel that makes it easy to enjoy without feeling too heavy. The balance between richness and refreshment is a key characteristic of this wine."
                    }
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    {
                        name: "Terroir & Climate Influence",
                        text: "Alazani Valley White Semi-Sweet is produced from 100% Rkatsiteli grapes, sourced from the Tibaani Microzone in eastern Kakheti. This area is celebrated for its unique terroir, which contributes to the distinctive character and high quality of the wine. The combination of geographic and climatic factors creates ideal conditions for cultivating grapes with remarkable acidity and flavor."
                    },
                    {
                        name: "Vineyard Location & Soil Composition",
                        text: "The vineyards are positioned at 360 meters above sea level, on gentle slopes that ensure optimal sun exposure and excellent drainage. These natural features help prevent waterlogging of the vines while promoting the development of concentrated, flavorful grapes. The soil is rich in minerals, supporting the vines and imparting a fresh, mineral-driven complexity to the wine."
                    },
                    {
                        name: "Temperature & Growing Conditions",
                        text: "With an average growing season temperature of 23-25°C, the Tibaani microzone benefits from warm days and cool nights, allowing the grapes to ripen fully while preserving their natural acidity. This temperature variation is essential for maintaining the vibrant flavors and crispness of the wine, resulting in a well-balanced, semi-Sweet profile."
                    }
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    {
                        name: "Chicken with Fruit Sauces",
                        text: "Try pairing this wine with roasted chicken in a fruit sauce, like apricot or peach. The wine's profile enhances the natural sweetness of the sauce and complements the savory chicken."
                    },
                    {
                        name: "Salads",
                        text: "For salads, Alazani Valley complements vibrant, citrus-infused dressings or those with fruit accents. A refreshing mix of mandarin oranges, fresh greens, and tangy feta cheese, topped with a honey-mustard vinaigrette, matches the wine’s natural sweetness and crispness. This creates a perfect balance of flavors and textures."
                    },
                    {
                        name: "Asian Fare",
                        text: "The semi-sweet characteristics of this wine also pair well with Asian dishes that offer a hint of spice or sweetness. Think along the lines of sweet chili chicken, Thai green curry, or even teriyaki salmon. The wine’s fruity profile and slight sweetness enhance the complexity of these dishes, creating a delicious contrast."
                    },
                    {
                        name: "Starters",
                        text: "The gentle sweetness of Alazani Valley makes it a great match for a variety of appetizers, especially those with cheese. Soft cheeses like brie and camembert, paired with fruit jams or drizzled honey, elevate the wine’s fruity notes. A platter of mild charcuterie with light, cured meats also pairs harmoniously, balancing the wine's sweetness with savory flavors."
                    },
                    {
                        name: "Seafood",
                        text: "For a refreshing pairing, this wine shines alongside light seafood dishes. Try grilled shrimp, seared scallops, or sushi with a touch of sweetness. The wine’s acidity and sweetness highlight the delicate flavors of the seafood, offering a satisfying contrast that doesn’t overpower the dish."
                    }
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    {
                        name: "Optimal Temperature & Its Effects",
                        text: "Alazani Valley is best enjoyed at a temperature range of 8-10°C , which allows the wine to showcase its vibrant aromas and refreshing flavor profile. At this temperature, the wine reveals its full complexity, offering a crisp and invigorating experience, especially ideal for pairing with light meals or enjoying on a warm day."
                    },
                    {
                        name: "Best Chilling Practices",
                        text: "To reach the perfect temperature, it is recommended to chill the bottle for about 2-3 hours in the refrigerator. Alternatively, an ice bucket can be used for 20-30 minutes for a quicker chill. Both methods help maintain the wine’s freshness while avoiding over-chilling, which can suppress its aromatic richness."
                    },
                    {
                        name: "How Temperature Affects the Experience",
                        text: "Serving the wine too cold may dampen its fragrance, leaving the subtler notes less noticeable. On the other hand, if it’s served too warm, the wine’s sweetness may become more pronounced, making it feel heavier. Maintaining the ideal temperature ensures a balanced and pleasurable tasting experience."
                    },
                    {
                        name: "Glassware & Presentation",
                        text: "To best enjoy Alazani Valley, use a tulip-shaped wine glass that concentrates the aromas, enhancing the tasting experience. The clear presentation of the wine’s pale color in a suitable glass adds to the overall appeal, making the experience visually as well as sensorially enjoyable."
                    },
                ]
            }
        ]
    },
    {
        id: 6,
        name: 'Saperavi',
        type: WINE_TYPE.RED,
        subtype: 'Red Dry Wine',
        grape: 'Saperavi',
        alcohol: '13-14%',
        region: 'Kakheti, Georgia',
        terroir: 'Tibaani Microzone',
        style: 'Classic',
        vinification: 'Stainless Steel Tanks',
        imgName: 'saperavi',
        tastingTemp: '16-18°C',
        desc: 'Red dry wine - Saperavi , made from the best bunches of Saperavi grape varieties grown in Kakheti, Tibaani, has a dark purple colour and is distinguished by the aroma of young, black fruits and berries (cherries, blackberries); wine is characterized by well-defined tannins and long endings.',
        detailedInfo: [
            {
                name: "Vinification",
                subItems: [
                    { text: "he production of Saperavi is carefully executed to highlight the distinctive qualities of this esteemed grape variety. Crafted exclusively from 100% Saperavi grapes, the wine originates from the renowned Tibaani Microzone, an area celebrated for its exceptional terroir that nurtures high-quality viticulture. The grapes are handpicked at peak ripeness to ensure optimal flavor concentration and balance." },
                    { text: "Once harvested, the grapes are delicately crushed to extract their rich juices before undergoing fermentation in stainless steel tanks. This technique is specifically chosen to preserve the wine’s vibrant fruit character and crisp acidity. Throughout fermentation, precise temperature control is maintained to maximize the extraction of deep color, complex tannins, and aromatic intensity from the grape skins, resulting in a bold and expressive wine." },
                    { text: "This meticulous approach to winemaking produces a structured and refined dry red wine that fully embodies the richness and depth of the Saperavi grape." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    {
                        name: "Aroma & Palate",
                        text: "Saperavi offers an alluring and multi-layered aromatic profile, where deep, ripe dark fruits such as blackberries, cherries, and plums take center stage. These fruit-forward notes are complemented by delicate hints of black pepper, warm spices, and subtle earthy nuances. Floral accents, reminiscent of violets, add a refined and elegant dimension to the bouquet. On the palate, the wine is bold and structured, delivering a rich medley of dark fruit flavors intertwined with subtle undertones of dark chocolate and a whisper of vanilla."
                    },
                    {
                        name: "Style",
                        text: "This Saperavi is a robust dry red wine that embodies the power and elegance of its varietal. True to traditional Georgian winemaking, it reflects the essence of the Tibaani Microzone, where the unique terroir enhances its depth and character. Crafted with precision, the wine maintains a perfect balance between intensity and refinement."
                    },
                    {
                        name: "Acidity & Finish",
                        text: "The vibrant acidity in this wine plays a crucial role in maintaining its freshness and brightness. This crisp acidity cuts through the richness, making it lively and well-balanced. As the wine lingers on the palate, it leaves a lasting impression with a persistent finish marked by deep fruit flavors and subtle mineral undertones. The structured acidity also makes this wine an excellent choice for pairing with a variety of dishes."
                    },
                    {
                        name: "Tannins",
                        text: "Firm yet silky tannins define the texture of this Saperavi, adding structure and complexity to the wine. These well-integrated tannins enhance its aging potential while ensuring that it remains approachable in its youth. The tannin profile seamlessly harmonizes with the fruit and acidity, contributing to a smooth, well-rounded mouthfeel that invites further enjoyment."
                    },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    {
                        name: "Color & Appearance",
                        text: "Saperavi exhibits a profound, almost impenetrable dark red hue, reflecting its rich concentration and depth. Its deep, nearly opaque shade is complemented by subtle purple undertones, hinting at the wine’s bold character and aging potential. When poured into a glass, it showcases remarkable clarity, free from sediment, emphasizing the precision of its vinification. The vibrancy of its color further enhances its visual appeal, conveying a sense of intensity and refinement."
                    },
                    {
                        name: "Texture & Mouthfeel",
                        text: "The wine’s texture is notably smooth and enveloping, with a luxurious feel on the palate. Its firm tannins provide structure, while the well-balanced acidity ensures a lively and harmonious drinking experience. This seamless integration of elements results in a refined yet powerful mouthfeel that lingers pleasantly."
                    },
                    {
                        name: "Viscosity & Body",
                        text: "Saperavi demonstrates a medium to high viscosity, evident when swirled in the glass. The way it clings to the sides, forming slow-moving legs, hints at its richness and moderate alcohol content. This characteristic contributes to its silky, full-bodied nature, which gives it a commanding presence on the palate. The wine’s weight is substantial yet elegant, striking a perfect balance between intensity and drinkability."
                    }
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    {
                        name: "Terroir & Climate Influence",
                        text: "Saperavi thrives in the distinguished Tibaani Microzone, an area renowned for its exceptional terroir shaped by a harmonious blend of climate, soil composition, and centuries-old winemaking traditions. This indigenous grape variety is deeply embedded in Georgian viticultural heritage, with the environment playing a crucial role in defining its bold character. The region benefits from a mix of continental and Mediterranean climatic elements, ensuring optimal ripening while maintaining the natural vibrancy of the fruit. Warm summers provide ample sunshine for grape maturation, while the cooling nighttime breezes help retain freshness and acidity, contributing to a well-structured and expressive wine."
                    },
                    {
                        name: "Vineyard Location & Soil Composition",
                        text: "The vineyards of the Tibaani Microzone are strategically positioned at elevations ranging between 360 meters above sea level, where gently sloping terrains encourage efficient drainage and airflow. These natural conditions prevent excessive moisture retention, reducing disease risks and promoting the healthy growth of vines. offering both excellent drainage and a rich mineral content. These soil properties allow deep root penetration, enabling vines to absorb vital nutrients that add layers of complexity and structure to the wine."
                    },
                    {
                        name: "Temperature & Growing Conditions",
                        text: "Throughout the growing season, the region experiences warm daytime temperatures, typically fluctuating between 25°C to 30°C This warmth facilitates even ripening, enhancing the grape’s sugar accumulation and flavor concentration. However, the cooler nights, particularly leading up to harvest, play a pivotal role in preserving acidity and aroma development. This significant temperature contrast results in a refined balance between fruit intensity and freshness, ensuring that Saperavi from this microzone expresses both richness and vibrancy in every sip."
                    }
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    {
                        name: "Hearty Meat Dishes",
                        text: "Saperavi’s bold character and firm tannins make it a perfect companion for rich, flavorful meats. Slow-cooked lamb shanks, braised short ribs, or a well-seasoned duck breast pair beautifully with the wine, as its depth enhances the savory qualities of the meat while providing a pleasant contrast to its natural fats."
                    },
                    {
                        name: "Smoky & Spiced Cuisine",
                        text: "The deep fruit flavors and subtle spice notes in Saperavi complement dishes with smoky or peppery profiles. Spiced sausages, smoked brisket, or grilled pork with a chili glaze bring out the wine’s layered complexity, making each bite and sip a well-balanced experience."
                    },
                    {
                        name: "Aged & Nutty Cheeses",
                        text: "Mature cheeses with a firm texture and nutty characteristics, such as Parmesan, Manchego, or aged Asiago, create a wonderful harmony with Saperavi’s tannic structure. The wine’s acidity refreshes the palate while its dark fruit notes add contrast to the deep, savory flavors of the cheese."
                    },
                    {
                        name: "Roasted Vegetables & Herbaceous Dishes",
                        text: "Vegetarian options like charred eggplant, roasted red peppers, or herb-infused lentil stew can also pair beautifully with Saperavi. The wine’s robust profile stands up to the caramelized flavors of roasted vegetables while its acidity highlights the freshness of aromatic herbs such as rosemary, thyme, and basil."
                    }
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    {
                        name: "Optimal Temperature & Its Effects",
                        text: "To fully appreciate Saperavi’s depth and complexity, it is best served between 16°C and 18°C. At this temperature range, the wine reveals its rich bouquet of dark fruits, spice, and subtle earthy nuances while maintaining a silky mouthfeel and well-integrated tannins."
                    },
                    {
                        name: "Best Chilling Practices",
                        text: "If the wine is stored at room temperature, placing it in the refrigerator for about 20-30 minutes before serving helps achieve the ideal temperature. Avoid over-chilling, as serving it too cold can suppress its vibrant flavors and aromas. On the other hand, if the wine is too warm, placing it in a cooler space for a short period will help restore its balance."
                    },
                    {
                        name: "How Temperature Affects the Experience",
                        text: "Serving Saperavi below 16°C can lead to a more closed-off profile, where the fruit notes become subdued, and the tannins feel firmer, making the wine taste slightly harsh. If it is too warm (above 18°C), the alcohol may become more pronounced, overshadowing the fruit and disrupting the wine’s elegant balance. Finding the right temperature ensures a smooth, harmonious drinking experience."
                    },
                    {
                        name: "Glassware & Presentation",
                        text: "To enhance Saperavi’s full-bodied nature, use a large-bowled glass that allows for proper aeration and directs the aromas toward the nose. Decanting the wine for at least 30 minutes before serving will help soften the tannins and unlock its complex flavor layers, making each sip more expressive and enjoyable."
                    },
                ]
            }
        ]
    },
    {
        id: 7,
        name: 'Mukuzani',
        type: WINE_TYPE.RED,
        subtype: 'Red Dry Wine',
        grape: 'Saperavi',
        alcohol: '13-14%',
        region: 'Kakheti, Georgia',
        terroir: 'Mukuzani Microzone',
        style: 'Classic',
        vinification: 'Stainless Steel Tanks',
        imgName: 'mukuzani',
        tastingTemp: '16-18°C',
        desc: 'Thee appellation of origin, red dry wine - Mukuzani is made from the Saperavi grapes grown in Kakheti, Mukuzani. Characterized by a dark purple colour. Features strong extracts & a subtle, complex bouquet of ripe cherries, black currants & berries',
        detailedInfo: [
            {
                name: "Vinification",
                subItems: [
                    { text: "Mukuzani is crafted using carefully handpicked Saperavi grapes from the esteemed Mukuzani microzone. The winemaking journey starts with fermentation in temperature-regulated stainless steel tanks, ensuring optimal control over the development of rich fruit-forward flavors. After fermentation, the wine undergoes a maturation process in French oak barrels for no less than twelve months. This aging period enriches the wine with intricate layers of warm spices, vanilla, and a delicate smokiness, while refining its tannic structure and depth. The end result is a well-rounded, full-bodied red wine that elegantly integrates fruit, oak influence, and a solid tannin profile." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    {
                        name: "Aroma & Palate",
                        text: "Mukuzani captivates the senses with an opulent aromatic profile featuring notes of ripe blackberries, succulent plums, and juicy cherries, gracefully intertwined with whispers of vanilla, oak, and gentle spices. As the wine breathes, subtle hints of dried herbs, leather, and tobacco unfold, adding an extra dimension of complexity. The palate is equally expressive, presenting layers of dark chocolate, warming spices, and a touch of earthiness that complement the rich fruit essence."
                    },
                    {
                        name: "Style",
                        text: "This wine is a bold, dry red that showcases the full potential of Saperavi grapes. It delivers a remarkable interplay between fruit intensity, structured tannins, and well-integrated oak aging, embodying the essence of the Mukuzani terroir."
                    },
                    {
                        name: "Acidity & Finish",
                        text: "A lively acidity underpins the wine, keeping the fruit components vibrant and ensuring a well-balanced structure. The finish is enduring and elegant, with prolonged notes of oak spice, dark berries, and a refined touch of earthiness."
                    },
                    {
                        name: "Tannins",
                        text: "Mukuzani features a firm tannic backbone that is softened by careful oak aging, lending the wine a velvety texture. The tannins provide a gentle grip on the palate, adding to the wine’s ability to age gracefully over time."
                    },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    {
                        name: "Color & Appearance",
                        text: "Mukuzani presents a deep, intense ruby hue with shades nearing inky purple. This rich color saturation is indicative of the wine’s concentrated nature, revealing its bold character. As it matures, delicate garnet reflections may appear along the edges, hinting at its evolving complexity."
                    },
                    {
                        name: "Texture & Mouthfeel",
                        text: "The texture of Mukuzani is smooth and enveloping, providing a luxurious feel on the palate. The extended aging in oak enhances its silkiness, creating a wine that is both rich and polished."
                    },
                    {
                        name: "Viscosity & Body",
                        text: "Displaying a medium-high viscosity, Mukuzani leaves pronounced legs in the glass, highlighting its structured body. The interplay of alcohol content and oak aging contributes to its weighty, full-bodied presence, making it a compelling wine with great depth."
                    }
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    {
                        name: "Terroir & Climate Influence",
                        text: "Mukuzani originates from the renowned Mukuzani microzone in Georgia’s Kakheti region, an area recognized for its exceptional winemaking conditions. The region's combination of distinct soil compositions, favorable climate, and geographical advantages produces wines with impressive depth, structure, and longevity. Warm summers and cool winters define the climate, ensuring optimal grape ripening."
                    },
                    {
                        name: "Vineyard Location & Soil Composition",
                        text: "The vineyards lie at elevations ranging between 350–500 meters, positioned on gently sloping terrains that maximize sunlight exposure. The soils are a blend of limestone, clay, and alluvial deposits, offering excellent drainage and nutrient retention. The limestone contributes to the wine’s characteristic minerality, while the clay enhances its robust body."
                    },
                    {
                        name: "Temperature & Growing Conditions",
                        text: "During the growing season, daytime temperatures range between 25-30°C (77-86°F), encouraging the development of deep fruit concentration. The cooler nighttime temperatures help preserve the natural acidity of the grapes, ensuring balance and freshness in the final wine. Moderate rainfall throughout the year provides sufficient hydration without overwhelming the vines, allowing for well-structured grape clusters."
                    }
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    {
                        name: "Cheese Pairings",
                        text: "To bring out the best in Mukuzani, pair it with well-matured cheeses that offer a bold and nutty profile. Hard cheeses like Pecorino Romano, aged Gouda, or extra-sharp Cheddar create an intriguing contrast with the wine’s acidity and firm tannins, delivering a perfectly balanced tasting experience."
                    },
                    {
                        name: "Earthy & Savory Delights",
                        text: "Mukuzani pairs beautifully with dishes that highlight umami and earthy characteristics. Savory mushroom ragù, truffle-infused pasta, or a hearty lentil and vegetable stew can all benefit from the wine’s nuanced depth, making for a satisfying and well-rounded pairing."
                    },
                    {
                        name: "Barbecue & Smoked Meats",
                        text: "The smoky, spicy, and slightly charred notes of barbecued meats are enhanced by Mukuzani’s oak aging and dark berry undertones. Whether it’s slow-cooked brisket, smoked pork ribs, or grilled sausages, the wine’s complexity brings out the best in these dishes."
                    },
                    {
                        name: "Dark Chocolate Desserts",
                        text: "For an unconventional but delightful pairing, try Mukuzani with dark chocolate-based desserts like flourless chocolate cake, bittersweet chocolate mousse, or chocolate-covered espresso beans. The wine’s dark fruit notes and tannins contrast beautifully with the bitterness of high-cocoa chocolate, creating a sophisticated finish."
                    },
                    {
                        name: "Grilled Vegetables & Roasted Nuts",
                        text: "For plant-based pairings, Mukuzani shines alongside fire-roasted eggplant, bell peppers, and zucchini. Its earthy notes also make it a great match for toasted walnuts, almonds, or hazelnuts, enhancing the wine’s depth with a nutty complexity."
                    }
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    {
                        name: "Optimal Temperature & Its Effects",
                        text: "To bring out Mukuzani’s full spectrum of flavors and aromas, serve it at a temperature of 16°C to 18°C . This range allows the wine’s rich fruit characteristics, oak influences, and structured tannins to harmonize without any element overpowering the other."
                    },
                    {
                        name: "Best Chilling Practices",
                        text: "If stored at room temperature, placing the bottle in a refrigerator for around 20-30 minutes before serving can help reach the ideal serving temperature. Over-chilling can mute the wine’s vibrant flavors, while serving it too warm may accentuate the alcohol, disrupting its balance."
                    },
                    {
                        name: "How Temperature Affects the Experience",
                        text: "If Mukuzani is served below 16°C, its tannins may feel harsher, and the fruit expression may seem subdued. Conversely, if the temperature exceeds 18°C, the alcohol may dominate, overshadowing the wine’s nuanced complexity. Serving within the recommended range ensures a smooth, well-integrated drinking experience."
                    },
                    {
                        name: "Glassware & Presentation",
                        text: "To maximize Mukuzani’s aromatic profile, use a large-bowled red wine glass that allows ample room for aeration. Decanting the wine for at least 30 minutes before serving will enhance its depth, softening the tannins and unveiling its intricate layers of flavor. This extra step significantly elevates the overall tasting experience."
                    },
                ]
            }
        ]
    },
    {
        id: 8,
        name: 'Kindzmarauli',
        type: WINE_TYPE.RED,
        subtype: 'Red Semi-Sweet Wine',
        grape: 'Saperavi',
        alcohol: '13-14%',
        region: 'Kakheti, Georgia',
        terroir: 'Kindzmarauli Microzone',
        style: 'Classic',
        vinification: 'Stainless Steel Tanks',
        imgName: 'kindzmarauli',
        tastingTemp: '12-14°C',
        desc: 'The appellation of Origin, red, semi-sweet wine - Kindzmarauli is made from Saperavi grape variety grown in Kakheti region, Kindzmarauli microzone. Characterized by dark burgundy hue. Distinguished with a well-expressed varietal aroma, cherry and blackberry tones. Has a velvety, harmonious, balanced taste.',
        detailedInfo: [
            {
                name: "Vinification",
                subItems: [
                    { text: "Kindzmarauli is produced from handpicked Saperavi grapes, sourced from the prestigious Kindzmarauli microzone. The winemaking journey starts with gently pressing the grapes to retain their natural fruity qualities. Fermentation occurs in stainless steel containers under tightly controlled temperatures, which preserves the fresh, fruity essence of the grapes. The fermentation is halted prior to the complete conversion of sugars, maintaining a semi-sweet taste that strikes a perfect balance between richness and acidity. This approach ensures that the wine retains its inherent sweetness while showcasing the deep and complex flavors typical of Saperavi from this distinguished region." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    {
                        name: "Aroma & Palate",
                        text: "The aroma of Kindzmarauli greets with rich notes of ripe berries, predominantly blackberries and cherries, mingled with delicate hints of plum and a touch of dark chocolate. Subtle floral nuances of violets and a dash of spice add complexity to the fragrance. On the palate, the wine offers a soft sweetness that is beautifully counterbalanced by lively acidity. The taste profile is dominated by dark fruits like blackcurrants and raspberries, complemented by layers of cocoa and vanilla, a result of its maturation process."
                    },
                    {
                        name: "Style",
                        text: "Kindzmarauli stands out with a harmonious balance, offering the fullness of Saperavi's character while maintaining a refreshing lightness. Its semi-sweet nature allows it to adapt well to various settings, appealing to both casual drinkers and seasoned wine enthusiasts alike."
                    },
                    {
                        name: "Acidity & Finish",
                        text: "The wine’s acidity is finely integrated, providing a crisp backbone that supports its sweet profile. The finish is long and smooth, leaving a memorable aftertaste of dark fruits and a gentle spice. The warmth of the alcohol elevates the overall experience, encouraging another sip."
                    },
                    {
                        name: "Tannins",
                        text: "The tannins are soft and velvety, enhancing the wine’s structure without overwhelming the palate. Their subtle presence provides a layer of depth that contributes to the overall elegance of the wine, making it easy to enjoy."
                    },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    {
                        name: "Color & Appearance",
                        text: "Kindzmarauli displays a rich, deep ruby red hue, signaling its intensity and concentration. The vibrant color reflects the ripe fruit characteristics typical of Saperavi grapes."
                    },
                    {
                        name: "Texture & Mouthfeel",
                        text: "The texture is smooth and luxurious, creating a velvety sensation on the palate. Its semi-sweet nature lends a plush feel, while the balanced acidity ensures a refreshing finish with every sip."
                    },
                    {
                        name: "Viscosity & Body",
                        text: "The wine has a medium viscosity that can be observed when it is swirled in the glass. This viscosity hints at the wine’s depth and richness, characteristics of a well-crafted semi-sweet wine. With a medium to full body, Kindzmarauli offers a satisfying presence that adds to its overall appeal."
                    }
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    {
                        name: "Terroir & Climate Influence",
                        text: "Sourced from the Kindzmarauli Micro Zone, this wine benefits from the region’s unique terroir, which imparts distinctive flavors and aromatic qualities to the Saperavi grapes. The local climate, with its hot summers and mild winters, provides the perfect environment for the grapes to fully ripen, contributing to the wine’s rich taste and well-rounded acidity."
                    },
                    {
                        name: "Vineyard Location & Soil Composition",
                        text: "The vineyards are located at an elevation of around 400-600 meters above sea level, with slopes that ensure optimal exposure to sunlight, crucial for the maturation of the grapes. The soils in this region are rich in clay and loam, which support healthy vine growth and provide essential nutrients. These soils also allow for good drainage, promoting deep root development and enhancing the concentration of flavors in the grapes."
                    },
                    {
                        name: "Temperature & Growing Conditions",
                        text: "The average temperatures during the growing season are ideal, ranging from 25°C to 30°C (77°F to 86°F), creating the perfect conditions for Saperavi grapes to ripen. The temperature fluctuation between day and night preserves the acidity of the grapes while promoting the development of deep, fruity flavors, which is key to achieving a semi-sweet wine with balance and elegance."
                    }
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    {
                        name: "Desserts",
                        text: "This wine is perfect for accompanying sweet treats. Its semi-sweet nature makes it an ideal companion for a variety of desserts, such as fruit-based pastries, creamy cheesecakes, or rich tiramisu. The combination of sweet and fruity flavors enhances the dessert’s profile, making for a satisfying finish to any meal."
                    },
                    {
                        name: "Spicy Dishes",
                        text: "For those who enjoy a bit of heat, Kindzmarauli is an excellent choice to balance spicy flavors. The wine’s gentle sweetness can mellow the intensity of dishes like spicy chili, paprika-heavy stews, or even bold Indian curry. The fruitiness helps round out the heat, offering a well-balanced taste experience."
                    },
                    {
                        name: "Cheeses",
                        text: "Kindzmarauli works beautifully with a selection of cheeses, particularly those that have a creamy texture or complex flavors. Pair it with soft cheeses like fresh mozzarella or tangy goat cheese. Aged cheeses, such as Pecorino or Manchego, can provide an intriguing contrast to the wine's semi-sweet profile, making the pairing even more delightful."
                    },
                    {
                        name: "Vegetarian Dishes",
                        text: "This wine also works well with hearty vegetable dishes, such as roasted vegetables with balsamic glaze or stuffed mushrooms with herbs, creating a balance between the wine's sweetness and the savory vegetables."
                    }
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    {
                        name: "Optimal Temperature & Its Effects",
                        text: "The ideal serving temperature for Kindzmarauli is between 10°C and 12°C . Serving it at this temperature helps to accentuate its vibrant fruit flavors while maintaining the perfect balance of sweetness and acidity."
                    },
                    {
                        name: "Best Chilling Practices",
                        text: "To achieve the optimal serving temperature, chill the bottle in the refrigerator for 1-2 hours before serving. This allows the wine to reach the ideal coolness, enhancing its refreshing qualities without overwhelming the palate with excessive coldness."
                    },
                    {
                        name: "How Temperature Affects the Experience",
                        text: "When served slightly chilled, Kindzmarauli offers a more refreshing taste, allowing the fruity and floral aromas to emerge. This temperature helps retain the wine’s crispness and ensures that it is neither too warm nor too cold, making the drinking experience more enjoyable."
                    },
                    {
                        name: "Glassware & Presentation",
                        text: "For the best experience, serve Kindzmarauli in tulip-shaped glasses, which help concentrate its aromas and allow the drinker to fully appreciate its complex fragrance. A wine thermometer can also be used to ensure that the wine is served at the perfect temperature, further enhancing its sensory qualities."
                    },
                ]
            }
        ]
    },
    {
        id: 9,
        name: 'Cabernet',
        type: WINE_TYPE.RED,
        subtype: 'Red Dry Wine',
        grape: 'Cabernet',
        alcohol: '13-14%',
        region: 'Kakheti, Georgia',
        terroir: 'Mukuzani Microzone',
        style: 'Classic',
        vinification: 'Stainless Steel Tanks',
        imgName: 'cabernet',
        tastingTemp: '16-18°C',
        desc: 'Red dry Cabernet wine made from a French grape variety, which is grown in Georgia, is characterized by a dark purple hue.',
        detailedInfo: [
            {
                name: "Vinification",
                subItems: [
                    { text: "The process of crafting a Cabernet from the Mukuzani region is a carefully orchestrated journey that highlights the distinctive qualities of the grape. After being harvested at their peak ripeness, the grapes are gently destemmed and crushed, ensuring that the juice is extracted without damaging the integrity of the fruit. Fermentation occurs in temperature-controlled stainless steel tanks to retain the bright, fresh fruit notes typical of this varietal. Regular pump-overs during fermentation enhance the color and tannin integration, helping to create a wine with depth and complexity. Following fermentation, the wine is allowed to stay in contact with its skins for a brief period before being pressed, resulting in a structured, dry red that elegantly expresses the Mukuzani terroir." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    {
                        name: "Aroma & Palate",
                        text: "The wine opens with an alluring mix of dark berry scents, including ripe blackcurrants and rich plums, with a dash of pepper and a hint of herbs. Over time, the nose reveals deeper layers of cedar and wood, enhancing its aromatic complexity. On the palate, it is a full-bodied experience with bold, dark fruit flavors that dominate, particularly the blackcurrant and plum, balanced by subtle spice notes."
                    },
                    {
                        name: "Style",
                        text: "This Cabernet is a classic expression of the varietal, bold yet balanced. Its structure and depth suggest good aging potential, while its elegance and smoothness make it enjoyable even when young. The wine maintains a fine balance between power and finesse, allowing it to age gracefully."
                    },
                    {
                        name: "Acidity & Finish",
                        text: "The wine boasts a balanced acidity that enhances its freshness and supports its fruit profile. The finish is long and satisfying, with lingering dark fruit flavors and a trace of spice that leaves a memorable impression. The wine evolves in the glass, offering a refined, polished finish that invites another sip."
                    },
                    {
                        name: "Tannins",
                        text: "The tannins are firm but smooth, offering structure without overpowering the other elements of the wine. Their integration with the fruit and acidity ensures a harmonious mouthfeel that is approachable even in its youth. This smooth tannin structure provides the wine with a solid foundation and a satisfying drinking experience."
                    },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    {
                        name: "Color & Appearance",
                        text: "The wine displays a deep, ruby-red hue, indicative of its full-bodied nature. Its intensity in color reflects the concentration of the fruit, which is the result of careful vineyard practices and optimal ripening. The wine is clear and bright, showcasing its purity and meticulous production."
                    },
                    {
                        name: "Texture & Mouthfeel",
                        text: "The mouthfeel is velvety and smooth, providing a round and satisfying sensation on the palate. The balanced combination of acidity and tannins offers a pleasant, cohesive drinking experience, allowing the fruit and spice to shine through effortlessly."
                    },
                    {
                        name: "Viscosity & Body",
                        text: "The wine has a moderate to high viscosity, with legs that slowly descend the glass, indicating its richness and higher alcohol content. The body is full and substantial, offering a weighty presence that stands out while remaining graceful on the palate."
                    }
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    {
                        name: "Terroir & Climate Influence",
                        text: "The Mukuzani region, nestled in Georgia’s Kakheti province, offers an exceptional terroir for cultivating Cabernet. The warm continental climate provides ideal conditions for long grape ripening, allowing the development of complex flavors. This climate, with its hot summers and cold winters, contributes to the wine’s vibrant acidity and fruit-forward profile."
                    },
                    {
                        name: "Vineyard Location & Soil Composition",
                        text: "Situated at an altitude of 500 to 600 meters above sea level, the Mukuzani vineyards benefit from gentle slopes that improve air circulation and support the vines’ growth. The soil is rich in clay and limestone, known for its excellent drainage properties, which allows the vines to produce concentrated, flavorful grapes."
                    },
                    {
                        name: "Temperature & Growing Conditions",
                        text: "The vineyards experience a wide range of temperatures throughout the growing season, with warm days and cool nights, providing the perfect environment for preserving the grapes’ acidity while allowing for rich, concentrated flavors. These fluctuations in temperature help to create a balanced wine with both freshness and depth."
                    }
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    {
                        name: "Decadent Desserts",
                        text: "Dark chocolate desserts, like flourless chocolate cake, chocolate truffles, or dark chocolate mousse, are perfect companions for Cabernet. The wine’s dark fruit flavors and subtle spice notes mesh beautifully with the bittersweet qualities of dark chocolate, creating a luxurious finish."
                    },
                    {
                        name: "Meat Dishes",
                        text: "The intensity of Cabernet Sauvignon makes it an ideal companion for hearty grilled meats, including lamb, beef, and pork. Its rich tannin structure helps to balance the smoky, charred elements of these meats, while the wine’s acidity contrasts the fatty richness, ensuring a well-rounded dining experience."
                    },
                    {
                        name: "Cheeses",
                        text: "Cabernet pairs wonderfully with strong, aged cheeses like blue cheese, aged Gouda, and sharp cheddar. The wine’s bold character complements the rich, tangy flavors of these cheeses, creating a delightful contrast and enhancing the overall taste."
                    },
                    {
                        name: "Vegetable Dishes",
                        text: "For an interesting pairing, try Cabernet with roasted root vegetables or dishes featuring earthy flavors such as mushrooms or squash. The wine’s depth and structure enhance the natural sweetness and savory notes of these vegetables, offering a delightful contrast."
                    }
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    {
                        name: "Optimal Temperature & Its Effects",
                        text: "To experience the full potential of this Cabernet, it should be served at a temperature of 16-18°C  This range allows the wine to showcase its nuanced aromas and flavors, enhancing the overall drinking experience by promoting its balance and smoothness."
                    },
                    {
                        name: "Best Chilling Practices",
                        text: "If the wine is slightly too warm, a brief chill of 10-15 minutes in an ice bucket will help bring it to the perfect temperature without dulling the flavors. Be cautious not to over-chill, as this can mute the wine’s complexity and fruit character."
                    },
                    {
                        name: "How Temperature Affects the Experience",
                        text: "Serving Cabernet at the proper temperature is crucial for unlocking its full range of aromas, from the dark fruit and spice notes to the subtle herbal undertones. A wine that is too warm will emphasize alcohol, while one that is too cold may mask its depth and complexity, making the right temperature key to a rewarding tasting experience."
                    },
                    {
                        name: "Glassware & Presentation",
                        text: "For the best presentation, serve the wine in a large, tulip-shaped glass that allows the aromas to gather at the top. The shape of the glass also facilitates proper aeration, helping the wine open up and reveal its full complexity. Decanting the wine for about 30 minutes before serving can also improve the tasting experience, allowing the wine to breathe and soften its tannins."
                    },
                ]
            }
        ]
    },
    {
        id: 10,
        name: 'Pirosmani',
        type: WINE_TYPE.RED,
        subtype: 'Red Semi-Dry Wine',
        grape: 'Saperavi',
        alcohol: '13-14%',
        region: 'Kakheti, Georgia',
        terroir: 'Tibaani Microzone',
        style: 'Classic',
        vinification: 'Stainless Steel Tanks',
        imgName: 'pirosmani-red',
        tastingTemp: '12-14°C',
        desc: 'Red semi-dry wine - Pirosmani , made from the Saperavi grape variety grown in Kakheti, Tibaani. Distinguished by dark pomegranate colour. Characterized by rich variety, sharply expressed red fruit aromas, cherry tones, and pure taste',
        detailedInfo: [
            {
                name: "Vinification",
                subItems: [
                    { text: "Pirosmani is crafted with precision, using advanced techniques in stainless steel fermentation vessels. This approach preserves the fresh and vibrant fruity qualities of the Saperavi grapes while ensuring optimal acidity. Sourced from the renowned Tibaani microzone. The Saperavi grapes undergo meticulous selection and destemming before fermentation. The temperature-controlled fermentation process in stainless steel ensures the retention of the wine’s natural aromas. After fermentation, the wine is left to mature in the same tanks, allowing the flavors to meld and develop, while maintaining its semi-dry profile. The final product is a well-balanced wine that showcases the true essence of the Saperavi variety." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    {
                        name: "Aroma & Palate",
                        text: "Pirosmani greets the senses with a rich bouquet of dark fruits like blackberry, plum, and cherry, enriched with delicate floral and spicy undertones. On the palate, the wine is medium-bodied, offering a balanced blend of fruit sweetness and a touch of chocolate, complemented by subtle oak nuances."
                    },
                    {
                        name: "Style",
                        text: "This semi-dry red wine is both approachable and versatile, ideal for casual sipping or pairing with food. Its balanced structure makes it an excellent choice for a variety of occasions."
                    },
                    {
                        name: "Acidity & Finish",
                        text: "With refreshing acidity, Pirosmani maintains its lively fruit profile while offering a smooth, lingering finish. The gentle sweetness fades gracefully, leaving a soft, fruity aftertaste that invites another sip."
                    },
                    {
                        name: "Tannins",
                        text: "The wine’s soft, velvety tannins contribute to its smooth texture, creating a pleasant, non-astringent drinking experience. They are well-integrated, adding to the overall harmony of the wine."
                    },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    {
                        name: "Color & Appearance",
                        text: "Pirosmani displays a deep ruby red color, a visual testament to the intense fruit character of the Saperavi grapes. Its bright clarity and brilliant hue suggest freshness and vitality, making it visually appealing."
                    },
                    {
                        name: "Texture & Mouthfeel",
                        text: "The wine offers a smooth and rounded texture, gliding easily over the palate with each sip. Its gentle mouthfeel enhances the drinking experience, making it comfortable and enjoyable."
                    },
                    {
                        name: "Viscosity & Body",
                        text: "Pirosmani shows moderate viscosity, which reflects its well-balanced structure. The wine coats the glass lightly, hinting at its medium body, making it a versatile option for different occasions."
                    }
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    {
                        name: "Terroir & Climate Influence",
                        text: "The grapes for Pirosmani are cultivated in the Tibaani microzone , an area known for its distinctive terroir. The combination of continental climate and temperature shifts between day and night helps maintain the grapes’ acidity while promoting the development of ripe, complex flavors."
                    },
                    {
                        name: "Vineyard Location & Soil Composition",
                        text: "Situated in a region with a moderate altitude, the vineyards benefit from optimal sun exposure and air circulation. The soil ensures excellent drainage, allowing the vines to thrive and produce healthy, flavorful grapes."
                    },
                    {
                        name: "Temperature & Growing Conditions",
                        text: "The temperature fluctuations between warm days and cooler nights during the growing season are key to the development of the Saperavi grapes. These conditions help maintain the delicate balance of sugars and acidity, ensuring the wine’s signature freshness and flavor complexity."
                    }
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    {
                        name: "Pasta with Rich Sauces",
                        text: "Pirosmani pairs beautifully with pasta dishes that feature robust tomato-based sauces or creamy Alfredo sauces. The acidity in the wine balances the richness of the sauce, enhancing both the pasta and the wine."
                    },
                    {
                        name: "Charcuterie and Cheese",
                        text: "For a delicious snack or appetizer, enjoy Pirosmani with a selection of cured meats like salami and prosciutto, along with cheeses such as aged cheddar or gouda. The fruitiness of the wine contrasts nicely with the saltiness of the meats and the richness of the cheeses."
                    },
                    {
                        name: "Roasted Vegetables",
                        text: "Roasted vegetables, especially root vegetables like carrots and beets, or Mediterranean vegetable dishes, make a great pairing. The wine’s structure complements the earthy flavors, creating a well-rounded dining experience."
                    },
                    {
                        name: "Desserts",
                        text: "For dessert, Pirosmani is a fantastic match with dark chocolate cakes or fruit-based desserts like cherry or raspberry tarts. The sweetness of the wine balances the richness of the chocolate and the tartness of the fruit, creating a delightful contrast."
                    }
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    {
                        name: "Optimal Temperature & Its Effects",
                        text: "Pirosmani should be served at a slightly cooler temperature than most red wines, ideally between 14-16°C . This temperature allows the wine’s aromatic complexity to emerge while maintaining its refreshing character."
                    },
                    {
                        name: "Best Chilling Practices",
                        text: "To achieve the ideal temperature, place the bottle in the refrigerator for around 30-45 minutes before serving. Alternatively, an ice bucket with water and ice for 10-15 minutes will also bring the wine to the perfect serving temperature."
                    },
                    {
                        name: "How Temperature Affects the Experience",
                        text: "Serving Pirosmani at the right temperature enhances its vibrant fruit notes and ensures a pleasant drinking experience. Too warm, and the wine may feel overly rich; too cold, and the aromas may be muted."
                    },
                    {
                        name: "Glassware & Presentation",
                        text: "For the best experience, use a standard red wine glass with a wide bowl. This allows the wine to aerate, intensifying its aromas and flavors, and provides ample space for swirling, which helps release the full range of sensory characteristics."
                    },
                ]
            }
        ]
    },
    {
        id: 11,
        name: 'Alazani Valley',
        type: WINE_TYPE.RED,
        subtype: 'Red Semi-Sweet Wine',
        grape: 'Saperavi',
        alcohol: '13-14%',
        region: 'Kakheti, Georgia',
        terroir: 'Tibaani Microzone',
        style: 'Classic',
        vinification: 'Stainless Steel Tanks',
        imgName: 'alazani-valley-red',
        tastingTemp: '12-14°C',
        desc: 'Red semi-sweet wine - Alazani Valley , made from the highest quality red grape variety-Sapervi, grown in Kakheti, Tibaani. Saperavi has a red, raspberry hue. Characterized by red and black fruit aromas and pleasant, velvety, harmonious, sweet taste.',
        detailedInfo: [
            {
                name: "Vinification",
                subItems: [
                    { text: "Alazani Valley, a semi-sweet red wine, is made entirely from the Saperavi grape variety. The grapes are meticulously handpicked at their peak of ripeness to ensure top-notch quality. After being destemmed and crushed, the resulting must is placed in stainless steel fermentation tanks. Controlled temperature fermentation helps preserve the fresh and lively characteristics of the Saperavi variety. The stainless steel tanks also prevent oxidation, keeping the wine's vibrant color and aromatic appeal intact. Following fermentation, the wine undergoes a period of maturation in these tanks, allowing the flavors to harmonize and maintain its signature semi-sweet profile. The end product is a balanced wine that truly reflects the essence of the Saperavi grape." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    {
                        name: "Aroma & Palate",
                        text: "This wine presents a bouquet of dark fruit aromas, including blackberries and cherries, interwoven with subtle floral notes. On the palate, it offers a velvety texture with luscious flavors of ripe fruits. The sweetness is gentle and integrated, enhancing the rich fruitiness without overwhelming the senses."
                    },
                    {
                        name: "Style",
                        text: "Crafted in a semi-sweet style, this wine strikes an ideal balance between sweetness and fruitiness, making it a versatile option for both casual enjoyment and food pairings."
                    },
                    {
                        name: "Acidity & Finish",
                        text: "Moderate acidity provides a refreshing quality that enhances the wine's smoothness. The finish is lasting, leaving behind a soft sweetness that gives way to a hint of spice, adding complexity and depth to the experience."
                    },
                    {
                        name: "Tannins",
                        text: "Soft, well-rounded tannins give the wine structure, offering a smooth, balanced mouthfeel that supports the wine’s fruit-forward character."
                    },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    {
                        name: "Color & Appearance",
                        text: "Alazani Valley boasts a bright, ruby red hue that glimmers in the glass, signaling the wine’s youthful vibrancy. It’s clear and inviting, with no visible sediment, showcasing its freshness."
                    },
                    {
                        name: "Texture & Mouthfeel",
                        text: "The wine’s texture is silky and smooth, with a light, pleasing mouthfeel that coats the palate gently. Its soft sweetness harmonizes with the fruit flavors, creating a satisfying and enjoyable drinking experience."
                    },
                    {
                        name: "Viscosity & Body",
                        text: "With a medium viscosity, Alazani Valley flows elegantly in the glass, leaving slow-moving legs that highlight its slightly sweet and rich profile. It offers a medium-bodied structure, delivering a harmonious weight on the palate without feeling overly heavy."
                    }
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    {
                        name: "Terroir & Climate Influence",
                        text: "Alazani Valley is grown in the renowned Tibaani microzone, a region known for its favorable terroir. The unique climate and soil conditions contribute significantly to the complexity and balance of the wine. "
                    },
                    {
                        name: "Vineyard Location & Soil Composition",
                        text: "The vineyards are located in the fertile Tibaani microzone at an elevation between 360 meters above sea level. This elevated position ensures optimal sun exposure and air circulation, both of which aid in the development of the grapes. The soil  providing excellent drainage and nutrients for healthy vine growth."
                    },
                    {
                        name: "Temperature & Growing Conditions",
                        text: "The varied temperatures between day and night in this region promote balanced grape ripening. The warm days accelerate the ripening process, while the cooler nights help preserve the acidity and aromatic intensity of the grapes, resulting in a well-rounded wine."
                    }
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    {
                        name: "Cheese",
                        text: "Alazani Valley complements soft, creamy cheeses such as brie or camembert, which harmonize with its sweetness. Alternatively, a sharp blue cheese can provide an interesting contrast, intensifying the wine’s rich character."
                    },
                    {
                        name: "Spicy Dishes",
                        text: "For a lively pairing, try Alazani Valley with bold, spicy foods. Dishes like Thai green curry or spicy barbecue ribs benefit from the wine’s sweetness, which helps mellow the heat while accentuating the flavors of the dish."
                    },
                    {
                        name: "Poultry",
                        text: "Grilled or roasted chicken, particularly when accompanied by fruit-based glazes like mango or berry sauces, pairs wonderfully with the wine. The subtle sweetness of the wine enhances the savory flavors, making for a well-balanced meal."
                    },
                    {
                        name: "Sweets & Desserts",
                        text: "This wine shines alongside fruity desserts such as apple tarts or citrus sorbet, where its natural sweetness complements the fresh fruit flavors. For a richer dessert pairing, consider dark chocolate truffles or a creamy vanilla custard to highlight the wine’s complexity."
                    },
                    {
                        name: "Vegetarian & Mediterranean Dishes",
                        text: "For a lighter option, try pairing the wine with grilled vegetables, particularly those roasted with herbs or drizzled with a balsamic glaze. Mediterranean dishes, such as a fresh tomato and olive salad or stuffed grape leaves, also make a great match, where the wine's sweetness pairs perfectly with the savory and tangy flavors."
                    }
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    {
                        name: "Optimal Temperature & Its Effects",
                        text: "To bring out its best characteristics, serve Alazani Valley at a chilled temperature of 8–10°C. This temperature ensures that the wine remains refreshing, with its natural sweetness balanced by its acidity."
                    },
                    {
                        name: "Best Chilling Practices",
                        text: "For the ideal serving temperature, place the bottle in the fridge for 2–3 hours before serving. Alternatively, use an ice bucket filled with ice and water for around 20–30 minutes for a quick chill."
                    },
                    {
                        name: "How Temperature Affects the Experience",
                        text: "Serving the wine chilled enhances its crispness and refreshing qualities, which amplifies its vibrant fruit flavors while softening its sweetness."
                    },
                    {
                        name: "Glassware & Presentation",
                        text: "Alazani Valley is best enjoyed in a tulip-shaped glass, which allows the wine’s aromas to concentrate at the rim. The shape of the glass helps direct the wine towards the palate for a smooth and enjoyable tasting experience."
                    },
                ]
            }
        ]
    },
    {
        id: 12,
        name: 'Rose',
        type: WINE_TYPE.ROSE,
        subtype: 'Rose Semi-Dry Wine',
        grape: 'Saperavi',
        alcohol: '13-14%',
        region: 'Kakheti, Georgia',
        terroir: 'Tibaani Microzone',
        style: 'Classic',
        vinification: 'Stainless Steel Tanks',
        imgName: 'rose',
        tastingTemp: '8-10°C',
        desc: 'Rose coloured semi-dry wine - Rose is made by the classic (European) method. The wine is characterized by a crisp pink color. Distinguished by a pleasantly sour, soft, delicate taste, with aromas of red berries and fruits',
        detailedInfo: [
            {
                name: "Vinification",
                subItems: [
                    { text: "Crafted from carefully selected grapes grown in the esteemed Tibaani microzone, our Rosé Semi-Dry Wine is produced using the traditional European winemaking method. This delicate yet expressive wine embodies a perfect harmony of freshness and fruitiness, highlighting the finest characteristics of its terroir. The result is a refined and balanced rosé, offering a delightful drinking experience for every occasion." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    {
                        name: "Aroma & Palate",
                        text: "This elegant rosé exudes an inviting bouquet of ripe red berries, intertwined with delicate floral notes and a hint of citrus zest. On the palate, it presents a well-rounded and silky texture, with vibrant acidity enhancing its crisp, refreshing nature. Layers of juicy strawberries, raspberries, and hints of watermelon create a lively yet smooth drinking experience, with a subtle mineral backbone adding depth."
                    },
                    {
                        name: "Style",
                        text: "Masterfully vinified to preserve the integrity of its fruit-forward profile, this rosé showcases a perfect balance between freshness and complexity. While embodying the finesse of classic European rosé wines, it maintains a unique Georgian identity, expressing the distinctiveness of its Tibaani microzone origin."
                    },
                    {
                        name: "Acidity & Finish",
                        text: "Bright and well-integrated acidity elevates the wine's vibrancy, creating a crisp and refreshing sensation. The finish is smooth yet lingering, leaving behind hints of red currants and wild cherries that invite another sip."
                    },
                    {
                        name: "Tannins",
                        text: "With a delicate and soft tannin structure, this rosé is exceptionally smooth and easy to drink. Its tannins are barely perceptible, allowing the wine’s natural fruit expression to shine through without any astringency."
                    },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    {
                        name: "Color & Appearance",
                        text: "A radiant pale pink hue with subtle coral reflections highlights the wine’s purity and finesse. Its crystal-clear brilliance is a testament to meticulous winemaking practices and the superior quality of the grapes."
                    },
                    {
                        name: "Texture & Mouthfeel",
                        text: "Silky and refined, this rosé glides effortlessly across the palate. Its texture is both delicate and structured, offering a well-balanced interplay between crispness and smoothness."
                    },
                    {
                        name: "Viscosity & Body",
                        text: "With a light to medium body, this wine maintains an elegant profile that is neither too heavy nor too fleeting. A refined viscosity ensures a graceful mouthfeel, enhancing the overall drinking experience."
                    }
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    {
                        name: "Terroir & Climate Influence",
                        text: "Grown in the Tibaani microzone, this rosé benefits from an ideal microclimate where warm days and cool nights enhance the development of intense aromas and balanced acidity. The region’s unique climatic conditions contribute to the wine’s freshness and expressive character."
                    },
                    {
                        name: "Vineyard Location & Soil Composition",
                        text: "Nestled in fertile valleys, the vineyards are enriched with mineral-rich soils, providing the perfect foundation for healthy vine growth. These soils play a crucial role in shaping the wine’s structure, imparting a distinctive minerality that enhances its complexity."
                    },
                    {
                        name: "Temperature & Growing Conditions",
                        text: "The moderate continental climate, characterized by optimal sunlight exposure and well-distributed rainfall, ensures a slow and even ripening process. This allows the grapes to develop their full aromatic potential while maintaining a vibrant acidity essential for a refreshing rosé."
                    }
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    {
                        name: "Mediterranean Delights",
                        text: "Pairs beautifully with fresh seafood, such as grilled shrimp, tuna tartare, or citrus-marinated salmon, enhancing their delicate flavors."
                    },
                    {
                        name: "Salads & Light Dishes",
                        text: "A fantastic match for Caprese salad, quinoa bowls, or avocado-based dishes, bringing out their fresh and herbal qualities."
                    },
                    {
                        name: "Poultry & White Meat",
                        text: "A delightful choice alongside roast chicken, turkey, or herb-crusted pork, balancing their richness with its crisp acidity."
                    },
                    {
                        name: "Soft & Aged Cheeses",
                        text: "Complements brie, goat cheese, and aged gouda, creating a harmonious interplay of textures and flavors."
                    },
                    {
                        name: "Fruity & Sweet Treats",
                        text: "Enhances the natural sweetness of strawberry tarts, peach cobbler, or honey-drizzled ricotta."
                    }
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    {
                        name: "Optimal Temperature & Its Effects",
                        text: "For the best expression of its vibrant character, this rosé should be served chilled, ideally between 10°C and 12°C. At this temperature, the wine’s fruity aromas and crisp acidity are fully preserved, providing a refreshing and enjoyable tasting experience."
                    },
                    {
                        name: "Best Chilling Practices",
                        text: "To achieve the perfect serving temperature, place the bottle in the refrigerator for at least 1.5 to 2 hours before serving. If time is limited, chilling it in an ice bucket with water and ice for 15-20 minutes ensures quick cooling without over-chilling."
                    },
                    {
                        name: "How Temperature Affects the Experience",
                        text: "Serving the wine too cold can mute its delicate fruit aromas and restrict its expressive nature. Conversely, serving it too warm may make the wine feel unbalanced, emphasizing alcohol over freshness. Striking the right temperature balance ensures a lively, nuanced, and perfectly refreshing experience."
                    },
                    {
                        name: "Glassware & Presentation",
                        text: "For optimal enjoyment, serve this rosé in a tulip-shaped wine glass, which allows its aromas to concentrate while providing ample space for the wine to aerate. This enhances both the fragrance and the overall tasting experience. When served in a casual setting, a universal white wine glass can also be used to appreciate its full aromatic profile. To maintain its freshness, it is best enjoyed within the first 1-2 years of bottling."
                    },
                ]
            }
        ]
    },
    {
        id: 13,
        name: 'Rkatsiteli Qvevri',
        type: WINE_TYPE.QVEVRI,
        subtype: 'Amber Dry Wine',
        grape: 'Rkatsiteli',
        alcohol: '12-13%',
        region: 'Kakheti, Georgia',
        terroir: 'Tibaani Microzone',
        style: 'Georgian Traditional',
        vinification: 'Qvevri',
        imgName: 'rkatsiteli-qvevri',
        tastingTemp: '12-14°C',
        desc: 'White dry wine - Rkatsiteli is made from Rkatsiteli grape variety grown in Kakheti, Tibaani, by Georgian traditional method. wine is characterized by dark straw colour. The aroma of well-known Georgian spices and dried flowers distinguishes it, where tones of dried fruits dominate, which makes the wine harmonious.',
        detailedInfo: [
            {
                name: "Traditional Winemaking Process",
                subItems: [
                    { text: "Rkatsiteli Qvevri is created using an age-old Georgian winemaking technique that relies on natural fermentation within subterranean clay vessels known as Qvevri. Carefully hand-harvested grapes are chosen for their quality before undergoing gentle crushing. The juice, along with the skins and seeds, is then placed into the Qvevri, where fermentation begins naturally." },
                    { text: "The wine remains in contact with the skins for six months, acquiring its characteristic amber hue and enhanced tannic structure. This prolonged maceration process infuses the wine with complexity, bold texture, and rich dried fruit nuances. The final result is a well-balanced interplay of fruit, acidity, and the distinctive depth that defines Qvevri-aged wines." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    {
                        name: "Aroma & Flavor Profile",
                        text: "This wine offers a captivating bouquet of dried apricots, ripe peaches, and citrus zest, accented by subtle notes of honey, roasted nuts, and delicate floral undertones. On the palate, expect a full-bodied experience with flavors of quince, gentle herbal elements, and a refined minerality that contributes to its structured finish."
                    },
                    {
                        name: "Character & Texture",
                        text: "As a dry amber wine, Rkatsiteli Qvevri is distinguished by its harmonious balance of depth and vibrancy. The prolonged skin contact and Qvevri aging yield a wine with remarkable textural complexity, making it a compelling choice for those who appreciate structured and expressive wines."
                    },
                    {
                        name: "Acidity & Finish",
                        text: "Bright, well-integrated acidity accentuates the wine’s fruit-forward nature, providing a refreshing contrast to its layered richness. The finish is long-lasting and smooth, leaving impressions of dried fruit and warm spice—hallmarks of traditional Qvevri aging."
                    },
                    {
                        name: "Tannin Structure",
                        text: "Firm yet elegantly woven tannins define this wine’s backbone, adding to its depth and aging potential. These structured tannins enhance both complexity and longevity, making it a remarkable showcase of Georgia’s traditional winemaking expertise."
                    },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    {
                        name: "Visual Appeal",
                        text: "Rkatsiteli Qvevri boasts a striking amber-gold hue, a testament to its extended skin contact. This luminous color embodies the essence of its unique winemaking process and natural transformation over time."
                    },
                    {
                        name: "Texture & Mouthfeel",
                        text: "The wine offers a rich, layered mouthfeel that balances weight with freshness. The prolonged maceration imparts a refined tannic grip, while the Qvevri aging process ensures a smooth, well-rounded texture that lingers pleasantly on the palate."
                    },
                    {
                        name: "Viscosity & Body",
                        text: "Medium to high viscosity allows the wine to cling gracefully to the glass, showcasing its density and complexity. Its full-bodied nature ensures an immersive tasting experience that leaves a lasting impression."
                    }
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    {
                        name: "Terroir & Climate Influence",
                        text: "This Rkatsiteli Qvevri originates from the Tibaani Microzone, a region celebrated for its exceptional grape-growing conditions. The warm days and cool nights contribute to slow, even ripening, preserving the grape’s natural acidity while enhancing its depth."
                    },
                    {
                        name: "Vineyard Location & Soil Composition",
                        text: "Situated at 400–500 meters above sea level, the vineyards benefit from ample sunlight exposure. The well-drained clay and limestone soils enrich the wine with mineral-driven complexity and subtle earthy undertones."
                    },
                    {
                        name: "Temperature & Growing Conditions",
                        text: "During summer, daytime temperatures peak around 30°C , with nighttime cooling to 15°C . This temperature variation ensures a balance between ripe fruit flavors and crisp acidity, contributing to the wine’s vibrant yet structured character."
                    }
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    {
                        text: "Rkatsiteli Qvevri pairs beautifully with dishes that showcase bold flavors and rich textures. Its tannic structure and depth complement braised meats such as duck or slow-cooked beef stew. Earthy dishes like truffle-infused risottos and grilled mushrooms enhance its complexity. The wine’s nutty, slightly oxidative notes also make it an excellent match for aged cheeses like Comté or Pecorino Romano. For an adventurous pairing, try it with spiced Middle Eastern cuisine, where the wine’s bright acidity cuts through warm, aromatic spices."
                    }
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    {
                        name: "Optimal Temperature & Its Effects",
                        text: "For the best expression, serve Rkatsiteli Qvevri slightly chilled, between 12°C and 14°C. This range enhances the wine’s aromatic complexity while maintaining its refreshing acidity."
                    },
                    {
                        name: "Best Chilling Practices",
                        text: "To achieve the ideal temperature, refrigerate the bottle for approximately 30–40 minutes before serving. If the wine is too cold, let it sit in the glass briefly to allow the aromas to unfold."
                    },
                    {
                        name: "How Temperature Affects the Experience",
                        text: "Serving the wine too warm may amplify its tannins, while excessive chilling may mute its intricate bouquet. The right temperature allows the wine’s layered flavors and lively acidity to shine."
                    },
                    {
                        name: "Glassware & Presentation",
                        text: "For optimal tasting, use a medium to large-sized glass with a tapered rim to concentrate its aromatic nuances. Decanting for 20–30 minutes before serving can further enhance its depth, softening the tannins and unveiling its full complexity."
                    },
                ]
            }
        ]
    },
    {
        id: 14,
        name: 'Kisi Qvevri',
        type: WINE_TYPE.QVEVRI,
        subtype: 'Amber Dry Wine',
        grape: 'Kisi',
        alcohol: '12-13.5%',
        region: 'Kakheti, Georgia',
        terroir: 'Tibaani Microzone',
        style: 'Georgian Traditional',
        vinification: 'Qvevri',
        imgName: 'kisi-qvevri',
        tastingTemp: '12-14°C',
        desc: 'White dry wine - Kisi is made from Kisi grape variety grown in Kakheti, Tibaani, by Georgian traditional method. Wine is characterized by a light amber colour. The aromas of sweet, forest fruits and spices distinguish it. A tannin-rich body blends harmoniously with its long end.',
        detailedInfo: [
            {
                name: "Traditional Winemaking Process",
                subItems: [
                    { text: "Kisi Qvevri wine is produced following Georgia’s ancient winemaking traditions, emphasizing a deep bond between the wine and its natural surroundings. After careful hand-picking, the Kisi grapes undergo a whole-cluster fermentation process in traditional Qvevris—large clay vessels embedded in the earth. The wine remains in these vessels for six months, undergoing skin contact fermentation, which is responsible for its characteristic amber hue and intricate tannic structure." },
                    { text: "Throughout this period, the grape skins and seeds interact with the juice, gradually releasing tannins, phenols, and aromatic compounds that define the wine’s unique texture and depth. This extended maceration enhances the wine’s complexity, balancing bold fruit elements with nutty nuances. Once aging is complete, the wine is carefully separated from the sediment and bottled, preserving its authentic Georgian essence and distinctive character." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    {
                        name: "Aroma & Palate",
                        text: "The bouquet of Kisi Qvevri is rich and inviting, revealing layered scents of sun-dried apricots, citrus zest, and delicate floral undertones. Deeper nuances of honey, roasted almonds, and subtle spice further enhance its aromatic complexity. On the palate, the wine delivers an intricate interplay of ripe stone fruits, herbal undertones, and a touch of resin. Earthy hints of tea leaves and a refreshing minerality contribute to its depth, creating a well-rounded and satisfying tasting experience."
                    },
                    {
                        name: "Style",
                        text: "This is an amber dry wine that reflects the traditional Georgian Qvevri winemaking approach, characterized by extended skin contact. It boasts a full-bodied, structured profile with an elegant balance of robust flavors and refined complexity."
                    },
                    {
                        name: "Acidity & Finish",
                        text: "The wine’s acidity is well-calibrated, lending freshness to its rich, textured composition. This lively acidity accentuates citrus and mineral notes, enhancing the overall vibrancy. The finish is prolonged and expressive, leaving lingering impressions of dried fruits, warm spices, and the distinctive tannic grip typical of Qvevri-aged wines."
                    },
                    {
                        name: "Tannins",
                        text: "With pronounced yet harmonious tannins, Kisi Qvevri gains structure from its prolonged skin contact. These tannins introduce a refined texture, offering a balanced grip that complements the wine’s ripe fruit character. Well-integrated, they contribute to the wine’s complexity and aging potential."
                    },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    {
                        name: "Color & Appearance",
                        text: "Kisi Qvevri showcases an alluring amber shade, a direct result of its traditional winemaking process. The wine’s deep golden hue, achieved through prolonged skin maceration, highlights its rich character and authenticity. In the glass, it presents a brilliantly clear, radiant amber tone, deepening at the core, indicative of its artisanal craftsmanship."
                    },
                    {
                        name: "Texture & Mouthfeel",
                        text: "On the palate, this wine offers a refined yet substantial mouthfeel. The texture is both velvety and structured, with a pleasant grip from the tannins. The interplay between its gentle astringency and bright acidity creates an engaging contrast, delivering an authentic and dynamic tasting experience."
                    },
                    {
                        name: "Viscosity & Body",
                        text: "With a medium to full body, Kisi Qvevri possesses a noticeable richness that is neither overpowering nor too light. When swirled, it reveals pronounced, slow-moving legs, signaling its concentration and slightly elevated alcohol content. The well-rounded structure ensures both depth and drinkability."
                    }
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    {
                        name: "Terroir & Climate Influence",
                        text: "This exceptional amber wine originates from the renowned Tibaani microzone, an area deeply rooted in Georgia’s winemaking history. The local terroir plays a crucial role in shaping the wine’s flavor and aromatic profile, with climatic conditions contributing to the distinct expression of the Kisi grape."
                    },
                    {
                        name: "Vineyard Location & Soil Composition",
                        text: "Kisi vines thrive in the gently sloping vineyards of Tibaani, situated between 360 meters above sea level. The region’s diverse soil supports vine health and enhances the wine’s complexity. Clay retains necessary moisture, ensuring vine resilience during dry spells, while limestone imparts a refined minerality to the wine."
                    },
                    {
                        name: "Temperature & Growing Conditions",
                        text: "The climate in Tibaani is predominantly continental, with warm summers and cold winters. Significant temperature variations between day and night help maintain acidity in the grapes while fostering optimal ripeness. This balance is key to developing Kisi’s distinctive aromas and depth. The region’s warm days promote intense fruit flavors, while cool evenings preserve freshness and crispness, culminating in a wine that truly embodies its terroir."
                    }
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    {
                        text: "Kisi Qvevri’s dynamic profile makes it a versatile companion for various culinary experiences."
                    },
                    {
                        name: "Herb-Infused Lamb Dishes",
                        text: "The wine’s earthy complexity and moderate tannins harmonize beautifully with lamb dishes prepared with rosemary, thyme, or mint."
                    },
                    {
                        name: "Creamy Mushroom Risotto",
                        text: "The depth of flavors and subtle nutty notes complement the umami richness of wild mushroom risotto, creating a luxurious pairing."
                    },
                    {
                        name: "Saffron-Infused Seafood Stew",
                        text: "The wine’s bright acidity and textured body contrast elegantly with the delicate yet aromatic flavors of seafood stews featuring saffron and fennel."
                    },
                    {
                        name: "Pumpkin Ravioli with Sage Butter",
                        text: "The nutty and citrusy undertones of Kisi Qvevri beautifully enhance the creamy texture and warm spice elements in this dish."
                    },
                    {
                        name: "Middle Eastern Mezze Platter",
                        text: "A selection of hummus, roasted eggplant, olives, and spiced meats pairs seamlessly with the wine’s rich mouthfeel and vibrant acidity."
                    }
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    {
                        name: "Optimal Temperature & Its Effects",
                        text: "To fully appreciate Kisi Qvevri’s nuanced aromas and complex structure, it should be served at 12°C to 14°C . This temperature range preserves its freshness while allowing its aromatic layers to unfold gradually."
                    },
                    {
                        name: "Best Chilling Practices",
                        text: "For best results, place the bottle in a wine cooler or refrigerator for about 30–40 minutes before serving. If the wine is too cold, allow it to warm slightly in the glass to enhance its expression."
                    },
                    {
                        name: "How Temperature Affects the Experience",
                        text: "Serving Kisi Qvevri too warm may emphasize its tannins and reduce its vibrancy, while over-chilling could mute its aromatic complexity. Striking the right balance ensures an optimal tasting experience, showcasing its full spectrum of flavors."
                    },
                    {
                        name: "Glassware & Presentation",
                        text: "For the best sensory experience, use a tulip-shaped or universal white wine glass, which concentrates the aromas while directing the wine smoothly onto the palate. When serving, consider decanting to allow aeration, which further enhances its depth and complexity."
                    },
                ]
            }
        ]
    },
    {
        id: 15,
        name: 'Saperavi Qvevri',
        type: WINE_TYPE.QVEVRI,
        subtype: 'Red Dry Wine',
        grape: 'Saperavi',
        alcohol: '12-13%',
        region: 'Kakheti, Georgia',
        terroir: 'Tibaani Microzone',
        style: 'Georgian Traditional',
        vinification: 'Qvevri',
        imgName: 'saperavi-qvevri',
        tastingTemp: '16-18°C',
        desc: 'Red dry wine - Saperavi is made from Saperavi grape variety grown in Kakheti, Tibaani, by the Georgian traditional winemaking method. Pomegranate colour is characteristic. Well-defined, strict but harmoniously combined fruit aromas and good taste properties distinguish it.',
        detailedInfo: [
            {
                name: "Traditional Winemaking Process",
                subItems: [
                    { text: "The crafting of Saperavi Qvevri follows a precise and traditional approach that showcases the depth and character of the Saperavi grape. Hand-selected grapes are harvested and meticulously sorted to retain only the finest quality. Once crushed, the juice and skins are transferred to age-old Qvevris, where fermentation takes place with native yeast, ensuring authenticity. The wine undergoes an extensive maceration period of seven months, allowing prolonged contact with the skins, which enhances its intense color, robust tannins, and layered flavors. After fermentation, the wine is gently pressed and returned to the Qvevris, where it undergoes further natural transformation and maturation. The subterranean Qvevris provide a stable environment, facilitating both fermentation and aging while infusing the wine with the distinctive nuances of its terroir. Once fully matured, the wine is carefully racked and bottled, preserving its heritage and purity." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    {
                        name: "Aroma & Palate",
                        text: "Saperavi Qvevri reveals an inviting aromatic profile dominated by luscious dark berries, including juicy blackberries and succulent plums. Hints of black cherry, dried herbs, and a whisper of cracked pepper add layers of complexity. On the palate, the wine offers a full-bodied and expressive experience, mirroring its aromatic depth. The interplay of dark fruits, delicate spices, and a touch of earthiness provides a harmonious balance that lingers beautifully."
                    },
                    {
                        name: "Style",
                        text: "This red dry wine embodies the essence of traditional Georgian winemaking, embracing the intrinsic power of the Saperavi grape while maintaining elegance and depth. Its structured composition ensures it can be savored now or cellared for further complexity."
                    },
                    {
                        name: "Acidity & Finish",
                        text: "The wine's bright acidity enlivens its fruit-forward profile, contributing to its dynamic character. The finish is lengthy and memorable, featuring a blend of dark fruit, spice, and a subtle mineral nuance that adds depth to the aftertaste."
                    },
                    {
                        name: "Tannins",
                        text: "The tannins in Saperavi Qvevri are firm but seamlessly woven into the structure of the wine. They provide a refined grip, adding dimension and ensuring excellent aging potential."
                    },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    {
                        name: "Color & Appearance",
                        text: "This wine showcases an intense, almost opaque purple hue with striking ruby reflections. Its deep saturation is a testament to the prolonged skin contact during fermentation. The clarity remains impeccable, revealing its well-crafted nature."
                    },
                    {
                        name: "Texture & Mouthfeel",
                        text: "The wine's texture is opulent and velvety, creating a rounded and gratifying sensation on the palate. The balanced structure between tannins and fruit delivers an enveloping experience."
                    },
                    {
                        name: "Viscosity & Body",
                        text: "When swirled, the wine displays a moderate-to-high viscosity, with slow-moving legs trailing down the glass. This hints at its richness and full-bodied character, reinforcing its bold yet smooth presence."
                    }
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    {
                        name: "Terroir & Climate Influence",
                        text: "Saperavi Qvevri originates from the Tibaani Microzone, a region known for producing grapes of exceptional intensity. The distinctive climate of this area, marked by warm days and cool nights, allows for a perfect balance of ripeness and freshness, contributing to the wine's depth and elegance."
                    },
                    {
                        name: "Vineyard Location & Soil Composition",
                        text: "The vineyards are situated at an elevation of 360 meters, benefiting from gentle slopes that optimize sunlight exposure and airflow. The soil offers excellent drainage and mineral absorption. This combination enhances the wine’s structure and imparts a subtle mineral complexity."
                    },
                    {
                        name: "Temperature & Growing Conditions",
                        text: "During the growing season, daytime temperatures range from 25°C to 30°C , while cooler nights help preserve the grape’s acidity. This diurnal variation allows the berries to mature gradually, concentrating their flavors while maintaining freshness and balance."
                    }
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    {
                        name: "Hearty Grilled and Roasted Dishes",
                        text: "The deep, bold character of Saperavi Qvevri makes it an outstanding companion for robust, flame-kissed dishes like slow-roasted lamb, charred ribeye, or herb-infused pork tenderloin. The smoky, caramelized exterior of these meats melds beautifully with the wine’s tannic backbone, while its lively acidity balances out the richness, making every bite more satisfying."
                    },
                    {
                        name: "Earthy Mushroom Creations",
                        text: "For a vegetarian-friendly pairing, dishes that emphasize the natural umami of mushrooms are an excellent match. Truffle-infused risotto, grilled shiitake skewers, or a creamy wild mushroom pasta highlight the wine’s subtle earthiness while its firm structure provides contrast to the dish’s creamy texture."
                    },
                    {
                        name: "Rich and Savory Game Meats",
                        text: "The bold and intense nature of Saperavi Qvevri harmonizes with the deep, wild flavors of game meats such as roasted duck, venison stew, or braised rabbit. The wine’s dark fruit notes complement the slightly gamy undertones, while its structured tannins soften the richness, creating a well-balanced gastronomic experience."
                    },
                    {
                        name: "Smoky and Spiced Barbecue",
                        text: "For lovers of smoky, spice-laden barbecue, this wine is a natural choice. Whether it’s slow-cooked beef brisket, grilled lamb chops, or barbecue-glazed short ribs, the intense flavors are elevated by the wine’s depth and complexity. The interplay between the charred, caramelized crust of the meat and the vibrant acidity of the wine enhances both elements, making each sip and bite more enjoyable."
                    },
                    {
                        name: "Aged and Flavorful Cheeses",
                        text: "Mature cheeses with a firm texture and nutty undertones create a fantastic counterpoint to the richness of Saperavi Qvevri. Aged Manchego, Gruyère, or a well-matured Blue Cheese bring out the wine’s fruit complexity, while the wine’s tannins cut through the creaminess, creating a balanced and luxurious pairing."
                    },
                    {
                        name: "Spiced Mediterranean and Middle Eastern Cuisine",
                        text: "Dishes infused with warming spices, such as Moroccan lamb tagine, Turkish kebabs, or Lebanese spiced lentils, complement the wine’s fruit-forward intensity and structured tannins. The spice and herbaceous elements in these dishes align with the wine’s aromatic complexity, offering a captivating fusion of flavors."
                    },
                    {
                        name: "Dark Chocolate and Berry Desserts",
                        text: "For an unconventional yet indulgent pairing, try Saperavi Qvevri with dark chocolate truffles or a blackberry tart. The wine’s dark fruit notes and tannins interact beautifully with the bitterness of cocoa or the tartness of berries, creating a refined and unexpected combination."
                    }
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    {
                        name: "Optimal Temperature & Its Effects",
                        text: "Serving Saperavi Qvevri at the right temperature enhances its complexity. The ideal range is between 16°C and 18°C , which accentuates its fruit concentration while allowing its tannins to integrate smoothly."
                    },
                    {
                        name: "Best Chilling Practices",
                        text: "If stored at room temperature, placing the bottle in a wine cooler or refrigerator for about 20 minutes before serving ensures the perfect drinking experience. Avoid excessive chilling, as it can suppress the wine’s vibrant aromas."
                    },
                    {
                        name: "How Temperature Affects the Experience",
                        text: "When slightly cooler, the wine’s acidity and structure are more pronounced, making it a refreshing and balanced sip. As it warms slightly in the glass, deeper fruit flavors and earthy nuances become more prominent, allowing a more immersive tasting experience."
                    },
                    {
                        name: "Glassware & Presentation",
                        text: "For the best sensory appreciation, use a large-bowled glass to allow the wine to breathe, enhancing its bouquet and complexity. Decanting for about 30 minutes before serving further refines its texture and aromatic profile, offering a more expressive experience in every sip."
                    },
                ]
            }
        ]
    },
    {
        id: 16,
        name: 'Chacha GOLD',
        type: WINE_TYPE.CHACHA,
        subtype: 'Chacha',
        grape: 'Rkatsiteli, Kisi, Kakhuri Mtsvane',
        alcohol: '40-45%',
        region: 'Kakheti, Georgia',
        terroir: 'Tibaani Microzone',
        style: 'Georgian Traditional',
        vinification: 'Distillation',
        imgName: 'chacha-gold',
        tastingTemp: '8-10°C',
        desc: 'Famous Georgian grape vodka - Chacha made by the Georgian traditional technology of distilling, has a rich aroma characteristic of grapes and a surprisingly mild taste.',
        detailedInfo: [
            {
                name: "Vinification",
                subItems: [
                    { text: "Chacha is a distinguished Georgian pomace brandy crafted from the finest remnants of our white grape varieties, including Rkatsiteli, Tibaani Mtsvane, and Kisi. Following the winemaking process, the leftover grape skins, seeds, and pulp are gathered for distillation, ensuring a sustainable approach where no part of the grape is wasted." },
                    { text: "The distillation process is carried out using traditional copper pot stills under carefully controlled temperatures, which guarantees a refined and consistently high-quality spirit. The resulting distillate initially reaches an alcohol concentration of 60-65% before being expertly diluted to 43% to enhance its smoothness and drinkability." },
                    { text: "Chacha Gold is a reflection of Georgia’s deep-seated distillation heritage, offering a well-crafted, premium spirit designed for connoisseurs seeking authenticity and refinement. With a distinctive character and an impeccable profile, it is a must-have addition to any sophisticated spirits collection." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    {
                        name: "Aroma & Palate",
                        text: "hacha boasts a vibrant yet well-balanced aroma, showcasing the delicate essence of sun-ripened grapes, complemented by floral notes and subtle herbal undertones. Hints of citrus zest and orchard fruits add freshness, while an underlying earthiness enhances its complexity. On the palate, this spirit delivers a harmonious fusion of ripe fruit, crisp minerality, and a whisper of spice. The well-rounded texture ensures a smooth and refined drinking experience, highlighting the essence of the grape varieties used."
                    },
                    {
                        name: "Style",
                        text: "Expertly distilled to preserve the purity of its ingredients, Chacha remains true to its heritage while offering an unmistakably sophisticated style. While reminiscent of high-quality pomace brandies, it retains a uniquely Georgian identity, striking a balance between robust character and a clean, bright profile."
                    },
                    {
                        name: "Acidity & Finish",
                        text: "The subtle acidity lends a refreshing crispness, cutting through the richness of the spirit and enhancing its complexity. This interplay of elements results in a long, elegant finish, where lingering notes of citrus and delicate spice create an inviting aftertaste, encouraging the next sip."
                    },
                    {
                        name: "Tannins",
                        text: "Unlike aged spirits, Chacha maintains a fresh, tannin-free structure. Its clarity allows the natural fruit character to shine, unburdened by the heavy influence of wood aging, resulting in a crisp and unadulterated experience."
                    },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    {
                        name: "Color & Appearance",
                        text: "Chacha presents itself with pristine transparency, a testament to its meticulous distillation. Its crystal-clear appearance reflects its purity and high-quality craftsmanship, free from any impurities or cloudiness."
                    },
                    {
                        name: "Texture & Mouthfeel",
                        text: "Smooth and velvety on the palate, Chacha delivers an invigorating yet gentle sensation. Its mouthfeel is light yet structured, ensuring a pleasant drinking experience that balances warmth and elegance."
                    },
                    {
                        name: "Viscosity & Body",
                        text: "With a refined viscosity, Chacha glides effortlessly across the palate. It possesses a medium body, striking a delicate balance between alcohol strength and the vibrant, fruit-driven character of its ingredients."
                    }
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    {
                        name: "Terroir & Climate Influence",
                        text: "The grapes used for Chacha originate from Georgia’s renowned Tibaani microzone, where the unique interplay of climate, elevation, and terroir shapes their distinctive characteristics. This region benefits from warm days and cool nights, which allow the grapes to develop rich aromas and well-structured acidity."
                    },
                    {
                        name: "Vineyard Location & Soil Composition",
                        text: "Nestled in fertile valleys, the vineyards in Tibaani microzone are enriched by mineral-laden soils, providing ideal conditions for grape cultivation. "
                    },
                    {
                        name: "Temperature & Growing Conditions",
                        text: "The moderate continental climate, characterized by balanced rainfall and optimal sunlight exposure, ensures a slow and even ripening process. These conditions enhance the concentration of flavors in the grapes, resulting in a refined and expressive spirit."
                    }
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    {
                        name: "Authentic Georgian Dishes",
                        text: "Chacha pairs exceptionally well with Georgia’s iconic culinary staples. The bold spirit contrasts beautifully with the juicy, spiced flavors of Khinkali (dumplings), the smoky goodness of Mtsvadi (grilled meat skewers), and the cheesy indulgence of Khachapuri (cheese-filled bread). Its crisp and potent nature helps balance the richness of these traditional dishes, making for a well-rounded dining experience."
                    },
                    {
                        name: "Seafood Delights",
                        text: "While not the most obvious choice, Chacha works wonderfully with seafood, particularly grilled trout, salmon, and mackerel. The light oiliness of the fish complements the clean, fruity undertones of the spirit, creating an unexpectedly refreshing combination. For an elevated pairing, try smoked fish with a chilled shot of Chacha to contrast the deep, smoky notes."
                    },
                    {
                        name: "Cheese Lovers’ Choice",
                        text: "Strong, aged cheeses make a fantastic companion to Chacha. Georgian Guda cheese or a rich blue cheese provide an intense, tangy contrast to Chacha’s smooth yet fiery finish. For something milder, try it with aged Sulguni or a firm, salty cheese like Parmesan. A drizzle of honey over the cheese adds a sweet touch that enhances Chacha’s warmth."
                    },
                    {
                        name: "Fruits & Nuts for a Light Snack",
                        text: "Chacha pairs exceptionally well with fresh peaches, plums, apricots, or even dried fruits like raisins and figs. The natural sweetness of the fruits softens the intensity of the spirit, creating a harmonious balance. Nuts such as walnuts, almonds, and hazelnuts complement Chacha’s slightly nutty undertones and provide an earthy contrast to its crispness."
                    },
                    {
                        name: "Grilled & Barbecue Specialties",
                        text: "The smoky flavors of grilled meats and barbecue pair effortlessly with Chacha’s bold character. Lamb chops, pork ribs, or flame-grilled beef taste even better when accompanied by a sip of this robust Georgian spirit. The high alcohol content cleanses the palate between bites, allowing you to fully enjoy the depth of flavors in charred and spiced meats."
                    },
                    {
                        name: "Sweet Endings: Desserts & Chacha",
                        text: "For dessert, opt for poached pears, honey-soaked pastries like baklava, or dark chocolate truffles. The fruity essence of Chacha enhances the sweetness of these treats while offering a satisfying contrast to rich, nutty flavors. If you prefer something more refreshing, a citrus sorbet or fruit tart can provide a light yet flavorful pairing."
                    }
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    {
                        name: "Optimal Temperature & Its Effects",
                        text: "To fully appreciate its character, Chacha should be served slightly chilled, ideally between 10°C and 14°C This temperature enhances its aromatic complexity while maintaining a smooth and balanced mouthfeel."
                    },
                    {
                        name: "Best Chilling Practices",
                        text: "For the best experience, refrigerate the bottle for a short period before serving. Avoid excessive chilling, as overly cold temperatures can mute its delicate flavors. If refrigeration isn’t possible, placing the bottle in an ice bucket for a few minutes will suffice."
                    },
                    {
                        name: "How Temperature Affects the Experience",
                        text: " Serving Chacha too cold can suppress its nuanced aromatics, making it appear more neutral. On the other hand, room-temperature Chacha allows the full intensity of flavors to emerge but may highlight the spirit’s alcoholic heat more prominently. Finding the ideal serving temperature ensures the perfect balance between aroma and smoothness."
                    },
                    {
                        name: "Glassware & Presentation",
                        text: "For the best tasting experience, Chacha should be enjoyed in a tulip-shaped glass, which helps concentrate its aromas and allows the spirit to breathe. This type of glass enhances its fruity and floral notes, making each sip more aromatic and complex. For a more traditional experience, it can also be served in small shot glasses, particularly when enjoyed alongside food in a festive setting. To preserve its integrity, it is best consumed neat, without ice or dilution, ensuring the full expression of its rich character."
                    },
                ]
            }
        ]
    },
    {
        id: 17,
        name: 'Chacha SPECIAL',
        type: WINE_TYPE.CHACHA,
        subtype: 'Chacha',
        grape: 'Rkatsiteli, Kisi, Kakhuri Mtsvane',
        alcohol: '40-45%',
        region: 'Kakheti, Georgia',
        terroir: 'Tibaani Microzone',
        style: 'Georgian Traditional',
        vinification: 'Distillation (Aged in oak Barrels For 2 years)',
        imgName: 'chacha-special',
        tastingTemp: '8-10°C',
        desc: 'Famous Georgian grape vodka - Chacha made by the Georgian traditional technology of distilling, stored in oak barrels, has a rich aroma characteristic of grapes and a surprisingly mild taste.',
        detailedInfo: [
            {
                name: "Vinification",
                subItems: [
                    { text: "This premium Georgian spirit is meticulously crafted from a distinctive combination of Rkatsiteli, Kisi and Kakhuri Mtsvane grapes. The process begins with the precise fermentation of grape pomace, which includes skins, seeds, and pulp, ensuring that the essence of the fruit is fully captured." },
                    { text: "Traditional distillation methods are employed using copper pot stills, which help preserve the purity of the spirit while bringing out its rich and robust flavors. This careful approach results in a primary distillate with an alcohol concentration of 62–65%, laying the foundation for its bold character." },
                    { text: "To enhance its depth and complexity, Chacha Special undergoes a two-year maturation period in oak barrels. This aging process refines the spirit, enriching its smoothness while allowing the wood to impart nuanced flavors. Once fully matured, the spirit is carefully diluted to 45%  before bottling, ensuring a balanced and refined drinking experience." },
                ]
            },
            {
                name: "Tasting",
                subItems: [
                    {
                        name: "Aroma & Palate",
                        text: "Chacha Special delivers an intricate aromatic experience, featuring a fusion of ripe orchard fruits such as peaches and apricots, intertwined with floral undertones. With time, delicate notes of honey and warm spices emerge, complemented by subtle oak influences. On the palate, this spirit offers a well-balanced interplay between fruity vibrancy and deep, oaky richness, revealing hints of dried fruit, vanilla, and caramel. The finish is smooth and inviting, making it perfect for sipping or mixing into refined cocktails."
                    },
                    {
                        name: "Style",
                        text: "This spirit embodies a sophisticated yet authentic Georgian tradition, reflecting both time-honored craftsmanship and modern refinement. Its aging process in oak barrels enhances its character, making it a versatile choice for casual enjoyment or formal occasions. Chacha Special pairs effortlessly with various flavors, making it suitable for different drinking preferences."
                    },
                    {
                        name: "Acidity & Finish",
                        text: "The natural acidity of the grapes contributes to the spirit’s well-rounded structure, ensuring a lively yet smooth drinking experience. The finish is long-lasting, with lingering notes of toasted oak, warm spices, and a subtle touch of sweetness that enhances its complexity."
                    },
                    {
                        name: "Tannins",
                        text: "While not a wine-based spirit, the oak aging lends a gentle tannic presence, adding structure and body. This element brings depth and sophistication, creating a lasting impression with every sip."
                    },
                ]
            },
            {
                name: "Visual & Sensory Characteristics",
                subItems: [
                    {
                        name: "Color & Appearance",
                        text: "Aged for two years in oak barrels, Chacha Special showcases a radiant golden hue with deep amber undertones. The brilliance of its color hints at the richness and complexity within the bottle, reflecting its premium aging process."
                    },
                    {
                        name: "Texture & Mouthfeel",
                        text: "This spirit offers a velvety and refined mouthfeel, enveloping the palate with a smooth, slightly warming sensation. The oak aging contributes to its well-integrated structure, providing a luxurious drinking experience."
                    },
                    {
                        name: "Viscosity & Body",
                        text: "Medium-bodied with a delicate balance of weight and texture, Chacha Special offers a satisfying viscosity that coats the palate without feeling heavy. The spirit’s aging process ensures a layered complexity that enhances its full-bodied profile."
                    }
                ]
            },
            {
                name: "Terroir",
                subItems: [
                    {
                        name: "Terroir & Climate Influence",
                        text: "The unique environmental conditions of the Tibaani microzone play a significant role in shaping the character of this spirit. The combination of warm sunlight, moderate rainfall, and a distinct microclimate contributes to the richness and intensity of the grapes used in production."
                    },
                    {
                        name: "Vineyard Location & Soil Composition",
                        text: "Sourced from vineyards in the Tibaani microzone, the grapes benefit from mineral-rich soils that enhance their depth and aromatic complexity. The balanced composition of Tibaani microzone soil ensures optimal grape health and flavor concentration."
                    },
                    {
                        name: "Temperature & Growing Conditions",
                        text: "The warm growing season, paired with cooling breezes, allows the grapes to develop robust flavors while maintaining their natural acidity. This careful balance ensures a spirit with both depth and vibrancy, reflecting the terroir’s unique influence."
                    }
                ]
            },
            {
                name: "Food Pairing",
                subItems: [
                    {
                        text: "Chacha Special pairs exceptionally well with a variety of dishes that complement its bold and layered character."
                    },
                    {
                        name: "Savory Dishes",
                        text: "Enjoy with roasted lamb, slow-cooked beef, or spiced poultry dishes, as the richness of the spirit harmonizes with deeply flavored meats."
                    },
                    {
                        name: "Seafood",
                        text: "Pairs well with grilled shrimp, smoked salmon, or buttery scallops, allowing the fruit and oak notes to complement the delicate seafood flavors."
                    },
                    {
                        name: "Fruits and Fresh Salads",
                        text: ""
                    },
                    {
                        name: "Spiced Cuisine",
                        text: "Ideal with Middle Eastern or Mediterranean dishes featuring saffron, cardamom, and cumin, enhancing the complexity of both the food and drink."
                    },
                    {
                        name: "Desserts",
                        text: "A great match for caramel-based desserts, nutty pastries, or dark chocolate truffles, as the sweetness and spice notes create a harmonious blend."
                    }
                ]
            },
            {
                name: "Perfect Serving",
                subItems: [
                    {
                        name: "Optimal Temperature & Its Effects",
                        text: "For the best tasting experience, Chacha Special should be served at a temperature between 14°C to 18°C (57°F to 64°F). This range enhances its depth and allows its nuanced flavors to fully develop."
                    },
                    {
                        name: "Best Chilling Practices",
                        text: "If the spirit is too warm, lightly chilling it for 10–15 minutes before serving helps maintain its structure. Avoid over-chilling, as extremely low temperatures can suppress the intricate aromas and flavors."
                    },
                    {
                        name: "How Temperature Affects the Experience",
                        text: "Cooler Serving (10°C–12°C / 50°F–54°F): Can mute the rich caramel and vanilla notes while making the alcohol presence more pronounced. Room Temperature (Above 20°C / 68°F): While the aromas become more noticeable, the alcohol may dominate, reducing the smoothness and balance. Ideal Range (14°C–18°C / 57°F–64°F): Preserves the perfect balance between fruit, oak, and spice, ensuring a refined tasting experience."
                    },
                    {
                        name: "Glassware & Presentation",
                        text: "Recommended Glass: A tulip-shaped glass, such as a grappa or brandy snifter, is ideal for concentrating the spirit’s aromas while allowing it to breathe. Serving Suggestion: Holding the glass gently in your palm warms the spirit slightly, unlocking more aromatic complexity with each sip."
                    },
                    {
                        text: "By following these serving recommendations, Chacha Special can be fully appreciated in all its richness, making for an exceptional tasting journey."
                    }
                ]
            }
        ]
    },
]