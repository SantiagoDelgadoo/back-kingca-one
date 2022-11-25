let itineraries = [
    {
        cityid: "636d5c20033f2a5f173b1129",
        name: "Eiffel Tower",
        photo: "https://media.revistaad.es/photos/623afa2660f0ecf0c5bf585f/3:4/w_1500,h_2000,c_limit/GettyImages-1067622670.jpgcbvbdfgbf",
        description: "Delve into the history of one of the world's most famous monuments and soak up the exhibits and maps on display. Then bid adieu to your guide and head to the tower's summit for stellar views of the City of Lights. Toast your travels with a glass of bubbly from the Champagne bar (own expense)",
        price: 27,
        duration: 2,
        userId: "636d39111834aa8ba98269f1" ,
    },
    {
        cityid: "636d5c20033f2a5f173b1129",
        name: "Louvre Museum",
        photo: "https://www.airtecnics.com/media/6385/Louvre-museum-in-Paris.jpg",
        description: "Prepare to be inspired by some of the worlds most famous artists as you step inside the iconic Louvre Museum. Head straight to the front of the queue with skip-the-line entrance, then journey through art history on a private tour. With the help of your expert guide, see masterpieces like the 'Venus de Milo' and the 'Mona Lisa,' learn about the evolution of art around the world, and discover little-known gems that many visitors miss.",
        price: 20,
        duration: 1,
        userId: "636d39111834aa8ba98269f1" ,
    },
    {
        cityid: "636d5c20033f2a5f173b112b",
        name: "the Christ the Redeemer",
        photo: "https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/3N4V5KRFQMG6NBOEZY4FZEVG7Q.jpg",
        description: "As one of the New 7 Wonders of the World and Rio de Janeiro’s most iconic attraction, the Christ the Redeemer statue attracts lengthy lines. Don’t waste time waiting, save time with this skip-the-line ticket that allows you to board the next available train to Christ the Redeemer, which reigns supreme over the city from Corcovado’s summit. Your return ticket is valid on any train so spend as much time as you like at the top, enjoying panoramic vistas of Rio and capturing photographs beneath the outstretched arms of Christ.",
        price: 46,
        duration: 2,
        userId: "636d39111834aa8ba98269f3" ,
    },
    {
        cityid: "636d5c20033f2a5f173b112b",
        name: "Hang Gliding or Paragliding in Rio",
        photo: "https://static.wixstatic.com/media/6da983_229dafe4be17473cb08bf023010e36cb~mv2.jpg/v1/fit/w_2500,h_1330,al_c/6da983_229dafe4be17473cb08bf023010e36cb~mv2.jpg",
        description: "See Rio de Janeiro from a whole new angle during a private tour that offers the option of hang gliding or paragliding over the Eternal City. It is not necessary to have previous experience in these extreme sports to enjoy this tour, which allows you to escape the crowds on land and enjoy unparalleled views of the main attractions such as Copacabana Beach, Christ the Redeemer and Sugarloaf Mountain.",
        price: 31,
        duration: 2,
        userId: "636d39111834aa8ba98269f3" ,
    },
    {
        cityid: "636d5c20033f2a5f173b112d",
        name: "Vatican City Tour",
        photo: "https://www.vaticantour.com/assets/frontend/images/banner-1.jpg",
        description: "Enter the Vatican and start your tour with a visit to the Vatican Museum, a true spectacle for everyone who visits. Your tour itinerary through the museum is specialized to focus on the most important parts of the site. Next, you will visit the Sistine Chapel. Once inside you will get to marvel at this glorious place, not to mention, see in the flesh, Michelangelo's masterpiece depicting the last judgement, on the ceiling. This is a true sight to behold. Finish your tour in front of the Basilica of St. Peter, the biggest church in the world. Our guide will give You an introduction about the Basilica and you are free to stay inside all the time you want.",
        price: "55",
        duration: 3,
        userId: "636d39111834aa8ba98269f1" ,
    },
    {
        cityid: "636d5c20033f2a5f173b112d",
        name: "Roman Coliseum",
        photo: "https://historia.nationalgeographic.com.es/medio/2048/02/28/a325302d__1280x861.jpg",
        description: "Then, wander the main floors of the ancient gladiatorial arena on your own before being escorted to the nearby Palatine Hill and Roman Forum, with admission tickets included.",
        price: 24,
        duration: 2,
        userId: "636d39111834aa8ba98269f1" ,
    },
    {
        cityid: "636d5c20033f2a5f173b112e",
        name: "Iguazu Falls",
        photo: "https://denomades.imgix.net/destinos/puerto-iguazu/1141/catarats-de-iguazu-argentina.jpg",
        description: "This tour only includes land services. Once you have booked independently your round trip flight to Iguazu, we will provide you with all the land services that you require to visit the Falls! Includes: round trip transportation from any downtown hotel in Buenos Aires or Buenos Aires Cruise Terminal. Upon arrival to Iguazu Airport, round trip transfers to Iguazu Falls National Park and private guide service to visit Iguazu Falls",
        price: 15,
        duration: 3,
        userId: "636d39111834aa8ba98269f2" ,
    },
    {
        cityid: "636d5c20033f2a5f173b112e",
        name: "Premium Tigre Delta and San Isidro Tour from Buenos Aires",
        photo: "https://cdn.getyourguide.com/img/tour/5d396cf2a8c39.jpeg/99.jpg",
        description: "Escape the city for a tour of the Tigre River Delta and San Isidro from Buenos Aires, including hotel pick-up and drop-off. Admire the cobblestone streets and grand mansions of San Isidro, then enjoy a cruise around the canals and islands of the idyllic Tigre Delta. During the tour, you'll also see the fruit market and the cathedral, and try some hand-made empanadas.",
        price: 22,
        duration: 5,
        userId: "636d39111834aa8ba98269f2" ,
    },
    {
        cityid: "636d5c20033f2a5f173b1128",
        name: "London Scavenger Hunt: The Magnificent City of London",
        photo: "https://photos.letsroam.com/scavenger_hunt_location_stops/scavenger_hunt_location_1565240331_large.jpg",
        description: "Walk to all the best landmarks and hidden gems, answering trivia questions and solving challenges. Work with your team or compete against them, as you learn new facts and create memorable experiences. Let’s Roam Scavenger Hunts are great as an everyday itinerary, or for bachelorette parties, birthday parties, corporate team building events and more! Each player chooses an interactive role, with challenges varying by person.",
        price: 13,
        duration: 2,
        userId: "636d39111834aa8ba98269f0" ,
    },
    {
        cityid: "636d5c20033f2a5f173b1128",
        name: "London Eye To London Bridge (River Walk)",
        photo: "https://i0.wp.com/thewanderingquinn.com/wp-content/uploads/2019/07/IMG_5314.jpg?resize=1440%2C960&ssl=1",
        description: "This Tour is a great way to experience a tale of two city's from the majesty of Westminster to the History of London along the way seeing the major sights of London from Big Ben to Tower Bridge and everything in between your guide on the tour will really bring to life the city with great stories random facts and a little humor for good measure.",
        price: 36,
        duration: 3,
        userId: "636d39111834aa8ba98269f0" ,
    },
    {
        cityid: "636d5c20033f2a5f173b1126",
        name: "Challenge Sumo Wrestlers and Enjoy a Chanko Lunch",
        photo: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_971/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/itineraries/fdndr1bzl7fsjjuevq7h/SumoShowExperiencewithChankoLunch.jpg",
        description: "Eat, train, and fight like a real Japanese sumo wrestler during this sumo demonstration and authentic ‘Chanko Nabe’ (hotpot) meal. Discover the history, training, and rules behind the typical sumo match as you watch real clashes. You can even try it yourself during a skirmish with a retired wrestler. Once you’ve worked up an appetite, dig into a tasty Chanko Nabe, a filling meal of hotpot, rice, miso, salad, French fries and more, used by these hulking fighters to gain weight. Admission to the demonstration and meals are both covered.",
        price: 60,
        duration: 2,
        userId: "636d39111834aa8ba98269f2" ,
    },
    {
        cityid: "636d5c20033f2a5f173b1126",
        name: "Go-kart tour Shinjuku drive metroporitan area",
        photo: "https://travellerstravels.com/wp-content/uploads/2020/07/maricar-tokyo-1024x768.jpg",
        description: "Visitors to Tokyo seeking a fun and quirky experience should look no further than this go-kart tour of Shinjuku. To make sure you stand out from the crowds even further you can don a cartoon character costume for your ride. This is an ideal way to have fun with friends while seeing the sights and making memories you’ll never forget.",
        price: 100,
        duration: 1,
        userId: "636d39111834aa8ba98269f2" ,
    }
    
    ]

    require('dotenv').config(); //requiero la configuracion de dotenv
require('../../config/database'); //requiero la configuracion de la database
const Itinerary = require('../Itinerary') //requiero el modelo
itineraries.forEach(element =>{
Itinerary.create ({//metodo de mongoose en el cual dentro de el voy a pasar la estructura del modelo
        cityid: element.cityid,
        name: element.name,
        photo: element.photo,
        description: element.description,
        price: element.price,
        duration: element.duration,
        userId: element.userId
    })
})