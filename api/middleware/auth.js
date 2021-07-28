const jwt = require('jsonwebtoken');
const secretkey = "sourav@123"
const auth =async (req,res,next)=>{
    if(req.header('x-auth-token')){
        const token = req.header('x-auth-token');
        try{
            const match = await jwt.verify(token,secretkey);
            next();
        }
        catch(err){
            res.status(401).json({
                message:"Unauthorised access"
            })
        }
    }
    else{
        res.status(401).json({
            message: "unauthorised access"
        })
    }
}
module.exports = auth;