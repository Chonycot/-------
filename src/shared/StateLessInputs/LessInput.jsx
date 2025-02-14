import React from "react";

const LessInput = ({type, placeholder, label, classes, isData, onChangeProps, propsName}) => {
    return(
        <input name={propsName} type={type} placeholder={placeholder} className={classes} onChange={(e) => onChangeProps(e.target.value)} />
    )
};

export default LessInput;