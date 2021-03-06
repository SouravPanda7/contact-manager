const mongoose = require('mongoose');
const config = require('./db.config');

const dbconn = async() =>{
    try{
        await mongoose.connect(config.uri,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
            console.log(`Connected to database`);
        })
    }
    catch(err){
        console.log(err)
    }
}

module.exports = dbconn;