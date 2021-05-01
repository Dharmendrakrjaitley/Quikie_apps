const express = require('express')
const mongoose = require('mongoose');
const User = require('../models/User');
const router = express.Router();


router.post('/save', async (req, res) => {
    const user = new User(
        {
            id: req.body.id,
            name: req.body.name,
            username: req.body.username,
            email: req.body.email
        }
    )
    try {
        res.json(await user.save());

    } catch (error) {
        res.json(error)
    }
})


router.get('/', async (req, res) => {
    try {
        res.json(await User.find());
    }
    catch (error) {
        res.json(error)
    }
})


router.delete('/delete/:id', async (req,res)=>{
    try{
        res.json( await User.findOneAndDelete({id:req.params.id}))

    }catch(error)
    {
        res.json(error)
    }
})


module.exports = router;
