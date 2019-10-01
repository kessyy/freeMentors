const express = require('express');
const bodyParser = require('body-parser');

const app = express();

 //Parse incoming requests data
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

app.use('/home', (req, res) => {
  return res.status(200).json({ message: 'Hello and welcome to FreeMentors' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`)
});
module.exports = app
