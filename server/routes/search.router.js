const express = require('express')
const pool = require('../modules/pool')
const router = express.Router()


router.get('/', (req,res) => {
    const queryText = `
    SELECT * FROM "films" ORDER BY "title" ASC
    `;
    pool.query(queryText)
    .then (result => {
        res.send(result.row);
    })
    .catch (error => {
        console.log('error: GET MOVIES',error);
        res.sendStatus(500)
    })
})
