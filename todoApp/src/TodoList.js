import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const INITIAL_STATE = [];
  const [todos, setTodos] = useState(INITIAL_STATE);

  const addTodo = (newTodo) => {
    setTodos((oldTodo) => [...oldTodo, { ...newTodo, id: uuid() }]);
  };

  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} task={todo.task} remove={remove} />
      ))}
    </div>
  );
};

export default TodoList;
