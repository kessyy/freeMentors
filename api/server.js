import express from 'express';
import bodyParser from 'body-parser';
import signinValidate from '../api/controllers/signinValidate'
import userValidate from '../api/controllers/userValidate'


const app = express();
 //Parse incoming requests data
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

const api_version = 'v1';

const base_url = '/api/'+ api_version;

app.use('/home', (req, res) => {
  return res.status(200).json({ message: 'Hello and welcome to FreeMentors' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`)
});
module.exports = app
