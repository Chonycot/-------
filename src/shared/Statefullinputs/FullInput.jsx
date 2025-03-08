import React, { useState } from "react";

const FullInput = ({ localType, placeholder, propsName, value, onChangeProps }) => {
    const [isValid, setIsValid] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const isValidDate = (date) => {
        setDisabled(date.split("-")[0] > 2005);
    };

    switch (localType) {
        case "date":
            return (
                <>
                    {disabled && (
                        <label>Вы слишком молоды, задача для Вас не доступна</label>
                    )}
                    <input
                        name={propsName}
                        type="date"
                        className={isValid ? "is-not-valid" : "valid"}
                        onChange={(e) => onChangeProps(e.target.value)}
                    />
                </>
            );
        case "password":
            return (
                <input
                    name={propsName}
                    localType="password"
                    className={isValid ? "valid" : "is-not-valid"}
                />
            );
        case "text-area":
            return (
                <textarea
                    name={propsName}
                    localType={localType}
                    placeholder={placeholder}
                    className="textarea"
                    value={value} // Добавляем управляемый value
                    onChange={(e) => onChangeProps(e.target.value)}
                ></textarea>
            );
        default:
            return null;
    }
};

export default FullInput;
