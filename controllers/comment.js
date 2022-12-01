const Comment = require('../models/Comments') //requiero el modelo que necesito controlar
const controller ={
    create: async (req,res) =>{ //la funcion async siempre depende de dos parametros, REQ requerimiento de la peticion y RES respuesta de la peticion
        try {
        let userId=req.user.id
        console.log(req.user.id);
        let new_comment  = await Comment.create(req.body) //defino variable que va a esperar la creacion de un nuevo documento (un usuario en este caso)
        res.status(201).json({//el status de exito de creacion es 201
            new_comment: {comment:new_comment.comment,
                         date:new_comment.date,
                        showId:new_comment.showId,
                        userId:userId,},
            success: true,
            messagge: 'Comment Create'
        }) 
        
        } catch (error) {
            res.status(400).json({
                success: false,
                messagge: 'commentNoCreated',
                error: error.status
            })
        }
        
        },
        getComments: async (req, res) => {
            let {showId} =  req.query
            console.log(showId);
            try {
              let arrayComment = await Comment.find({showId:showId}).sort({date:'desc'});
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
    }
    module.exports = controller //exporto el controlador