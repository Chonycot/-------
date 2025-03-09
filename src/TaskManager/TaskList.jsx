import React, { useState } from 'react';
import '../styles.css';

const TaskList = ({ tasks, onDelete }) => { // Получаем tasks и onDelete как пропсы
  const [doneTasks, setDoneTasks] = useState({}); // Используем объект для отслеживания выполненных задач

  const handleDoneClick = (taskId) => {
    setDoneTasks(prevDoneTasks => ({
      ...prevDoneTasks,
      [taskId]: !prevDoneTasks[taskId] // Переключаем состояние для конкретной задачи
    }));
  };

  return (
    <div className="task-list">
      {tasks.map((task) => ( // Используем только task в map
        <div
          key={task.id}
          className={`task-item ${doneTasks[task.id] ? 'done' : ''}`}
        >  {/* Используем task.id как key */}
          <p className="task-name">Имя: {task.name}</p>
          <p className="task-surname">Фамилия: {task.surname}</p>
          <p className="task-lastname">Отчество: {task.lastname}</p>
          <p className="task-date">Дата рождения: {task.date}</p>
          <p className="task-desc">Описание задачи: {task.desc}</p>
          {/* {task.name} - {task.description} - Уберите эту строку, она дублирует данные*/}
          <p className="task-delete">
            <button
              type="button"
              value="clickme"
              onClick={() => onDelete(task.id)} // Уже правильно передаем taskId
              className="baton_1"
            >
              Удалить
            </button>
            <button
              type="button"
              value="clickme"
              onClick={() => handleDoneClick(task.id)} // ПЕРЕДАЕМ taskId в handleDoneClick
              className="baton_2"
            >
              Выполнено
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;