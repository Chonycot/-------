import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <p className="task-name">Имя: {task.name}</p>
          <p className="task-surname">Фамилия: {task.surname}</p>
          <p className="task-lastname">Отчество: {task.lastname}</p>
          <p className="task-date">Дата рождения: {task.date}</p>
          <p className="task-desc">Описание задачи: {task.desc}</p>
          <p className="task-delete"><button type="button" value="clickme" onclick="doFunction();" className="baton_1">удалить</button></p>
          <p className="task-complite"><button type="button" value="clickme" onclick="changeColor()" className="baton_2">выполнено</button></p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
