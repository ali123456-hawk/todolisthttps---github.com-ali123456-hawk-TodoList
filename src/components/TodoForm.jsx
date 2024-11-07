import React, { useState, useEffect } from "react";

function TodoForm({ addTodo, isEditing, editingTodo, updateTodo, setIsEditing }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (isEditing && editingTodo) {
      setTitle(editingTodo.title);
      setDetails(editingTodo.details);
      setDueDate(editingTodo.dueDate);
    }
  }, [isEditing, editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !details || !dueDate) return alert("Please fill in all fields");

    const newTodo = {
      id: editingTodo ? editingTodo.id : Date.now(),
      title,
      details,
      dueDate,
    };

    if (isEditing) {
      updateTodo(newTodo);
    } else {
      addTodo(newTodo);
    }

    setTitle("");
    setDetails("");
    setDueDate("");
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTitle("");
    setDetails("");
    setDueDate("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      ></textarea>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">{isEditing ? "Update" : "Add"}</button>
      {isEditing && <button onClick={handleCancel}>Cancel</button>}
    </form>
  );
}

export default TodoForm;
