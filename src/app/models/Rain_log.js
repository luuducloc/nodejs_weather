const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Rain_log = new Schema({
    station_id: {type: String},
    data: {type: number},


});

module.exports = mongoose.model('Rain_log', Rain_log);