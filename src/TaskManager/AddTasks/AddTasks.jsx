import React from "react";
import LessInput from "../../shared/StateLessInputs/LessInput";
import './AddTasks.css'
import FullInput from "../../shared/Statefullinputs/FullInput";

const AddTasks = () => {

    const addNameForOnChangeInput = (text) => {
        console.log(text)
    }
    return (
        <div className="add-tasks-container">
            <form className="add-tasks-container_add-task-form">
                <div className="add-task-form_maintainer">
                    <p>Исполнитель</p>
                    <LessInput placeholder="Введите ваше имя" type="text" onChangeProps={addNameForOnChangeInput} />
                    <LessInput placeholder="Введите вашу фамилию" type="text" onChangeProps={addNameForOnChangeInput} />
                    <LessInput placeholder="Введите ваше отчество" type="text" onChangeProps={addNameForOnChangeInput} />
                </div>
                <div>
                    <FullInput localType='date' />
                </div>

            </form>
        </div>
    )
};

export default AddTasks;