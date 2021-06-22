const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Provice = new Schema({
    name: {type: String},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
    deleted_at: {type: Date, default: Date.now},
    created_by: {type: String}
});

module.exports = mongoose.model('Provice', Provice);