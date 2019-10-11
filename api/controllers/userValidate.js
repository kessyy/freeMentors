import joi from 'joi';
            
const userSchema =  Joi.object().keys({
    firstName: joi.string().regex(/^[A-Za-z]+$/).lowercase().required().label("Only alphabetic characters are allowed"),
    lastName: joi.string().regex(/^[A-Za-z]+$/).lowercase().required().label("Only alphabetic characters are allowed"),
    email: joi.string().email({minDomainAtoms: 2 }).lowercase().required().label("Valid Email Address is required"),
    address: Joi.string().trim().required(),//required
    password: joi.string().min(8).regex(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/).required()
              .label('At least one uppercase and lowercase letter, one digit, and special character required for valid password'),
    type: joi.string().lowercase().valid(['user', 'admin']).label("user or admin"),
    isadmin: joi.boolean().allow(true, false).label('isadmin can be either boolean true or false')
     });
return Joi.validate(userSchema);

export default () => {
    const validationOptions = {
        abortEarly: false, // Abort after the last validation error
        allowUnknown: true, // allow unknown keys that will be ignored
    }

    // return the validation middleware
    return (req, res, next) => {
        return joi.validate(req.body, userSchema, validationOptions, (err, data) => {
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
};