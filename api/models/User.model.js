const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    fname:{type: 'string',required: true},
    phone:{type: 'string',required: true},
    email:{type: 'string',required: true},
    password:{type: 'string',required: true},
})
module.exports = mongoose.model('User',userSchema);