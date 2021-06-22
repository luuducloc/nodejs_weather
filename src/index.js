const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
const route = require('../src/routes/index');
const db = require('./config/db');

// connect db
db.connect();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(morgan('combined'));
app.use(cookieParser('sadfasdfasdfasdferqwadsgadfsa'));
// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))


//route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})