const router = require('express').Router();

let task = require('../models/task.model');


router.route('/:label').post((req,res)=>{
    task.find({email:req.body.email,label:req.params.label})
    .then(task=> res.json(task))
    .catch(err=>res.status(400).json('Error'+err));
});


module.exports = router