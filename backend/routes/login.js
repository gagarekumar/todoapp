const router = require('express').Router();
let Register = require('../models/register.model');

router.route('/').post((req,res)=>{

    Register.find({email:req.body.email,password:req.body.password }).
    then(response => res.json(response))
    .catch(err=>res.status(400).json('Error'+err));
});
module.exports=router