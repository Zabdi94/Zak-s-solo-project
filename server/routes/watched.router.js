const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  // GET route code here
  const sqlQuery = `
  SELECT * FROM user_films 
  WHERE user_id = $1
  `;

  const sqlValues = [req.user.id];
  pool
    .query(sqlQuery, sqlValues)
    .then((result) => {
      console.log("show:", result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.error("ERROR", error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  console.log("ROUTER POST", req.body.id);

  const sqlQuery = `
INSERT INTO "user_films"
("user_id", "films_id")
VALUES
($1, $2);
`;

  const sqlValues = [req.user.id, req.body.id];
  pool
    .query(sqlQuery, sqlValues)
    .then((dbRes) => {
      console.log(dbRes.rows);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error("DB POST ERROR", error);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  console.log("deleted from watchlist", req.params.id);
  const sqlQuery = `
  DELETE FROM "user_films"
  WHERE id =$1;
  `;
  const sqlValues = [req.params.id];
  pool
    .query(sqlQuery, sqlValues)
    .then((results) => {
      res.send(results.rows);
    })
    .catch((error) => {
      console.error("error in DELETE", error);
      res.sendStatus(500);
    });
});

router.put("/:id", (req, res) => {
  console.log("In put/update", req.params.id);

  const sqlQuery = `
  UPDATE "user_films"
  SET watched =$1
  WHERE id =$2;
  `;

  const sqlParams = [true, req.params.id];
  pool
    .query(sqlQuery, sqlParams)
    .then(() => {
      res.send(204);
    })
    .catch((error) => {
      console.error("error in PUT/update", error);
      res.sendStatus(500);
    });
});

module.exports = router;
