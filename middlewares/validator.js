const validator = (schema) => [
  //pongo corchetes xq es una funcion del middleware
  (req, res, next) => {
    const data = schema.validate(req.body, {
      abortEarly: false,
    }); //propiedad del joi, cuando este en false y tenga por ej 5 errores va a mostrar los 5 y si esta en true al primer error que encuentre se frena
    if (data.error) {
      return res.status(200).json({
        success: false, //success= completado en criollito
        message: data.error.details.map(error => error.message), //details en este caso es una propiedad de joi
      });
    }
    next()
  },
];
module.exports = validator