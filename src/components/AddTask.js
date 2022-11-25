import Button from "./Button";

import { useState } from 'react';

const AddTask = ({onAddTask}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
           alert('Please add a task'); 
           return;
        }

        onAddTask({text, day, reminder});

        setText('');
        setDay('');
        setReminder(false);
    }

    return(
        <form className="add-form" onSubmit={onSubmit}>
            <h3 className="text-center">Add Task to your List</h3>
            <br/>
            <div className="row">
                <label className="control-label" for="text">Task :</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} required className="form-control" name="text" placeholder="Add Text" />
            </div><br/>
            <div className="row">
                <label className="control-label" for="day">Day : </label>
                <input type="date" value={day} onChange={(e) => setDay(e.target.value)} className="form-control" name="day" />
            </div><br/>
            <div className="row">
                <label className="control-label" for="reminder">Set Reminder:</label>
                <input type="checkbox" checked={reminder} value={reminder}  onChange={(e) => setReminder(e.currentTarget.value)} className="form-control form-control-check" name="reminder" placeholder="Add Task" />
            </div><br/>
            <div style={{'text-align':'center'}}>
                <Button type="submit" text="Add Task"/>
            </div>
        </form>
    );
}

export default AddTask;