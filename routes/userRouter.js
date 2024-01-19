const express = require("express")
//client kullanmak icin poscClinet cagirdim
const router = express.Router()
const postgresClient = require("../db")



//create User dDOC
//https://node-postgres.com/features/queries
//const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
// const values = ['brianc', 'brian.m.carlson@gmail.com']
// const res = await client.query(text, values)
// console.log(res.rows[0])
router.post("/",async(req,res)=>{
    console.log(req.body)
    try {
        //burda $1 email temsildere password sifelemeyaptogimiy ivcin crypt sarmarladik TRURN UNUTMA GERI DONMESI ICIN
        const text = "INSERT INTO users (email, password, fullname) VALUES ($1, crypt($2, gen_salt('bf')), $3) RETURNING *"

        const values = [req.body.email, req.body.password, req.body.fullname]
        const results = await postgresClient.query(text,values)
        console.log(results);
    } catch (error) {
        console.log("error creee0",error.message)
        return res.status(400).json({
            message:error.message
        })
    }

})


module.exports = router
