//primero requiero el modelo que necesito para controlar
const Hotel = require("../models/Hotel");
// segundo defino el objeto controller (que va a controlar el modelo)

const controller = {
  //cada uno de los metodos son async
  //metodo para crear un documento de Usuario
  create: async (req, res) => {
    try {
      let new_hotel = await Hotel.create(req.body);
      res.status(201).json({
        id: new_hotel._id,
        success: true,
        message: "el usuario se creo satisfactoriamente",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  destroy: async (req, res) => {
    let { id } = req.params;
    try {
      let hotel = await Hotel.findOneAndDelete({ _id: id });
      if (hotel) {
        res.status(201).json({
          id: hotel._id,
          success: true,
          messagge: "Delete Hotel",
        });
      } else {
        res.status(404).json({
          success: false,
          messagge: "Hotel not found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        messagge: "No Delete Hotel",
        error: error.status,
      });
    }
  },

  updateHotel: async (req, res) => {
    let { id } = req.params;
    try {
      let update_Hotel = await Hotel.findByIdAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (update_Hotel) {
        res.status(201).json({
          id: update_Hotel._id,
          success: true,
          messagge: "Hotel Update",
        });
      } else {
        res.status(404).json({
          success: false,
          messagge: "Hotel not found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        messagge: "Hotel no update",
        error: error.status,
      });
    }
  },
};

//tercero exporto el controlador
module.exports = controller;
