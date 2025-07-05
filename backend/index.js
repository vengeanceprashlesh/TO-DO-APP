// Basic Express boilerplate with express.json() middleware

const express = require('express');
const cors = require('cors'); // ✅ Needed for CORS middleware
const { createTodo, UpdateTodo } = require('./types');
const { todo } = require('./db');

const app = express();

// ✅ Middleware setup
app.use(express.json());
app.use(cors()); // ✅ FIXED: This was incorrect in your original

// ✅ POST /todos
app.post("/todos", async function (req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);

    if (!parsePayload.success) {
        return res.status(411).json({
            msg: "You sent the wrong inputs"
        });
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        msg: "Todo created"
    });
});

// ✅ GET /todos
app.get("/todos", async function (req, res) {
    const todos = await todo.find({});
    res.json({ todos });
});

// ✅ PUT /completed
app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = UpdateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "You sent the wrong inputs"
        });
    }

    await todo.updateOne(  // ✅ FIXED: Use updateOne or findByIdAndUpdate
        { _id: req.body.id },
        { completed: true }
    );

    res.json({
        msg: "Todo marked as completed"
    });
});

// ✅ Start server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
