import React from 'react';
import './select.css';


export default ({id, placeholder, value, dataset}) => (

    <>
        <select id={id} placeholder={placeholder}>
            <option id="" value="-1">{placeholder}</option>
            {dataset.map(data => (
                <option id={data.id} value={data.value}>{data.text}</option>
            ))}
        </select>
    </>
);