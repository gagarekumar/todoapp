const mongoose =require('mongoose');
const Schema=mongoose.Schema;

const taskSchema = new Schema({
    
title :{type:String,required:true},
description :{type:String,required:true},

date :{type:Date,required:true},
label :{type:String}   ,
status:{type:String},
email:{type:String}

},
{
    timestamps:true,
});

const Task = mongoose.model('Task',taskSchema);

module.exports =Task;
