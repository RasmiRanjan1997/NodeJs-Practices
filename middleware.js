const express = require('express');
const reqFile = require('../NodePractices/commonMiddleW');
const route = express.Router();

const app = express();
route.use(reqFile)



// app.use(reqFile) // application level routeWare

app.get('/', (req, resp) =>{
    resp.send("Welcome to Home Page");
});

app.get('/user', (req, resp) =>{
    resp.send("Welcome to user Page");
});

route.get('/about', (req, resp) =>{
    resp.send("Welcome to abut page");
});

route.get('/contact', (req, resp) =>{
    resp.send("Welcome to Contact page");
});

app.use('/', route)

app.listen(4200)