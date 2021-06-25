const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Permission_role = new Schema({
    permission_id: [{type: Schema.Types.ObjectId}],
    role_id: {type: Schema.Types.ObjectId},
});

module.exports = mongoose.model('Permission_role', Permission_role);