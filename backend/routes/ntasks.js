const router = require('express').Router();
let tn = require('../models/task.model');

router.route('/').post((req,res)=>{
    tn.find({status:"new",email:req.body.email}).
    then(tasks=> res.json(tasks))
    .catch(err=>res.status(400).json('Error'+err));
});


module.exports = router
