import React, { useState } from "react";

const TodoForm = props => {
  console.log(props);

  const [ formState, setFormState ] = useState()

  return (
    <form>
      <input type="text" />
      <button
        type="submit"
        onClick={event => {
          event.preventDefault();
          console.log("submitted");
          props.dispatch({ type: "ADD_TODO", payload: event.target.value });
        }}
      >
        Add Todo
      </button>
      <button
        onClick={event => {
          event.preventDefault();
          console.log("cleared");
        }}
      >
        Clear Completed
      </button>
    </form>
  );
};

export default TodoForm;
