import React, { useState } from 'react';


export const AddTodo = ({addTodo}) => {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
     <div className="container my-3">
         <h3>Add a To-Do</h3>
       <form onSubmit={submit}>
           <div className="mb-3">
           <label htmlFor="title" className="form-label">To-do Title</label>
          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter your To-Do title"/>
        </div>
        <div className="form-group">
          <label htmlFor="desc">To-Do Description</label>
          <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Enter To-Do"/>
      </div>
        <button type="submit" className="btn btn-sm btn-info">Add To-Do</button>
        </form>
    </div>
    )
}
