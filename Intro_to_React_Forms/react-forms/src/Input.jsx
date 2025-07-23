import React, {useState} from "react";

const Input = ({type, id, placeholder, value, onChange}) => {
    return (
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;