import React, { useState } from "react";
import LessInput from "../../shared/StateLessInputs/LessInput";
import FullInput from "../../shared/Statefullinputs/FullInput";
import './AddTasks.css';

const AddTasks = ({ onClose, onAdd }) => {
    // инициализация состояния
    const [taskData, setTaskData] = useState({
        name: '',
        surname: '',
        lastname: '',
        date: '',
        desc: '',
    });

    // Функция обработки изменения значений полей
    const handleInputChange = (field, value) => {
        console.log(`Изменение ${field}: ${value}`); // Логируем значение при изменении
        setTaskData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Отправка формы:", taskData); // Проверим данные перед отправкой
        onAdd(taskData); // Отправляем данные обратно в родительский компонент
        onClose(); // Закрываем форму после отправки
    };

    return (
        <div className="add-tasks-container">
            <form
                className="add-tasks-container_add-task-form"
                onSubmit={handleSubmit}//использование обработчика для отправки
            >
                <div className="add-task-form_maintainer">
                    <p className="label">Исполнитель</p>
                    <div className="maintainer-info-container">
                        <LessInput
                            placeholder="Введите ваше имя"
                            type="text"
                            propsName="name"
                            value={taskData.name}
                            onChangeProps={(value) => handleInputChange('name', value)} // Передаем значение в обработчик
                            classes="maintaner-item"
                        />
                        <LessInput
                            placeholder="Введите вашу фамилию"
                            type="text"
                            propsName="surname"
                            value={taskData.surname}
                            onChangeProps={(value) => handleInputChange('surname', value)} // Передаем значение в обработчик
                            classes="maintaner-item"
                        />
                        <LessInput
                            placeholder="Введите ваше отчество"
                            type="text"
                            propsName="lastname"
                            value={taskData.lastname}
                            onChangeProps={(value) => handleInputChange('lastname', value)} // Передаем значение в обработчик
                            classes="maintaner-item"
                        />
                    </div>
                </div>
                <div>
                    <p className="label">Введите свою дату рождения</p>
                    <FullInput
                        name="date"
                        localType="date"
                        value={taskData.date} // Передаем значение для даты
                        onChangeProps={(value) => handleInputChange('date', value)} // Обновляем значение даты
                    />
                </div>
                <div>
                    <p className="label">Введите описание задачи</p>
                    <FullInput
                        placeholder="Введите описание задачи"
                        localType="text-area"
                        propsName="desc"
                        value={taskData.desc} // Передаем значение для описания
                        onChangeProps={(value) => handleInputChange('desc', value)} // Обновляем значение описания
                    />
                </div>
                <button type="submit" className="btn form-btn">
                    Добавить
                </button>
                <button
                    type="button"
                    className="btn form-btn"
                    onClick={() => onClose()}
                >
                    Отмена
                </button>
            </form>
        </div>
    );
};

export default AddTasks;
