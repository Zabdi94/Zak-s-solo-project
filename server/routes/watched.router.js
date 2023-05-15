const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
  const sqlQuery = `
    SELECT * FROM user_films
    WHERE user_id = $1;
  `;
  const sqlValues = [req.user.id];

  pool
    .query(sqlQuery, sqlValues)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.error("ERROR", error);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  const sqlQuery = `
    INSERT INTO "user_films" ("user_id", "films_id")
    VALUES ($1, $2);
  `;
  const sqlValues = [req.user.id, req.body.id];

  pool
    .query(sqlQuery, sqlValues)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error("DB POST ERROR", error);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  const sqlQuery = `
    DELETE FROM "user_films"
    WHERE user_id = $1 AND films_id = $2;
  `;
  const sqlValues = [req.user.id, req.params.id];

  pool
    .query(sqlQuery, sqlValues)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error("error in DELETE", error);
      res.sendStatus(500);
    });
});

router.put("/:id", (req, res) => {
  const sqlQuery = `
    UPDATE "user_films"
    SET rating = $1
    WHERE user_id = $2 AND films_id = $3;
  `;
  const sqlValues = [req.body.rating, req.user.id, req.params.id];

  pool
    .query(sqlQuery, sqlValues)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.error("error in PUT/update", error);
      res.sendStatus(500);
    });
});

module.exports = router;
