import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = {
    task: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...formData });
    setFormData(INITIAL_STATE);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  return (
    <form onSubmit={handleChange}>
      <label htmlFor="todo">Todo: </label>
      <input
        id="todo"
        name="task"
        placeholder="TodoItem"
        value={formData.task}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default NewTodoForm;
