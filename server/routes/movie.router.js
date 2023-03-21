const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const axios = require("axios");

// Get all the items from the movie
router.get("/", (req, res) => {
  // console.log('this is req/body',req)
  const search = req.params.search;
  axios({
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/now_playing/",
    params: {
      api_key: process.env.api_key,
      q: search,
      page: 1,
    },
  })
    .then((response) => {
      // console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log("error in GET", error);
      res.sendStatus(500);
    });
});

router.get("/", (req, res) => {
  // console.log('this is req/body',req)
  axios({
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/{movie_id}/",
    params: {
      api_key: process.env.api_key,
      movie_id: { movie_id },
    },
  })
    .then((response) => {
      // console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log("error in GET", error);
      res.sendStatus(500);
    });
});

module.exports = router;
