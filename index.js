const express = require('express')
const app = express();
const port = process.env.port || 5000;
const cors = require('cors');
const categories = require('./Data/Course_category.json');
const courses = require('./Data/course.json')

app.use(cors());

//API for loading categories
app.get('/categories',(req,res)=>{
    res.send(categories)
})
//API for loading specific category according to ID
app.get('/categories/:id',(req,res)=>{
    const id = req.params.id;
    const course = courses.find(course => course.category_id == id);
    res.send(course)
})
//api for courses
app.get('/courses',(req,res)=>{
    res.send(courses)
})
app.get('/checkout/:id',(req,res)=>{
    const id = req.params.id;
    const checkoutPage = courses.find(course => course._id === id);
    console.log(checkoutPage._id)
    res.send(checkoutPage)
})

app.listen(port,()=>console.log('tech mentor server running on:',port))