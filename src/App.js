import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
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

  return (
    <div className="container1">
        <Header color="#fff" bgColor='steelblue' title='Task Tracker' ></Header>
        <Tasks tasks={tasks}></Tasks>
        <Footer></Footer>
    </div>
  );
}

export default App;
