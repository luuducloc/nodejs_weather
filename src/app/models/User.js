const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema ({
    last_name: {type: String},
    first_name: {type: String},
    email: {type: String},
    password: {type: String},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
    deleted_at: {type: Date, default: Date.now},
});

module.exports = mongoose.model('User', User)