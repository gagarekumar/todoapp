const router =  require('express').Router();
let User = require('../models/user.model');


router.route('/').post((req,res)=>{
    User.find({email:req.body.email})
    .then(users => res.json(users))
    .catch(err=>res.status(400).json('Error:'+err));
});

router.route('/add').post((req,res)=>
{
    const username=req.body.username;
    const email=req.body.email;
    const newUser= new User({
        email,
        username
    })
    newUser.save().
    then(()=>res.json('User Added!!')).catch(
        err=>res.status(400).json('Error'+err)
    );
});

module.exports=router;