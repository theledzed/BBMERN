const express = require("express");
const movies = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const moment = require("moment");

const Movie = require("../models/Movie");

movies.use(cors());

process.env.SECRET_KEY = "secret";

movies.post("/register/movie", (req, res) => {
  const today = new Date();
  const movieData = {
    tittle: req.body.tittle,
    director_name: req.body.director_name,
    date: req.body.date,
    time: req.body.time,
    today: today,
    captchaToken: req.body.captchaToken,
    createdAt: req.body.createdAt
  };

  //   const timecreated = Movie.find().skip(db.test.count()-1).forEach(printjson)

  //   console.log("timecreated", timecreated );

  //   if (timecreated > fecha) {
  //     console.log(
  //       "time",
  //       moment(timecreated).format("MMMM Do YYYY, h:mm:ss a"),
  //       ">",
  //       moment(fecha).format("MMMM Do YYYY, h:mm:ss a")
  //     );
  //   } else {
  //     console.log(
  //       "time",
  //       moment(timecreated).format("MMMM Do YYYY, h:mm:ss a"),
  //       "<",
  //       moment(fecha).format("MMMM Do YYYY, h:mm:ss a")
  //     );
  //   }

  Movie.findOne({
    tittle: req.body.tittle
  })
    .then(movie => {
      if (!movie && req.body.captchaToken !== "") {
        bcrypt.hash(() => {
          Movie.create(movieData)
            .then(movie => {
              res.json({ status: movie.tittle + " registered!" });
            })
            .catch(e => {
              res.send("error: " + e);
            });
        });
      } else {
        res.json({ error: "Movie already exists " });
      }
    })
    .catch(e => {
      res.send("error: " + e);
    });
});

movies.get("/movie/register", (req, res) => {
  Movie.find()
    .then(movie => {
      if (movie) {
        res.json(movie);
      } else {
        res.send("User does not exist");
      }
    })
    .catch(e => {
      res.send("error: " + e);
    });
});

movies.post("/deleted/movie", (req, res) => {
  Movie.remove({ _id: req.body._id })
    .then(movie => {
      res.json({ status: movie.tittle + " registered!" });
    })
    .catch(e => {
      res.send("error: " + e);
    });
});

movies.put("/update/movie", (req, res) => {
  Movie.update(
    { _id: req.body._id },
    {
     tittle: req.body.tittle,
     director_name: req.body.director_name,
     date: req.body.date,
     time: req.body.time,
    }
  )
    .then(movie => {
      res.json({ status:  req.body.tittle + " updated!" });
    })
    .catch(e => {
      res.send("error: " + e);
    });
});

module.exports = movies;
