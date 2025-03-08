import React from "react";

const LessInput = ({ type, placeholder, propsName, value, classes, onChangeProps }) => {
    return (
        <input
            name={propsName}
            type={type}
            placeholder={placeholder}
            className={classes}
            value={value} // Добавляем управляемый value
            onChange={(e) => onChangeProps(e.target.value)}
        />
    );
};

export default LessInput;
