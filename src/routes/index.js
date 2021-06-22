const newsRoute = require('./news');
const searchRoute = require('./search');
const loginRoute = require('./login');
const homeRoute = require('./home');
const registerRoute = require('./register');
const forgotPasswordRoute = require('./forgot-password');
const getUserRoute = require('./get-user');
const roleRoute = require('./role')

function route(app) {

    app.use('/', homeRoute);

    app.use('/login', loginRoute);

    app.use('/news', newsRoute);

    app.use('/search', searchRoute);

    app.use('/register', registerRoute);

    app.use('/forgot-password', forgotPasswordRoute);

    app.use('/user', getUserRoute);

    app.use('/role', roleRoute);
}

module.exports = route;