var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const mongoURI = "mongodb+srv://cris:cris123@cluster0-h7cja.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("conected MONGODB");
  })
  .catch(e => {
    console.log(e);
  });


var Users = require('./routes/Users')
var Movies = require('./routes/Movies')

app.use('/users', Users)
app.use('/movies', Movies)

app.listen(port, ()=>{
    console.log("server is runin on port: " +  port);
    
})