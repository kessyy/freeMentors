import config from'../helpers/config';
import {Token, hashPassword, comparePassword, validateLogIn} from '../controllers/userValidate';
import validateLogIn from '../controllers/signinValidate';
import { newUser } from '../helpers/helpers';


/**
 * @param {res} object
 * @param {req} object
 *creating a signup*/

 let id = 1;
 let data;
const signup = (req, res) => {
  const { error } = validateSignUp(req.body);
  if (error) {
    return res.status(422).json({status: 422, message: error.details[0].message,
    });
  }
  
const {
  firstName, lastName, email, address, password,
} = req.body;

const checkEmail = newUser.Email(email);
  if (thisNode.data) {
    res.status(422).json({ status: 422, error: 'email already exists' });
    return;
  }
const userInfo = [id, firstName, lastName, email,
  address, Password, isAdmin];
  id += 1;
  newUser.user(...userInfo);
  const token = Token(newUser.head.data.email);
  data = newUser.head.data;
  res.status(201).json({
  status: 201, Created: 'true', token, data,
  });
  return;
};

/**
 * @param {req} object
 * @param {res} object
 * user signin */
const signin = (req, res) => {
  const { error } = validateLogIn(req.body);
  if (error) {
    return res.status(422).json({
      status: 422, message: error.details[0].message,
    });
  }

const { email, password } = req.body;
  if (newUser.head === undefined || null) {
    return res.status(404).json({ status: 404, error: 'you must be a user to signin' });
  }
const cp = comparePassword(newUser.head.data.password, password);
const result = Object.assign(newUser.Email(email));
const { bool, thisNode } = result;
  if (bool && cp) {
   const token = Token(email);
    data = thisNode;
    return res.status(200).json({
    status: 200, Success: 'true', token, data,
    });
   }
  return res.status(401).json({
  status: 401, message: 'not authorised',
   });
 };
module.exports = {
  signup,
  signin,
};
