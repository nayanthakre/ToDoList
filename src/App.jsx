import { useState } from 'react'
import AppName from './component/AppName';
import AddTodo from './component/AddTodo';
import TodoItem1 from './component/TodoItem1';
import Todoitem2 from './component/TodoItem2';
import "./App.css";



function App() {
 

  return ( 
  
  <center className="todo-container">  
    <AppName/>
    <AddTodo/>
    <div className='item-contianer'>
    <TodoItem1/>
  <Todoitem2/>
  </div>

    </center>

    
  );
}

export default App;