import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { todoReducer, initialState } from './reducers/reducer';

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

 const App = () =>{
  const [state, dispatch] = useReducer(todoReducer, initialState)
  return (
    <div>
      <TodoForm state = {state} dispatch= {dispatch}/>
      <TodoList state = {state} dispatch= {dispatch}></TodoList>
    </div>
  )
}
export default App