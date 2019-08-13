import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return(
        <div>TodoList
            <Todo dispatch={props.dispatch} />
        </div>
    )
}

export default TodoList;