import React from "react";

const Todo = props => {
  console.log(props);
  return (
    <div>
      <p>{props.todo.item}</p>
    </div>
  );
};

export default Todo;
