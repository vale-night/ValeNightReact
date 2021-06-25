import React from 'react';
import './input.css';


export default ({id, type, placeholder, value, className, style}) => (
    <>
        <input id={id} style={style} className={className} type={type} placeholder={placeholder} value={value} />
    </>
);