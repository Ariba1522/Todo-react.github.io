import React from 'react'
import {TodoItem} from "../my_component/TodoItem";

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="my-3">To-Dos List</h3>
            {props.todos.length===0? <h6 >No To-Dos to display</h6> :
            props.todos.map((todo)=>{
            return<TodoItem todo={todo} onDelete={props.onDelete}/>
        })}
        </div>
    )
}
