const mongoose =require('mongoose');
const Schema=mongoose.Schema;

const registerSchema = new Schema({
    
email :{type:String,required:true},
password :{type:String,required:true}

});

const Register = mongoose.model('Register',registerSchema);

module.exports =Register;
