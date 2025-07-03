// write basic express boiler plate code 
// with express.json() middlewares

const express = require('express');
const app = express();

app.use(express.json());

app.post("/todos", function(req,res){

})

app.get("/todos", function(req,res){
   
})


app.put("/completed", function(req,res){
    
})