const Comment = require("../models/Comments"); //requiero el modelo que necesito controlar
const controller = {
  create: async (req, res) => {
    //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion
    try {
      let userid = req.user.id;
      console.log(req.body);
      let new_comment = await Comment.create({
        comment: req.body.comment,
        date: req.body.date,
        showId: req.body.showId,
        userId: userid,
      }); //defino variable que va a esperar la creacion de un nuevo documento (un usuario en este caso)
      res.status(201).json({
        //el status de exito de creacion es 201
        comment: new_comment,
        success: true,
        messagge: "Comment Create",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        messagge: "commentNoCreated",
        error: error.status,
      });
    }
  },
  getComments: async (req, res) => {
    let { showId } = req.query;
    console.log(showId);
    try {
      let arrayComment = await Comment.find({ showId: showId }).sort({
        date: "desc",
      });
      if (arrayComment) {
        res.status(200).json({
          response: arrayComment,
          success: true,
          message: "Array of comments",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "not Comment",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  editComment: async (req, res) => {
    let { id } = req.params;
    console.log(req.params);
    console.log(req.params);
    try {
      let commentUser = await Comment.findById(id);
      if (commentUser.userId.equals(req.user.id)) {
        let updateComment = await Comment.findByIdAndUpdate(
          { _id: id },
          req.body,
          {
            new: true,
          }
        );
        if (updateComment) {
          res.status(201).json({
            id: updateComment,
            success: true,
            messagge: "Comment Update",
          });
        } else {
          res.status(404).json({
            success: false,
            messagge: "Comment not found",
          });
        }
      } else {
        res.status(401).json({
          success: false,
          messagge: "Unauthorized",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        messagge: "Comment no update",
        error: error.status,
      });
    }
  },
  destroy: async (req, res) => {
    let { id } = req.params;
    try {
      let commentUser = await Comment.findById(id);
      if (commentUser.userId.equals(req.user.id)) 
      {
        let comment = await Comment.findOneAndDelete({ _id: id });
        if (comment) {
          res.status(201).json({
            id: comment._id,
            success: true,
            messagge: "Delete comment",
          });
        } else {
          res.status(404).json({
            success: false,
            messagge: "comment not found",
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
};
module.exports = controller; //exporto el controlador
