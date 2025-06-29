const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.json({mssg: 'Welcome to the Newly created Express Server app'})
})


app.listen(4000,()=>{
    console.log("Listening on port 4000 !!!")
})