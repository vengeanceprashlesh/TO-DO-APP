// write basic express boiler plate code 
// with express.json() middlewares

const express = require('express');
const { createTodo, UpdateTodo } = require('./types');
const app = express();

app.use(express.json());

app.post("/todos", function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }
})

app.get("/todos", function(req,res){
   
})


app.put("/completed", function(req,res){
    const updatePayload = req.body
    const parsedPayload = UpdateTodo.safeParse(updatePayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
})