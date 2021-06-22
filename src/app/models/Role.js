const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Role = new Schema({
    name: {type: String},
    user_id: {type: Schema.Types.ObjectId},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
    deleted_at: {type: Date, default: Date.now},
    created_by: {type: Schema.Types.ObjectId}
});

module.exports = mongoose.model('Role', Role);