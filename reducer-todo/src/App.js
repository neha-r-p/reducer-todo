import React, { useState, useReducer } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import { initialState, Reducer }  from './reducers/reducer';


function App() {
  const [ todoList, setTodoList ] = useState();

  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
