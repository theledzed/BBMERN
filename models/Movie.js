const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  id: {
    type: String
  },
  tittle: {
    type: String
  },
  director_name: {
    type: String,
    required: true
  },
  date: {
    type: Object,
    default: Date.now
  },
  time: {
    type: String,
    required: true
  },
  captchaToken:{
    type: String,
    required: true,
  }
});

module.exports = Movie = mongoose.model("movies", MovieSchema);
