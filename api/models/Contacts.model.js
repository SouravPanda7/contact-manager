const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    fname:{type: 'string',required: true},
    phone:{type: 'string',required: true},
    email:{type: 'string',required: true},
    type:{type: 'string',required: true},
    userid:{type: mongoose.Schema.Types.ObjectId, required: true}
})
module.exports = mongoose.model('Contact',contactSchema);