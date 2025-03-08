import React, { useState } from 'react';
import AddTasks from './AddTasks/AddTasks';
import TaskList from './TaskList.jsx';

const TaskManager = () => {
    const [addTaskIsOpened, setAddTaskIsOpened] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const onCloseAddTask = () => {
        setAddTaskIsOpened(false);
    };

    const onAdd = (taskData) => {
        console.log("Добавление задачи:", taskData);
        setTaskList((prevList) => [...prevList, taskData]);
        setAddTaskIsOpened(false); // Закрываем форму после добавления
    };

    return (
        <div className='tasks-container'>
            {addTaskIsOpened && <div className='middle-ware-for-pop-up'></div>}
            <button
                className='btn tasks-container_add-task-button'
                onClick={() => setAddTaskIsOpened(true)}
            >
                Добавить задачу
            </button>
            {addTaskIsOpened && <AddTasks onClose={onCloseAddTask} onAdd={onAdd} />}
            <TaskList tasks={taskList} />
        </div>
    );
};

export default TaskManager;
