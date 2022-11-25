let users = [
    {
        name: "Eric",
        lastName: "Rodriguez",
        role:"admin",
        photo:"https://img2.freepng.es/20180315/koe/kisspng-user-avatar-computer-software-flat-man-head-material-5aa9fc3a0eac76.7598580315210895940601.jpg",
        age: 23,
        email: "feric.rodriguez@hotmail.com",
        password: "chau123",
        code: "asd123",
        verified: "true",
        logged: "true"
    },
    {
        name: "Ignacio",
        lastName: "Borraz",
        role:"admin",
        photo:"https://img2.freepng.es/20180314/fpq/kisspng-project-service-vector-man-material-5aa917ebb379e7.0151802515210311477351.jpg",
        age: 32,
        email: "igna.edea@hotmail.com",
        password: "123asd",
        code: "holamundo",
        verified: "true",
        logged: "true"
    },
        {
        name: "Hernan",
        lastName: "Cavalieri",
        role:"admin",
        photo:"https://img2.freepng.es/20180402/bje/kisspng-computer-icons-avatar-login-user-avatar-5ac207e69ecd41.2588125315226654466505.jpg",
        age: 26,
        email: "cavalieri.h95@hotmail.com",
        password: "holaquetal",
        code: "nosequeponer",
        verified: "true",
        logged: "false"
    },    
    {
        name: "Santiago",
        lastName: "Delgado",
        role:"admin",
        photo:"https://img2.freepng.es/20180626/fhs/kisspng-avatar-user-computer-icons-software-developer-5b327cc98b5780.5684824215300354015708.jpg",
        age: 21,
        email: "elmail@hotmail.com",
        password: "password",
        code: "acatampocosequeponer",
        verified: "false",
        logged: "true"
    }
];

require('dotenv').config();
require('../../config/database');
const User = require('../User')

users.forEach((element) => {
  User.create({
    name: element.name,
    lastName: element.lastName,
    role:element.role,
    photo:element.photo,
    age: element.age,
    email: element.email,
    password: element.password,
    code: element.code,
    verified: element.verified,
    logged: element.logged,
  });
});