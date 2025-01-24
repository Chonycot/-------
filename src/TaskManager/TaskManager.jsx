import React, { useState } from 'react';
import AddTasks from './AddTasks/AddTasks';

const TaskManager = () => {

    const [addTaskIsOpened, setAddTaskIsOpened] = useState(false);

    return (
        <div className='tasks-container'>
            <p>task manager</p>
            <button className='btn tasks-container_add-task-button' onClick={() => setAddTaskIsOpened(!addTaskIsOpened)}>
                Добавить задачу
            </button>
            {addTaskIsOpened && <AddTasks />}
        </div>
    );
}

export default TaskManager;