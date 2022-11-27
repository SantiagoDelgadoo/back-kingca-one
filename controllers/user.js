const User = require('../models/User') //requiero el modelo que necesito controlar
const bcryptjs = require ('bcryptjs')
const crypto = require ('crypto')
const accountVerificationEmail = require('./accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse,invalidCredentialsResponse } = require('../config/responses')
const jwt = require("jsonwebtoken");
const controller ={

userRegister: async (req, res, next)=> {
    let {name, lastName, photo, age, email, password, role} = req.body
let verified = false
let logged = false
let code = crypto.randomBytes (10) .toString ('hex')
    password = bcryptjs.hashSync(password, 10)
try {
    await User.create 
    ({name,
    lastName,
    photo,
    age,
    email,
    password,
    logged,
    role,
    verified,
    code})
await accountVerificationEmail(email,code)
return userSignedUpResponse (req, res)
} catch (error) {
    
}
},

verifyUser:async (req,res,next)=>{
    let {code}=req.params
    console.log(code);
    try{
        let user = await User.findOneAndUpdate({code:code},{verified:true},{new:true})
        if (user){
            return res.redirect("http://localhost:3000")
        }
        return userNotFoundResponse(req,res)
    }catch(error){
        next(error)
    }
},
signIn: async (req, res, next) => {
    const { password } = req.body;
    const { user } = req;
    console.log(user.password);
    try {
      const verifiedPassword = bcryptjs.compareSync(password,user.password);
      console.log(user.password);
      console.log(password);
      console.log(verifiedPassword);
      if (verifiedPassword) {
        const user1 = await User.findOneAndUpdate({ _id: user.id }, { logged: true }, {new: true});
        const token = jwt.sign(
          {
            id: user1._id,
            name: user1.name,
            photo: user1.photo,
            logged: user1.logged,
            role: user1.role,
          },
          process.env.KEY_JWT,
          { expiresIn: 60 * 60 * 24 }
        );
        return res.status(200).json({
          response: { user, token },
          success: true,
          message: "Welcome" + user1.name,
        });
      }
      return invalidCredentialsResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  signInWithToken: async (req, res, next) => {
    let { user } = req;
    try {
      return res.json({
        response: {
          user: {
            name: user.name,
            photo: user.photo,
            logged: user.logged,
            role: user.role,
          },
          success: true,
          message: "Welcome: " + user.name
        },
      });
    } catch (error) {
      next(error);
    }
  },

}
module.exports = controller //exporto el controlador