const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Prashlesh:kishan@cluster0.f3qlbuo.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: string,
    description: string,
    completed: boolean
})

const todo = mongoose.model("todos",todoSchema);

module.exports = {
    todo
}

