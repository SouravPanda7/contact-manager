const express = require('express');
const dbconn = require('./config/db.conn');
const app = express();
const logger = require('./middleware/logger');
const userroutes = require('./routes/User');
const contactroutes = require('./routes/Contacts');
const cors = require('cors')
const port = process.env.PORT || 3000;

const corsoption={
    "origin":"*"
}
app.use(cors(corsoption));
app.use(logger)
app.use(express.json());
app.use('/api/user',userroutes)
app.use('/api/contacts',contactroutes)
dbconn()

app.listen(port,()=>{
    console.log(`Server started at ${port}`)
})
