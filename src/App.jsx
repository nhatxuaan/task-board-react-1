import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const initialTasks = [
  { id: '1', title: 'Learn React', status: 'todo' },
  { id: '2', title: 'Build Todo App', status: 'in-progress' },
  { id: '3', title: 'Review PR', status: 'done' },
]


function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newStatus, setNewStatus] = useState ("");
  const [newTitle, setNewTitle] = useState("");




  const handleAdd=(e)=>{
    e.preventDefault();
    if(!newTitle.trim()){
      alert("Fill in the title blank, please!");
      return;
    }
    const newTask = {
      id: Date.now().toString(),
      title: newTitle,
      status: newStatus
    }

    setTasks ([...tasks, newTask]);
    setNewStatus("");
    setNewTitle("");
  }

  const handleDelete = (id) => {
    const newTasks = tasks.filter((item)=>(item.id!==id))
    setTasks(newTasks);
  };

  return (
    <>
      <form onSubmit={handleAdd} style = {{paddingBottom: '40px'}}>
          <div>
          <h1>1. Add Task</h1>
          <label>Title: </label>
          <input type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)} 
          />
          <select 
            value={newStatus}
            onChange = {(e)=>setNewStatus(e.target.value)}>
            
            <option>todo</option>
            <option>in-progress</option>
            <option>done</option>
          </select>

          <button type="submit">Submit</button>
        </div>
      </form>

      <div style = {{paddingBottom: '40px'}}>
        <h1>2. Task List</h1>
        {tasks.map((item) =>(
          <div key={item.id}>
            <strong>{item.title}</strong> - <span>{item.status}</span>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
      
      

      
    </>
  )
}

export default App
