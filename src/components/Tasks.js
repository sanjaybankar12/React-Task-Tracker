import { useState } from 'react';
import Task from './Task';

const Tasks = ({tasks, onDelete, onToggle}) => {    

    return(
        <div className='tasks'>
            {tasks.map((task) => (
                <Task key={task.id} onToggle={onToggle} task={task} onDelete={onDelete}/>
            ))}
        </div>
    );
}

export default Tasks;