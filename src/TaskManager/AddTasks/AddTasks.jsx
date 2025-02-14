import React from "react";
import LessInput from "../../shared/StateLessInputs/LessInput";
import './AddTasks.css'
import FullInput from "../../shared/Statefullinputs/FullInput";

const AddTasks = ({onClose, onAdd, setTask}) => {

    const addNameForOnChangeInput = (text) => {
        console.log(text)
    }
    return (
        <div className="add-tasks-container">
            <form className="add-tasks-container_add-task-form" onSubmit={(e) => {
                console.log(e)
                e.preventDefault();
                console.log(e);
            }}>
                <div className="add-task-form_maintainer">
                    <p className="label">Исполнитель</p>
                    <div className="maintainer-info-container">
                        <LessInput placeholder="Введите ваше имя" type="text" name={'name'} onChangeProps={addNameForOnChangeInput} classes='maintaner-item' />
                        <LessInput placeholder="Введите вашу фамилию" type="text" name={'surname'} onChangeProps={addNameForOnChangeInput} classes='maintaner-item' />
                        <LessInput placeholder="Введите ваше отчество" type="text" name={'lastname'} onChangeProps={addNameForOnChangeInput} classes='maintaner-item' />
                    </div>
                </div>
                <div>
                    <p className="label">Введите свою дату рождения</p>
                    <FullInput name={'date'} localType='date' />
                </div>
                <div>
                <p className="label">Введите описание задачи</p>
                <FullInput name={'desc'} localType='text-area' placeholder='Введите описание задачи'/>
                </div>
                <button className="btn form-btn" type='submit' onClick={() => onAdd()}>Добавить</button>
                <button className="btn form-btn" type='button' onClick={() => onClose()}>Отмена</button>

            </form>
        </div>
    )
};
export default AddTasks;