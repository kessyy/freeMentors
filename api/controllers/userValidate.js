import Joi from'@hapi/joi';
import bcrypt from'bcryptjs';
import jwt from 'jsonwebtoken';
import config from'../helpers/config';
import user from'../src/models/db';
import newUser from '../helpers/helpers';

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8));
const comparePassword = (hPassword, password) => bcrypt.compareSync(password, hPassword);
      
const Token = (email) => {
    const token = jwt.sign({ user: email }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    }); return token;
  };
const validateSignUp = (user) => {
    const schema =  Joi.object().keys({
    firstName: Joi.string().regex(/^[A-Za-z]+$/).lowercase().required().label("Only alphabetic characters are allowed"),
    lastName: Joi.string().regex(/^[A-Za-z]+$/).lowercase().required().label("Only alphabetic characters are allowed"),
    email: Joi.string().email({minDomainAtoms: 2 }).lowercase().required().label("Valid Email Address is required"),
    address: Joi.string().trim().required(),//required
    password: Joi.string().min(8).regex(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/).required()
              .label('At least one uppercase and lowercase letter, one digit, and special character required for valid password'),
    type: Joi.string().lowercase().valid(['user', 'admin']).label("user or admin"),
    isadmin: Joi.boolean().allow(true, false).label('isadmin can be either boolean true or false')
     });
return Joi.validate(user, schema);
    }
export default () => {
    Token,
    comparePassword,
    hashPassword
    const validationOptions = {
        abortEarly: false, 
        allowUnknown: true, 
    }

    return (req, res, next) => {
        return joi.validate(req.body, validateSignUp, validationOptions, (err, data) => {
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