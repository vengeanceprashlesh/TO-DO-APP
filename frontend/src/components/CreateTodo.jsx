import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description
      })
    })
      .then(async (res) => {
        const json = await res.json();
        alert("Todo added");
        console.log(json);
      })
      .catch((err) => {
        console.error("Error adding todo:", err);
        alert("Failed to add todo");
      });
  };

  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />{" "}
      <br />
      <button style={{ padding: 10, margin: 10 }} onClick={handleAddTodo}>
        Add a todo
      </button>
    </div>
  );
}
