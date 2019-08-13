import React, { useReducer } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import { initialState, Reducer }  from './reducers/reducer';


function App() {
  const [ state, dispatch ] = useReducer(Reducer, initialState);

  console.log(state)

  return (
    <div className="App">
      <TodoForm dispatch={dispatch} />
      <TodoList dispatch={dispatch} />
    </div>
  );
}

export default App;
