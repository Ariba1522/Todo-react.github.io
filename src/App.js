import './App.css';
import {Todos} from "./my_component/Todos";
import {AddTodo} from "./my_component/AddTodo";
import React, { useState } from 'react';


function App(){
 const onDelete=(todo)=>{
   console.log("I am onDelete of ToDo",todo);
   setTodos(todos.filter((e)=>{
     return e!==todo;
   }));
 }

 const addTodo=(title,desc)=>{
console.log("i am adding this todo",title,desc)
let sno = todos[todos.length-1].sno+1;
const myTodo={
  sno:sno,
  title:title,
  desc:desc,
}
setTodos([...todos,myTodo]);
console.log(myTodo);
 }
const [todos ,setTodos] = useState([{
      sno:1,
      title:"Go to the market",
      desc:"You need to buy vegetables"
    },
    {
      sno:2,
      title:"Go to the mall",
      desc:"You need to buy clothes"
    },
    {
      sno:3,
      title:"Go to the Gym",
      desc:"You need to burn calories"
    }

  ]);
   return(
   <>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">To-Do List</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ABOUT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<AddTodo addTodo={addTodo}/>
<Todos todos={todos} onDelete={onDelete}/>



</>
  );
  }

export default App;
