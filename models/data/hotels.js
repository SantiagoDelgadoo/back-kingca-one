let hotels = [
    {
        name: "InterContinental Buenos Aires",
        photo: ["https://digital.ihg.com/is/image/ihg/intercontinental-buenos-aires-3613388437-2x1?fit=fit,1&wid=2880&hei=1440&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0","https://digital.ihg.com/is/image/ihg/intercontinental-buenos-aires-3579649290-2x1?fit=fit,1&wid=2880&hei=1440&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0","https://digital.ihg.com/is/image/ihg/intercontinental-buenos-aires-6794970306-2x1?fit=fit,1&wid=2880&hei=1440&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"],
        capacity: 2000,
        description: "The hotel has room service and a concierge. In addition, InterContinental Hotel Buenos Aires offers a swimming pool and a bar so you can relax after a busy day. Parking is available for guests with cars. For those interested in visiting well-known landmarks during their trip to Buenos Aires, InterContinental Hotel Buenos Aires is close to Palacio Barolo (0.7 km) and Centro Cultural Kirchner (0.8 km).",
        cityId: "636d5c20033f2a5f173b112e",
        userId: "636d39111834aa8ba98269f2",
    },
    {
        name: "Casino Buenos Aires",
        photo: ["https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2018/04/michel-rathwell.jpg","https://cdn.shortpixel.ai/spai/w_1081+q_+ret_img+to_webp/https://k7f6k2y7.stackpathcdn.com/latinoamerica/wp-content/uploads/sites/2/2020/11/los-casinos-en-buenos-aires-reabriran-antes-del-2021-900x600.jpg","https://choicecasino.com/media/ground_casino_photo/0001/89/thumb_88106_ground_casino_photo_standart.jpg"],
        capacity: 15000,
        description: "Currently, Casino Buenos Aires has more than 2,000 collaborators who provide services in the different units of the company, whose structure is made up of areas of administration, finance, human resources, operations and security.",
        cityId: "636d5c20033f2a5f173b112e",
        userId: "636d39111834aa8ba98269f0",
    },
    {
        name: "Hotel Rose Bourbon",
        photo: ["https://hapi.mmcreation.com/_imgr/9/Exterieur/RoseB_Exterieur_M19A8403.jpg?w=1200&h=0&mode=ratio&coi=50,50&hash=1c938270feba84b","https://hapi.mmcreation.com/_imgr/9/Lobby/RoseB_Lobby-Detail_M19A8476.jpg?w=1200&h=0&mode=ratio&coi=50,50&hash=004ab62a5a51bba","https://hapi.mmcreation.com/_imgr/9/Lobby/RoseB_Lobby-Detail_M19A8463-Modifier.jpg?w=1200&h=0&mode=ratio&coi=50,50&hash=a944c834c247e02"],
        capacity: 3000,
        description: "This hotel is a perfect contrast to the effervescence of Paris and it is ideally located in the fifteenth district, not far from the Eiffel Tower and quite close to the ever-lively Rue du Commerce. ",
        cityId: "636d5c20033f2a5f173b1129",
        userId: "636d39111834aa8ba98269f1",
    },
    {
        name: "Club Pierre Charron",
        photo: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/d3/4b/2f/salle-des-grands-jeux.jpg?w=1200&h=-1&s=1","https://www.clubpierrecharron.com/storage/n1X0Q2ZWYABIIvIoYWRAzTWOHrmfJjIFNQMiOtkR.jpeg","https://cdn.sortiraparis.com/images/58/95998/695838-visite-du-club-pierre-charron.jpg"],
        capacity: 5000,
        description: "A stone’s throw from the Champs-Élysées, the Marval Group chose Paris and its golden triangle to open its first establishment dedicated to betting games: Club Pierre Charron.",
        cityId: "636d5c20033f2a5f173b1129",
        userId: "636d39111834aa8ba98269f1",
    },
    {
        name: "The Langham Hotel",
        photo: ["https://assets.langhamhotels.com/is/image/langhamhotelsstage/TLLON_Our_Neighbourhood_Header:Medium?wid=1013&hei=569","https://assets.langhamhotels.com/is/image/langhamhotelsstage/TLLON_Stay_Offer_Resort_in_The_City:Medium?wid=1013&hei=569","https://assets.langhamhotels.com/is/image/langhamhotelsstage/TLLON_Stay_Header:Medium?wid=1013&hei=569"],
        capacity: 2500,
        description: "Langham Hotels International Limited, trading as Langham Hospitality Group, is a hotel operator with its headquarters in Hong Kong. The oldest hotel in its portfolio, The Langham, London, originally opened in 1865 as Europe's first 'Grand Hotel'.Today, the group covers four continents, with projects located in cities and resorts around the world, including Auckland, Bangkok, Beijing, Boston, Gold Coast, Guangzhou, Hong Kong, Jakarta, London, Los Angeles, Melbourne, New York, Phuket, Shanghai, Shenzhen, Sydney and Toronto. The group's expansion continues with its two brands, 'The Langham Hotels and Resorts' and 'Cordis Hotels and Resorts', as well as its affiliate hotels.",
        cityId: "636d5c20033f2a5f173b1126",
        userId: "636d39111834aa8ba98269f2",
    },
    {
        name: "The Hippodrome Casino",
        photo: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/88/11/2e/hippodrome-casino.jpg?w=1200&h=-1&s=1","https://www.hippodromecasino.com/wp-content/uploads/2019/06/menu-casino.jpg","https://pnimg.net/w/articles/4/585/beb55403a7.jpg"],
        capacity: 3500,
        description: "The Hippodrome Casino is an established cornerstone of West End life. The biggest entertainment and casino venue in the country, we welcome millions of visitors every year. Come and explore, there’s nothing like us.",
        cityId: "636d5c20033f2a5f173b1126",
        userId: "636d39111834aa8ba98269f0",
    },
    {
        name: "NH Collection Roma Fori Imperiali",
        photo: ["https://img.nh-hotels.net/rNrzE/bqVqz/original/NH_Collection_Fori_Imperiali_Hotel_facilities_terrace_sunset_cocktail_setup.jpg?output-quality=80&resize=1110:*&composite-to=center,center|1110:380&background-color=white","https://img.nh-hotels.net/rNrzE/N1k1Y/original/NH_Collection_Fori_Imperiali_Room_junior_suite_Fori_Imperiali_sunset_view.jpg?output-quality=70&resize=555:*&composite-to=center,center|555:280&background-color=white","https://img.nh-hotels.net/rNrzE/L0yoG/original/T_NH_collection-fori-imperiali_054.jpg?output-quality=80&resize=1110:*&composite-to=center,center|1110:380&background-color=white"],
        capacity: 12000,
        description: "Step back in time to experience the everyday life of Ancient Rome during your stay at the NH Collection Roma Fori Imperiali. Located in an area full of archaeological treasures and close to the Roman Forum and Piazza Venezia, this brand new five-star boutique hotel is the perfect base for exploring the city.",
        cityId: "636d5c20033f2a5f173b112d",
        userId: "636d39111834aa8ba98269f1",
    },
    {
        name: "Hilton Tokio Hotel",
        photo: ["https://hi-cdn.t-rp.co.uk/images/hotels/1781090/0?width=870&height=480&crop=false","https://lh3.googleusercontent.com/p/AF1QipMjpgK2PJtPdYYeCqR6gPk4E48-J6DjSsI70PyA=w296-h202-n-k-rw-no-v1","https://lh3.googleusercontent.com/p/AF1QipPgHyEj7anuzjhFvtm0HDjZ_JM-SS3ivQnOVtRR=w296-h202-n-k-rw-no-v1"],
        capacity: 20000,
        description: "This elegant, high-rise hotel is a 10-minute walk from Shinjuku Train Station, a 6-minute walk from the Tokyo Metropolitan Government Building and 3 km from Yoyogi Park.",
        cityId: "636d5c20033f2a5f173b1126",
        userId: "636d39111834aa8ba98269f3",
    },
    {
        name: "Mangaart Hotel",
        photo: ["https://visit-chiyoda.com/wp-content/uploads/2019/11/P2100209.jpg","https://lh3.googleusercontent.com/p/AF1QipMo68UVPmTtpiOZX5SuH0PyCL2os3S1OhaH-VX8=w296-h202-n-k-rw-no-v1","https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/179445661.jpg?k=1a80e5eb79f42479065a06c7f24ea600be80e2e8894e1f7d3603d2f7387c7f3e&o=&hp=1"],
        capacity: 14000,
        description: "Welcome to the world of the Manga Brain.In our hotel, reality is strictly forbidden.We want you to spend the entire night absorbed in the world of the works.",
        cityId: "636d5c20033f2a5f173b1126",
        userId: "636d39111834aa8ba98269f2",
    },
    {
        name: "Hyatt Place New York City",
        photo: ["https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/270595387.jpg?k=1285990f9e9ef511b8f3205253d4c5812d85f74d361988e8786ea336ecad35dc&o=&hp=1","https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/246736324.jpg?k=d134cf8e7b578cd84b383ae005c451ace1991aa15caf337ea033b754d748cfa2&o=&hp=1","https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/246736250.jpg?k=d8b9a9694b7a25edc7f0e5a09bdce694232f7e26b9b71c63d391445af9c90b24&o=&hp=1"],
        capacity: 8900,
        description: "Hyatt Place New York City/Times Square features air-conditioned rooms with satellite flat-screen TV in the Hell's Kitchen district of New York. The accommodation features a restaurant, a 24-hour front desk, a shared lounge, and free Wi-Fi throughout. The hotel offers newspapers and magazines and an ATM.",
        cityId: "636d5c20033f2a5f173b1127",
        userId: "636d39111834aa8ba98269f0",
    },
    {
        name: "DoubleTree by Hilton Hotel",
        photo: ["https://assets.hiltonstatic.com/image/upload/t_MODx%20-%20Masthead/t_MODx%20-%20Masthead/v1597861370/Imagery/Property%20Photography/DoubleTree%20Suites/S/SCLSKDT/Facade%20Hotel10.jpg","https://pix10.agoda.net/hotelImages/295365/0/7cc68803d32f9b9b33e6ed5712391f18.jpg?ca=7&ce=1&s=1024x768","https://lh5.googleusercontent.com/p/AF1QipNiFdE3k6BK86RTNaYWObovF-WTSAbbwz-UXLOt=w253-h168-k-no"],
        capacity: 6000,
        description: "This luxurious and modern hotel faces the Hudson River, surrounded by restaurants, 3 blocks from the theaters of Times Square, a 6-minute walk from the Times Square-42 Street subway station and 1.6 km from the Empire State Building.",
        cityId: "636d5c20033f2a5f173b1127",
        userId: "636d39111834aa8ba98269f2",
    },
    {
        name: "JW Marriott Hotel Rio de Janeiro",
        photo: ["https://cache.marriott.com/content/dam/marriott-renditions/RIOMC/riomc-rooftop-view-5610-hor-pano.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=2280px:*","https://cache.marriott.com/content/dam/marriott-renditions/RIOMC/riomc-suite-0196-hor-pano.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=2280px:*","https://cache.marriott.com/content/dam/marriott-renditions/RIOMC/riomc-carioca-0182-hor-pano.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=2280px:*"],
        capacity: 7800,
        description: "Experience a blend of luxury and comfort at JW Marriott Hotel Rio de Janeiro. Conveniently located in front of the beach, our Copacabana hotel features elegant rooms and suites, upscale amenities, a variety of dining options and flexible event venues.",
        cityId: "636d5c20033f2a5f173b112b",
        userId: "636d39111834aa8ba98269f3",
    }, 
]

require('dotenv').config();
require('../../config/database');
const Hotel = require('../Hotel')

hotels.forEach((element) => {
  Hotel.create({
    name: element.name,
    photo:element.photo,
    capacity: element.capacity,
    description: element.description,
    cityId:element.cityId,
    userId:element.userId,
  });
});