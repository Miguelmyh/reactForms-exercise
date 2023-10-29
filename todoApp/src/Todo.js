import React from "react";

const Todo = ({ id, remove, task }) => {
  return (
    <div>
      <p>{task}</p>
      <button onClick={() => remove(id)}>X</button>
    </div>
  );
};

export default Todo;
