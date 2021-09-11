const express = require('express');
const path = require('path');

const googleSignIn = require('./controller/googleSignIn');
let googleCreds = googleSignIn.getGoogleCreds();

global.appRootPath = __dirname;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())


app.get("/home", (req, res, next) => {
    // let homePath = global.appRootPath + "/views/home";

    res.render("home", { googleClientId: googleCreds.clientId });
});

app.post("/auth/google", (req, res, next) => {
    let reqBody = req.body;
});

app.listen(5999, (result) => {
    console.log("App is listening on " + 5999);
});
