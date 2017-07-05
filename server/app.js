const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
var mongooseDB =  require('mongoose');
mongooseDB.Promise =  global.Promise;
mongooseDB.connect('mongodb://<dbuser>:<dbpassword>@ds149412.mlab.com:49412/demo');



var app = express();
var port = process.env.PORT || 3000;

app.get('/test', function (req, res) {
  res.status(200).send({message: 'App working fine :)!'});
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressValidator());

app.listen(port, (res) => {
  console.log(`App started at port :: ${port} !`);
});


module.exports = {mongooseDB};
