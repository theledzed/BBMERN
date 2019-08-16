const express = require("express")
const movies = express.Router()
const cors = require("cors")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")

const Movie = require("../models/Movie")

movies.use(cors())

process.env.SECRET_KEY = 'secret'

movies.post('/register/movie', (req, res) =>{
    const today = new Date()
    const movieData = {
        tittle: req.body.tittle,
        director_name: req.body.director_name,
        date: req.body.date,
        time: req.body.time,
        today: today
    }

    Movie.findOne({
        tittle: req.body.tittle
    })
    .then(movie =>{
        if(!movie){
            bcrypt.hash(() =>{
                Movie.create(movieData)
                .then(movie =>{
                    res.json({ status: movie.tittle + ' registered!'})
                }).catch((e)=>{
                    res.send('error: ' +  e )
                    
                })
            })
        }else{
            res.json({error: 'Movie already exists '})
        }
    })
    .catch(e =>{
        res.send('error: ' + e)
    })

})

movies.get('/movie/register', (req, res) =>{
      Movie.find()
      .then(movie => {
          if(movie){
              res.json(movie)
          }else{
              res.send("User does not exist")
          }
      }).catch((e) =>{
          res.send('error: ' + e)
      })
  })

module.exports = movies 