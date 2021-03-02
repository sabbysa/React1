import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
const App =()=>{
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:"Doctor Apointment",
        day:"Feb 5th",
        reminder:true,
    },
    {
        id:2,
        text:"School Apointment",
        day:"Feb 6th",
        reminder:true,
    },
    {
        id:3,
        text:"Shopping Apointment",
        day:"Feb 5th",
        reminder:false,
    }
])
const deleteTask = (id) =>{
 setTasks(tasks.filter((task)=>task.id !== 
 id) )
}

//toggle reminder
const toggleReminder = (id)=>{
  setTasks(tasks.map((task)=>task.id === id ? {...task, reminder:
  !task.reminder} : task))
}
  return (
    <div className="container">
  <Header/>
  <AddTask/>
{tasks.length > 0 ? (<Tasks tasks={tasks} 
onDelete={deleteTask} onToggle={toggleReminder}/> )
: ('no task to show')}
    </div>
      
  ); 
}

 
export default App;
