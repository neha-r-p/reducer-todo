import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      Todo List
      {props.state.todos.map(todo => (
        <Todo key={todo.id} dispatch={props.dispatch} />
      ))}
    </div>
  );
};

export default TodoList;
