const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const admin = require('firebase-admin');

// Create instance of Express app
const app = express();

// Setting Engine to HTMl for rendering Files
app.engine('html', require('ejs').renderFile); // app.set('veiw engine', 'ejs');
app.set('view engine', 'html');

// We also want to send JS, Css, Images and other Static Files
app.use(express.static('public'));
// Set path for Render the static Files(Folders)
app.set('public', __dirname + '/views');

// Give the Server Access To the User input
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(logger('dev'));



// routes
app.get('/', (req, res) => {
    res.render("home.html");
})
module.exports = app;