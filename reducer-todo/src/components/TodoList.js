import React from "react";
import Todo from "./Todo";

const TodoList = props => {

    console.log("state", props.state)
  return (
    <div>
      <h1>Todo List</h1>
      {props.state.todos.map(todo => (
        <Todo key={todo.id} todo={todo} dispatch={props.dispatch} />
      ))}
    </div>
  );
};

export default TodoList;
