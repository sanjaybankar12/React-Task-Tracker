import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import React, {useState, useEffect} from 'react';

import { BrowserRouter as Router, Route, Routes,Outlet } from 'react-router-dom';
import About from './components/About';


const App = () => {

  const [tasks, setTasks] = useState([]);

  const [showAddTaskForm,setShowAddTaskForm] = useState(false);

  useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks();
        setTasks(tasksFromServer);
      }
      getTasks();
  },[]);

  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    
    return data;
  }

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method :'DELETE'});

    setTasks(tasks.filter((task) => task.id !== id));
  }

   //fetch Task
   const fetchTask = async (id) => {
    const task = await fetch(`http://localhost:5000/tasks/${id}`, { method :'GET'});
    return task.json();
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updateTask = {...taskToToggle, reminder:!taskToToggle.reminder};

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
         method :'PUT', 
         headers:{
            'Content-Type':'application/json'
         },
         body:JSON.stringify(updateTask)
      });

      const data = await res.json();
    setTasks(tasks.map((task) => ((task.id === id) ? {...task, reminder:!task.reminder} : task)));
  }

  const onAdd = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
         method :'POST', 
         headers:{
            'Content-Type':'application/json'
         },
         body:JSON.stringify(task)
      });

      const data = await res.json();
      setTasks([...tasks, data]);
  }

  return (
    <Router>
      <div className="container1">
          <Header color="#fff" showAdd={showAddTaskForm}  bgColor='steelblue' onToggleAdd={() => setShowAddTaskForm(!showAddTaskForm)} title='Task Tracker' ></Header>
          <Routes>
            <Route  path='/' element={
              <>
                {showAddTaskForm ? <AddTask onAddTask={onAdd}></AddTask>:''}
                {tasks.length > 0 ? (<Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}></Tasks>):'No Task to display'}
              </>
              }
             />
            <Route path='about' element={<About/>}/>
            </Routes>
          <Footer></Footer>  
          <Outlet></Outlet>      
      </div>
    </Router>
  );
}

export default App;
