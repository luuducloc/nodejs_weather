const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Station = new Schema({
    name: {type: String},
    district_id: {type: String},
    ward_id: {type: String},
    provices_id: {type: String},
    status: {type: Boolean},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
    deleted_at: {type: Date, default: Date.now},
    created_by: {type: String}
});

module.exports = mongoose.model('Station', Station);