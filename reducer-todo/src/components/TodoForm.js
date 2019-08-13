import React from 'react';

const TodoForm = () => {
    return(
        <form onSubmit={() => console.log('submitted')}>
        <input
          type="text"

        />
        <button>Add Todo</button>
        <button onClick={() => console.log('submitted')}>Clear Completed</button>
      </form>
    )
}

export default TodoForm;