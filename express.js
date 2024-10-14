const express = require("express");
const app = express();

app.get("", (req, resp) => {
  // console.log(req.query.name);
  // resp.send('hello, this is  home page '+req.query.name)
  resp.send(`
        <h1>Wellcome to home page</h1>       
        <a href="/about">about page</a>
    `);
});

// send the html data;
app.get("/about", (req, res) => {
  res.send(`
    <input type="text" placeholder="enter your name" />
    <button>Save</button>
    <a href="/">Go to Home</a>
    `);
});

// send the json data;
app.get("/help", (req, res) => {
  res.send(
    [
        {
            name: 'pupunu',
            email: 'pupunu@gmail.com'
        },
        {
            name: 'kumar',
            email: 'kumar@gmail.com'
        },
        {
            name: 'Biswal',
            email: 'bi@gmail.com'
        },

    ]
  );
});

app.listen(4500);
