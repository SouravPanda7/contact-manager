const mongoose = require('mongoose');
const playerSchema = mongoose.Schema({
    playerName:{type: 'string',required: true},
    playerCountry:{type: 'string',required: true},
    playerSports:{type: 'string',required: true},
    playerMatches:{type: 'string',required: true},
    playerAchievements:{type: 'string',required: true}
})
module.exports = mongoose.model('Player',playerSchema);