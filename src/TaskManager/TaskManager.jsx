import React, { useState } from 'react';
import AddTasks from './AddTasks/AddTasks';
import TaskList from './TaskList.jsx';
import { v4 as uuidv4 } from 'uuid'; // Для генерации уникальных ID
import '../styles.css';

const TaskManager = () => {
    const [addTaskIsOpened, setAddTaskIsOpened] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const onCloseAddTask = () => {
        setAddTaskIsOpened(false);
    };

    const onAdd = (taskData) => {
        const newFormId = uuidv4();
        console.log("Добавление задачи:", taskData);
        // Создаем новый объект задачи, объединяя taskData и id
        const newTask = { ...taskData, id: newFormId };
        setTaskList((prevList) => [...prevList, newTask]);
        setAddTaskIsOpened(false); // Закрываем форму после добавления
    };

    const deleteForm = (idToDelete) => {
        // Используем taskList, а не "forms"
        setTaskList(taskList.filter((task) => task.id !== idToDelete));
    };
    const goodForm = (idToDelete) => {
        // Используем taskList, а не "forms"
        setTaskList(taskList.filter((task) => task.id !== idToDelete));
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
            <TaskList tasks={taskList} onDelete={deleteForm} /> {/* передаем функцию onDelete*/}
        </div>
    );
};

export default TaskManager;
