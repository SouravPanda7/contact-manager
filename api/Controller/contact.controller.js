const Contact = require('../models/Contacts.model')


exports.getContactsbyuser=async(req,res)=>{
    try{
        const contacts = await Contact.find({userid:req.params.userid}).populate('User.userid')
        console.log(contacts)
        if(contacts == null){
            res.status(404).json({
                message:"No contacts found"
            })
        }
        else{
            res.status(200).json({
                message:"Data Fetched successfully",
                Contacts:contacts
            })
        }
    }
    catch(err){
        res.status(404).json({
            message:"Unexpected error occured or No data found",
            error:err
        })
    }
}

exports.save=async(req,res)=>{

    var ContactData = {
        fname: req.body.fname,
        email: req.body.email,
        phone: req.body.phone,
        type: req.body.type,
        userid: req.params.userid
    }
    try{
        var ContactData = new Contact(ContactData)
        await ContactData.save()
        res.status(200).json({
            message:"Contact saved successfully",
            ContactData: ContactData
        })
    }
    catch(err){
        res.status(500).json({
            message:"Unexpected error occured",
            error:err
        })
    }
}

exports.update=async(req,res) => {
    var id = req.params.id;
    var ContactData = {
        fname:req.body.fname,
        phone:req.body.phone,
        email:req.body.email,
        type:req.body.type
    }
    try{
        var updatedData = await Contact.findByIdAndUpdate(id,{$set:ContactData});
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
}

exports.delete= async(req,res)=>{
    var id = req.params.id;
    try{
        var deletedData = await Contact.findByIdAndDelete(id);
        if(deletedData == null){
            res.status(404).json({
                message:"No data found"
            })
        }
        else{
            res.status(200).json({
                message:"Contact deleted successfully"
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:"Unexpected error occured",
            error:err
        })
    }
}

exports.search=async(req,res)=>{
    var id = req.params.id;
    try{
        var contact = await Contact.findById(id);
        if(contact != null){
            res.status(200).json({
                message:"Contact Found",
                contactData: contact
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
}