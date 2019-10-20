import Joi from '@hapi/joi';

const validateLogin = (info) => {
    const schema =
     Joi.object().keys({
      email: Joi.string().email({minDomainAtoms: 2 }).lowercase().required().label("Valid Email Address is required"),
      password: Joi.string().min(8).required(),
    });
    return Joi.validate(info, schema);
  ;
}
export default () => {
    const validationOptions = {
        abortEarly: false, // Abort after the last validation error
        allowUnknown: true // allow unknown keys that will be ignored
    }

    // return the validation middleware
    return (req, res, next) => {

        return joi.validate(req.body, validateLogin, validationOptions, (err, data) => {
            if(err) {

                const errors = [];
                err.details.map((e) => {
                     errors.push({field: e.path[0], message: e.message.replace(/"/g, '_').split('_')[1]});
                });

                const error = {
                    status: 400,
                    error: errors
                }

                // Send back the JSON error response
                res.status(400).json(error);
            } else {
                // Replace req.body with the data after validation
                req.body = data;
                next();
            }
        });
    }

    next();
};