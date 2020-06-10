const router = require('express').Router();
let Register = require('../models/register.model');



router.route('/add').post((req,res)=>
{
    
    const email=req.body.email;
    const password = req.body.password;


    const newTask = new Register({
        email,
        password
    });

    newTask.save().
    then(()=>res.json({status:"created",username:email})).
    catch(err=>res.status(400).json('Error'+err));
});

module.exports=router