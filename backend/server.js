const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
    

require('dotenv').config();

const app = express();
const port= process.env.PORT  || 5000;

app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;

mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Connection to mongodb is successfull");
})

const exercisesRouter = require('./routes/tasks');
const usersRouter = require('./routes/users');
const completedTaskRouter = require('./routes/ctasks');
const newTaskRouter=require('./routes/ntasks');
const labels=require('./routes/labels');
const registrations=require('./routes/register');
const sessions = require('./routes/login');

app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);
app.use('/ctasks',completedTaskRouter);
app.use('/ntasks',newTaskRouter);
app.use('/labels',labels);
app.use('/registrations',registrations);
app.use('/sessions',sessions);

app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);

});
