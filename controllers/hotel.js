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
        response: new_hotel,
        success: true,
        message: "el Hotel se creo satisfactoriamente",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  read: async (req, res) => {
    let query = {};
    let order = {};
    if (req.query.name) {
      query = { name: { $regex: req.query.name, $options: "s && i" } };
    }
    if (req.query.order) {
      order = { name: req.query.order };
    }
    if (req.query.userId) {
      query = { ...query, userId: req.query.userId };
    }

    console.log(req.query.name);
    try {
      let arrayHotels = await Hotel.find(query).sort(order);
      if (arrayHotels) {
        res.status(200).json({
          response: arrayHotels,
          success: true,
          message: "el hotel se creo correctamente",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "no hay hoteles",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  readHotel: async (req, res) => {
    let { id } = req.params;
    try {
      let hotel = await Hotel.findById({ _id: id }).populate(
        "userId",
        "name & photo"
      );
      res.status(200).json({
        id: hotel,
        success: true,
        message: "read hotel",
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
      let hotelUser = await Hotel.findById(id);
      if (hotelUser.userId.equals(req.user.id)) 
      {
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
      }
      else {
        res.status(401).json({
          success: false,
          messagge: "Unauthorized",
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
      let hotelUser = await Hotel.findById(id);
      if (hotelUser.userId.equals(req.user.id)) {
        let update_Hotel = await Hotel.findByIdAndUpdate({ _id: id }, req.body, {
          new: true,
        });
        if (update_Hotel) {
          res.status(201).json({
            id: update_Hotel,
            success: true,
            messagge: "Hotel Update",
          });
        } else {
          res.status(404).json({
            success: false,
            messagge: "Hotel not found",
          });
        }
      }
      else {
        res.status(401).json({
          success: false,
          messagge: "Unauthorized",
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
