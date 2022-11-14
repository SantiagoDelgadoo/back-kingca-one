const Show = require("../models/Event");

const controller = {
  create: async (req, res) => {
    try {
      let new_show = await Show.create(req.body);
      res.status(201).json({
        id: new_show._id,
        success: true,
        message: "el show se creo satisfactoriamente",
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
      let show = await Show.findOneAndDelete({ _id: id });
      if (show) {
        res.status(201).json({
          id: show._id,
          success: true,
          messagge: "Delete Show",
        });
      } else {
        res.status(404).json({
          success: false,
          messagge: "Show not found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        messagge: "No Delete Show",
        error: error.status,
      });
    }
  },
};

module.exports = controller;
