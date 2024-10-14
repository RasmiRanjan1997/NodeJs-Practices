const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');


// using the ejs for the view engine; this step is mendatory;
app.set('view engine', 'ejs')


// we are not use the static format;
// app.use(express.static(publicPath))


app.get('', (_, resp) =>{
    resp.sendFile(`${publicPath}/index.html`)
});


// using the ejs for the view engine;
app.get('/profile', (_, resp) =>{
    const user ={
        name: 'Rasmi',
        email: 'rasmi@gmail.com',
        city: 'hyderabad',
        skills: [
            'php', 'js', 'c++', 'java', 'node'
        ]
    }
    resp.render('profile', {user})
});

app.get('/Login', (_, resp) =>{
    resp.render('login')
});

app.get('/home', (_, resp) =>{
    resp.sendFile(`${publicPath}/home.html`)
})

app.get('/about', (_, resp) =>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('*', (_, resp) =>{
    resp.sendFile(`${publicPath}/pageNotFound.html`)
})




app.listen(4500)