const express = require('express')
const app = express();
const port = process.env.port || 5000;
const cors = require('cors');
const categories = require('./Data/Course_category.json');

app.use(cors());


app.get('/',(req,res)=>{
    res.send(categories)
})
app.listen(port,()=>console.log('tech mentor server running on:',port))