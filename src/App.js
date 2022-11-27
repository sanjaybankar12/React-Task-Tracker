import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import React, {useState, useEffect} from 'react';


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

  const toggleReminder = (id) => {
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
    <div className="container1">
        <Header color="#fff" showAdd={showAddTaskForm}  bgColor='steelblue' onToggleAdd={() => setShowAddTaskForm(!showAddTaskForm)} title='Task Tracker' ></Header>
        {showAddTaskForm ? <AddTask onAddTask={onAdd}></AddTask>:''}
        {tasks.length > 0 ? (<Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}></Tasks>):'No Task to display'}
        <Footer></Footer>
    </div>
  );
}

export default App;
