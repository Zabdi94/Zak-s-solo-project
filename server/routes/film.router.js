const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// router.get('/', (req, res) => {
    
//     const sqlQuery = `
//     SELECT * FROM series 
//     WHERE user
//     _id = $1 AND watched =$2
//     ORDER BY "name" ASC;`;
    
//     const sqlValues = [ req.user.id ,false];
//     pool.sqlQuery (sqlQuery,sqlValues)
//     .then( result => {
//       console.log('show:',result.rows)
//       res.send(result.rows)
//     }).catch (error =>{
//       console.error('ERROR', error)
//       res.sendStatus(500)
//     })
  
  
//   });