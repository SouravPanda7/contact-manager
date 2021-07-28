const secretkey = "sourav@123"
const User = require('../models/User.model');
const bcrypt = require('bcryptjs');
const joi = require('joi')
const jwt = require('jsonwebtoken')

exports.users = async(req,res)=>{
    try{
        var users = await User.find();
        res.status(200).json({
            message:"UserData fetched successsfully",
            UserData:users
        })
    }
    catch(err){
        res.status(500).json({
            message:"Unexpected error occured or no data found",
            error: err
        })
    }

}

exports.register=async(req,res)=>{
    const userSchema = joi.object({
        fname:joi.string().required().min(4),
        phone:joi.string().required().min(10),
        email:joi.string().required(),
        password:joi.string().required().min(8)
    })
    try{
        userFields = await userSchema.validateAsync(req.body)
        let user = await User.findOne({email:userFields.email})
        let phone = await User.findOne({phone:userFields.phone})
        if(!user && !phone){
            user = new User(userFields);
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password,salt);
            await user.save();
            res.status(200).json({
                message:"User Registered successfully",
                UserData:User
            })
        }
        else{
            res.status(500).json({
                message:"User already registered with same email id or phone number or both try logging in"
            })
        }
    }
    catch(err){
        res.status(400).json({
            message:"Unexpected error occured",
            error:err
        })
    }
}
 
exports.login =async(req,res)=>{
    var loginSchema=joi.object({
        email:joi.string().required(),
        password:joi.string().required()
    })
    try{
        const loginFields =await loginSchema.validateAsync(req.body);
        let user = await User.findOne({email:loginFields.email});
        if(!user){
            res.status(400).json({
                message:"Invalid Username/Password"
            })
        }
        else{
            const is_match = await bcrypt.compare(loginFields.password,user.password)
            if(!is_match){
                res.status(400).json({
                    message:"Invalid Username/Password"
                })
            }
            else{
                const payload = {
                    userData:{
                        id:user._id
                    }
                }
                const token = await jwt.sign(payload,secretkey,{expiresIn:3600});
                res.status(200).json({
                    message:"logged in successfully",
                    userdata:{id:user._id,name:user.fname},
                    token:token
                })
            }
        }
    }
    catch(err){
        res.status(500).json({
            message:"Unexpected error occured",
            error:err
        })
    }
}
