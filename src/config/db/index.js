const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/rain_log_db', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect successfully!!!');
    } catch (e) {
        console.log('connect fail !!!!');
    }
}

module.exports = { connect };