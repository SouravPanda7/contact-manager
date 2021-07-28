const express = require('express');
const router = express.Router();
const Player = require('../models/Player');


router.get('/', async(req,res) => {
    try{
        var players = await Player.find();
        res.status(200).json({
            message:"Player Data Retrieved successfully",
            Player_Data:players
        })
    }
    catch(err){
        res.status(500).json({
            message:"Unexpected error occured or no data found",
            error: err
        })
    }

})


router.post('/save',async(req,res)=>{
    var playerData = {
        playerName:req.body.pname,
        playerCountry:req.body.pcountry,
        playerSports:req.body.psports,
        playerMatches:req.body.pmatches,
        playerAchievements:req.body.pachieve
    }
    try{
        var player = new Player(playerData)
        await player.save()
        res.status(200).json({
            message:"Player Data Registered successfully",
            playerData:player
        })
    }
    catch(err){
        res.status(500).json({
            message:"Unexpected error occured",
            error:err
        })
    }
})

router.put('/update/:id',async(req,res) => {
    var id = req.params.id;
    var playerData = {
        playerName:req.body.pname,
        playerCountry:req.body.pcountry,
        playerSports:req.body.psports,
        playerMatches:req.body.pmatches,
        playerAchievements:req.body.pachieve
    }
    try{
        var updatedData = await Player.findByIdAndUpdate(id,{$set:playerData});
        if(updatedData==null){
            res.status(404).json({
                message:"Data not found",
            })
        }
        else{
            res.status(200).json({
                message:"Data updated Successfully" 
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:"Unexpected error occured",
            error:err
        })
    }
})

router.delete('/delete/:id', async(req,res)=>{
    var id = req.params.id;
    try{
        var deletedData = await Player.findByIdAndDelete(id);
        if(deletedData == null){
            res.status(404).json({
                message:"No data found"
            })
        }
        else{
            res.status(200).json({
                message:"Player Data deleted successfully"
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:"Unexpected error occured",
            error:err
        })
    }
})

router.get('/search/:id', async(req,res)=>{
    var id = req.params.id;
    try{
        var player = await Player.findById(id);
        if(player != null){
            res.status(200).json({
                message:"Player Data fetched successfully",
                playerData: player
            })
        }
        else{
            res.status(404).json({
                message:"No data found"
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:"Unexpected error occured",
            error:err
        })
    }
})

module.exports = router;