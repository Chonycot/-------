import React, { useState } from 'react';
import AddTasks from './AddTasks/AddTasks.jsx';
import TaskList from './TaskList.jsx';

const TaskManager = () => {

    const [addTaskIsOpened, setAddTaskIsOpened] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState({});

    const onCloseAddTask = () => {
        setAddTaskIsOpened(false);
    }
    console.log('1')
    const onAdd = (e) => {
        console.log(e)
        if (e != undefined) {
            const obj = Object.values(e.target).reduce((obj, field) => { obj[field.name] = field.value; return obj }, {});
            setTask(obj)
            setTaskList([...taskList, obj]);
        } else {
            console.log('ERROR')
            console.log(e)
        }
    }

    return (
        <div className='tasks-container'>
            {addTaskIsOpened && <div className='middle-ware-for-pop-up'></div>}
            <button className='btn tasks-container_add-task-button' onClick={() => setAddTaskIsOpened(!addTaskIsOpened)}>
                Добавить задачу
            </button>
            {addTaskIsOpened && <AddTasks onClose={onCloseAddTask} onAdd={onAdd} />}
            <TaskList tasks={taskList} />
        </div>
    );
}

export default TaskManager;