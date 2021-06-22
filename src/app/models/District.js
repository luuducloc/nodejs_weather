const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const District = new Schema({
    name: {type: String},
    provice_id: {type: String},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
    deleted_at: {type: Date, default: Date.now},
    created_by: {type: String}
});

module.exports = mongoose.model('District', District);