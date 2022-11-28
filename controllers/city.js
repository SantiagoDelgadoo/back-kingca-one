const City = require('../models/City') //requiero el modelo que necesito controlar
const controller = {
    create: async (req, res) => { //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion

        try {
            let new_city = await City.create(req.body) //defino variable que va a esperar la creacion de un nuevo documento (un usuario en este caso)

            res.status(201).json({//el status de exito de creacion es 201
                new_city: new_city,
                success: true,
                messagge: 'cityCreated'
            })

        } catch (error) {
            res.status(400).json({
                success: false,
                messagge: 'cityNoCreated',
                error: error.status
            })
        }

    },

    deleteCity: async (req, res) => { //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion
        let { id } = req.params
        try {
            let cityUser = await City.findById(id);
            if (cityUser.userid.equals(req.user.id)) { 
            let delete_city = await City.findOneAndDelete({ _id: id })
            res.status(201).json({//el status de exito de creacion es 201
                id: delete_city._id,
                success: true,
                messagge: 'cityDelete'
            })
        }
        else {
            res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }
        } catch (error) {
            res.status(400).json({
                success: false,
                messagge: 'cityNoDelete',
                error: error.status
            })
        }

    },

    EditCity: async (req, res) => { //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion
        let { id } = req.params
        try {
            let cityUser = await City.findById(id);
            if (cityUser.userid.equals(req.user.id)) {
                let editCity = await City.findByIdAndUpdate({ _id: id }, req.body, { new: true })
                res.status(201).json({//el status de exito de creacion es 201
                    id: editCity,
                    success: true,
                    messagge: 'cityEdit'
                })
            }
            else {
                res.status(401).json({
                    success: false,
                    message: "Unauthorized",
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                messagge: 'cityNoEdit',
                error: error.status
            })
        }

    },

    SeeCity: async (req, res) => { //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion
        let query = {}
        if (req.query.name) {
            query = { name: { $regex: req.query.name, $options: "s && i" } } // s ignora espacios i ignora toLowerCase y toUpperCase
        }
        if (req.query.continent) {
            query = {
                ...query,
                continent: req.query.continent
            }
        }
        if (req.query.userId) {
            query = {
                ...query,
                userid: req.query.userId
            }
        }
        try {
            let seeCity = await City.find(query)
            res.status(201).json({//el status de exito de creacion es 201
                cities: seeCity,
                success: true,
                messagge: 'seeCity'
            })

        } catch (error) {
            res.status(400).json({
                success: false,
                messagge: 'noSeeCity',
                error: error.status
            })
        }

    },

    CaptureCity: async (req, res) => { //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion
        let { id } = req.params
        try {
            let captureCity = await City.findById({ _id: id }).populate("userid", "name & photo")
            res.status(201).json({//el status de exito de creacion es 201
                id: captureCity,
                success: true,
                messagge: 'captureCity'
            })

        } catch (error) {
            res.status(400).json({
                success: false,
                messagge: 'noCaptureCity',
                error: error.status
            })
        }

    },
}
module.exports = controller //exporto el controlador