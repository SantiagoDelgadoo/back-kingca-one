let cities = [
    {
        name: "Tokio",
        continent: "Asia",
        photo: 'https://elviajerofeliz.com/wp-content/uploads/2020/05/Por-qu%C3%A9-Tokio-es-una-de-las-ciudades-m%C3%A1s-sorprendentes.jpg',
        population: "13.96 millons (2021)",
        userid: "636d39111834aa8ba98269f2",
    },
    {
        name: "New York",
        continent: "America",
        photo: 'https://www.lanacion.com.ar/resizer/HPWQnuyJ7U2pq-7gh-baactRo5U=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/RGTEIMFAMNBKXCVLO2EEUTH3SY.jpg',
        population: "8.468 millones (2021)",
        userid: "636d39111834aa8ba98269f3",
    },
    {
        name: "London",
        continent: "Europa",
        photo: 'https://utopiaurbana.city/wp-content/uploads/2022/09/Rutas-por-Londres.jpg',
        population: "8.982 millones (2019)",
        userid: "636d39111834aa8ba98269f0",
    },
    {
        name: "Paris",
        continent: "Europa",
        photo: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900',
        population: "2.161 millones (2019)",
        userid: "636d39111834aa8ba98269f1",
    },
    {
        name: "Berlin",
        continent: "Europa",
        photo: 'https://www.visitberlin.de/system/files/styles/visitberlin_hero_visitberlin_desktop_2x/private/image/Panorama_Berlin_Mitte_GettyImages-648821756_Getty_Images_Foto_bluejayphoto_web.jpg?h=e196f222&itok=o4YCzIik',
        population: "3.645 millones (2019)",
        userid: "636d39111834aa8ba98269f2",
    },
    {
        name: "Rio de Janeiro",
        continent: "America",
        photo: 'https://rispoliviajes.com.ar/wp-content/uploads/2017/12/rio2.jpg',
        population: "6.748 millones (2020)",
        userid: "636d39111834aa8ba98269f3",
    },
    {
        name: "Sydney",
        continent: "Oceania",
        photo: 'https://astelus.com/wp-content/viajes/Guia-turistica-de-Sidney.jpg',
        population: "5.312 millones (2019)",
        userid: "636d39111834aa8ba98269f0",
    },
    {
        name: "Roma",
        continent: "Europa",
        photo: 'https://www.enroma.com/wp-content/uploads/2021/07/Coliseo-Romano.jpg',
        population: "2.873 millones (2017)",
        userid: "636d39111834aa8ba98269f1",
    },
    {
        name: "Buenos Aires",
        continent: "America",
        photo: 'https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/argentina_buenosaires_9dejulio_shutterstock_1221876304_sebastian_barros_sierz_shutterstock.jpg?itok=o_rAvnJ-',
        population: " 15.625.084 millones (2022)",
        userid: "636d39111834aa8ba98269f2",
    },
    {
        name: "Dubai",
        continent: "Asia",
        photo: 'https://images.lucentcms.com/greca/2019/09/5d839d7238ed6-dubai.jpg',
        population: "3.331 millones (2019)",
        userid: "636d39111834aa8ba98269f3",
    },
    {
        name: "Osaka",
        continent: "Asia",
        photo: 'https://img.itinari.com/pages/images/original/0afe2310-ecf1-42ae-ba94-c6d9276d858b-istock-522473665.jpg?ch=DPR&dpr=2.625&w=1600&s=43a44f534ff621b768e852f9f2c8cf3e',
        population: "2.691 millones (2015)",
        userid: "636d39111834aa8ba98269f0",
    },
    {
        name: "Moscu",
        continent: "Europa",
        photo: 'https://www.civitatis.com/blog/wp-content/uploads/2019/09/invierno-moscu.jpg',
        population: "11.92 millones (2012)",
        userid: "636d39111834aa8ba98269f1",
    }
]
require('dotenv').config(); //requiero la configuracion de dotenv
require('../../config/database'); //requiero la configuracion de la database
const City = require('../City') //requiero el modelo
cities.forEach(element =>{
City.create ({//metodo de mongoose en el cual dentro de el voy a pasar la estructura del modelo
        name: element.name,
        continent: element.continent,
        photo: element.photo,
        population: element.population,
        userid: element.userid
    })
})