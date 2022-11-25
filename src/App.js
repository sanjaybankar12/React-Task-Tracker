import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import React, {useState} from 'react';


const App = () => {

  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Shopping is already completed but some remaining we will plan for weekend',
        day:'23 Nov 22',
        reminder:false
    },
    {
        id:2,
        text:'Pragati Express EV coach id booked for 1 dec 22',
        day:'01 Dec 22',
        reminder:true
    }
]);

  const [showAddTaskForm,setShowAddTaskForm] = useState(false);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => ((task.id === id) ? {...task, reminder:!task.reminder} : task)));
  }

  const toggleAddTaskForm = () => {
    setShowAddTaskForm(!showAddTaskForm);
  }

  const onAdd = (task) => {
    let id = Math.floor(Math.random()*1000) + 1;
    let newTask = {id, ...task};
    setTasks([...tasks,newTask]);
  }

  return (
    <div className="container1">
        <Header color="#fff" showAdd={showAddTaskForm}  bgColor='steelblue' onToggleAdd={toggleAddTaskForm} title='Task Tracker' ></Header>
        {showAddTaskForm ? <AddTask onAddTask={onAdd}></AddTask>:''}
        {tasks.length > 0 ? (<Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}></Tasks>):'No Task to display'}
        <Footer></Footer>
    </div>
  );
}

export default App;
