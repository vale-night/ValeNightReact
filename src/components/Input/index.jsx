import React from 'react';
import './input.css';


export default ({id, type, placeholder, value, className}) => (
    <>
        <input id={id} className={className} type={type} placeholder={placeholder} value={value} />
    </>
);