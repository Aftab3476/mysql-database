require('isomorphic-fetch');
const express = require('express')
const db = require('./../config/db');

const router = express.Router()

router.get('/',  (req, res) => {
   res.send({message : "this is my first Api"})
})

router.get('/getBlog', (req, res) => {
    try {
        let query = 'SELECT * FROM products ORDER BY name DESC limit 2'
        db.query(query, async function (error, results, fields){
            if(error){
               return res.json({message:"error in fetchimg data from db"})
            }
            res.json({message:"all blog", data : results})
        })
        db.end();
    } catch (error) {
        console.log("Error in fetching", error)
       
    }
})

// router.get('/getBlog/:id', async (req, res) => {
//     let id = req.params.id
//     try {
//         const result = await fetch('https://dummyjson.com/products/'+id)
//         const response = await result.json()
//         res.json({message:"all blog", data : response})
//     } catch (error) {
//         res.json({status : 0, message:error.message})
//     }
// })

module.exports = router