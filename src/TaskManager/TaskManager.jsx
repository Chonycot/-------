/* import React, { useState } from 'react';
import AddTasks from './AddTasks/AddTasks';
import TaskList from './TaskList.jsx';

const TaskManager = () => {

    const [addTaskIsOpened, setAddTaskIsOpened] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState({});

    const onCloseAddTask = () => {
        setAddTaskIsOpened(false);
    }


    const onAdd = (e) => {
        
        console.log(`e:`, e);
        console.log(Object.values(e.target).reduce((obj, field) => { return obj }, {}));
        e.preventDefault();
        const obj = Object.values(e.target).reduce((obj, field) => { 
            obj[field.name] = field.value; 
            return obj 
        }, {});

        console.log(obj);

        setTask(obj)
        setTaskList([...taskList, obj]);

        const formData = new FormData(e.target);
        const obj = Object.fromEntries(formData.entries());
        console.log(obj);
        setTask(obj);
        setTaskList([...taskList, obj]);
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

 */

import React, { useState } from 'react';
import AddTasks from './AddTasks/AddTasks';
import TaskList from './TaskList.jsx';

const TaskManager = () => {
    const [addTaskIsOpened, setAddTaskIsOpened] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const onCloseAddTask = () => {
        setAddTaskIsOpened(false);
    };
    const onAdd = (e) => {
        e.preventDefault(); // предотвращаем перезагрузку страницы
        const formData = new FormData(e.target);
        const obj = Object.fromEntries(formData.entries());
        console.log("Добавленная задача:", obj);
        setTaskList((prev) => [...prev, obj]); // обновляем список задач
        setAddTaskIsOpened(false); // закрываем форму после добавления
    };
    return (
        <div className='tasks-container'>
            {addTaskIsOpened && <div className='middle-ware-for-pop-up'></div>}
            <button
                className='btn tasks-container_add-task-button'
                onClick={() => setAddTaskIsOpened(!addTaskIsOpened)}
            >
                Добавить задачу
            </button>
            {addTaskIsOpened && <AddTasks onClose={onCloseAddTask} onAdd={onAdd} />}
            <TaskList tasks={taskList} />
        </div>
    );
};

export default TaskManager;