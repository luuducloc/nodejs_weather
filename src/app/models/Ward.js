const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Ward = new Schema({
    name: {type: String},
    district_id: {type: String},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
    deleted_at: {type: Date, default: Date.now},
    created_at: {type: String}
});

module.exports = mongoose.model('Ward', Ward);