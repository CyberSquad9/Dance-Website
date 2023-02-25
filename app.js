const express = require("express")
const path = require("path")
// const fs = require("fs")
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/contactDance', {useNewUrlParser: true, useUnifiedTopology: true});
const port = 801;

//DEFINE MONGOOSE SCHEMA
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });

const contact = mongoose.model('Contact', contactSchema);  

//EXPRESS STATIC STUFF
app.use(express.static('static'))
app.use(express.urlencoded())

// PUG STATIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory (views = folder) = its mean, aap template konse folder use karna chahte hai

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})//when we use template the always use render.

app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})//

// START THE SERVER
app.listen(port, ()=>{
    console.log(`This application started successfully on port ${port}`)
})
