const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Permission1 = new Schema({
    name: {type: String},
    role_id: {type: Schema.Types.ObjectId},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
    deleted_at: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Permission1', Permission1);