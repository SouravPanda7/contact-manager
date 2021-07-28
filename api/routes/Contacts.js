const express = require('express');
const router = express.Router();
const contactsController = require('../Controller/contact.controller')
const auth = require('../middleware/auth')
const multer = require('multer');
const upload = multer({dest:"uploads/"})


router.get('/:userid',auth,contactsController.getContactsbyuser)

router.post('/save/:userid',auth,contactsController.save)

router.put('/update/:id',auth,contactsController.update)

router.delete('/delete/:id',auth,contactsController.delete)

router.get('/search/:id',auth,contactsController.search)

router.post('/upload',upload.single('imagefile'),(req,res)=>{
    res.status(200).json({
        details: req.file
    })
})

module.exports = router;