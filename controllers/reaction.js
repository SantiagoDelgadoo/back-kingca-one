const { query } = require('express')
const Reaction = require('../models/Reaction') //requiero el modelo que necesito controlar

const controller = {
    create: async (req, res) => { //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion

        try {
            let new_reaction = await Reaction.create(req.body) //defino variable que va a esperar la creacion de un nuevo documento (un usuario en este caso)

            res.status(201).json({//el status de exito de creacion es 201
                id: new_reaction,
                success: true,
                messagge: 'reactionCreated'
            })

        } catch (error) {
            res.status(400).json({
                success: false,
                messagge: 'reactionNoCreated',
                error: error.status
            })
        }
    },

    post: async (req, res) => { //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion

        let query = {}
        if (req.query.itineraryid) {
            query = { ...query, itineraryid: req.query.itineraryid }
        }
        if (req.query.name) {
            query = { ...query, name: req.query.name }
        }

        try {
            let reaction = await Reaction.findOne(query)

            if (reaction.userId.includes(req.user.id)) {
                let reactionEdited = await Reaction.findOneAndUpdate({ _id: reaction._id }, { $pull: { userId: req.user.id } }, { new: true })

                res.status(200).json({
                    reaction: reactionEdited,
                    success: true,
                    messagge: 'reactionPost'
                })
            }
            else {
                let reactionEdited = await Reaction.findOneAndUpdate({ _id: reaction._id }, { $push: { userId: req.user.id } }, { new: true })

                res.status(200).json({
                    reaction: reactionEdited,
                    success: true,
                    messagge: 'reactionPost'
                })
            }

        } catch (error) {
            res.status(400).json({
                success: false,
                messagge: 'reactionNoPost',
                error: error.status
            })
        }

    },


    get: async (req, res) => { //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion

        let query = {}
        if (req.query.itineraryid) {
            query = { ...query, itineraryid: req.query.itineraryid }
        }

        if (req.query.userId) {
            query = { ...query, userId: req.query.userId }
        }

        if (req.query.itineraryid) {
            try {
                let reactions = await Reaction.find(query) //defino variable que va a esperar la creacion de un nuevo documento (un usuario en este caso)

                res.status(201).json({//el status de exito de creacion es 201
                    reactions: reactions,
                    success: true,
                    messagge: 'seeTheReactions'
                })

            } catch (error) {
                res.status(400).json({
                    success: false,
                    messagge: 'reactionsNoSee',
                    error: error.status
                })
            }
        } else if (req.query.userId) {
            try {
                let reactions = await Reaction.find(query).sort({ itineraryId: "asc" }).populate("itineraryid", ["name", "photo"]);
                console.log(reactions);
                if (req.query.userId == req.user.id) {
                    res.status(201).json({
                        reactions: reactions,
                        success: true,
                        message: "The reaction are here",
                    });
                } else {
                    res.status(401).json({
                        success: false,
                        message: "Unauthorized",
                    });
                }
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: error.message,
                    error: error.status,
                });
            }
        }
    },


    deletea2: async (req, res) => {
        let { id } = req.params;

        try {
            let reaction = await Reaction.findOneAndUpdate(
                { _id: id },
                { $pull: { userId: req.user.id } },
                { new: true }
            );
            if (reaction) {
                res.status(200).json({
                    reaction: reaction,
                    message: "Reaction has deleted",
                    success: true,
                });
            } else {
                res.status(404).json({
                    message: "Reaction doesnt exist",
                    success: false,
                });
            }
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false,
            });
        }
    },

}
module.exports = controller //exporto el controlador