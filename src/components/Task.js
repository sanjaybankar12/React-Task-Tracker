import { FaTimes } from 'react-icons/fa';

const Task = ({task}) => {
    
    return(
        <div className="task">
            <h5>{task.text} <FaTimes style={{float:'right',color:'red',cursor:'pointer'}}/></h5>
            <p>{task.day}</p>
        </div>
    );
}

export default Task;