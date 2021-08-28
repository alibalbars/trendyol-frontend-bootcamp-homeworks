import React, { useState, useEffect } from 'react'
import './dropdown.css';

export default function Dropdown(props) {
    const [isActive, setIsActive] = useState(false);
    const { optionData } = props;
    const options = optionData.options;
    const [selected, setSelected] = useState('');

    const handleOptionClick = (e) => {
        if(e.target.innerHTML == 'All'){
            setSelected(optionData.name);
            props.setFilter({
                ...props.filter,
                [optionData.name]: ''
            });
        } else {
            setSelected(e.target.innerHTML);
            props.setFilter({
                ...props.filter,
                [optionData.name]: e.target.innerHTML.toLowerCase()
            });
        }
    }
    return (
        <div className="Dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)} tabIndex="1">
                {selected || optionData.name}
                <img width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/000000/sort-down.png" />
            </div>

            <div className="dropdown-content">
                <div className="dropdown-item"
                    onClick={handleOptionClick}>
                    All
                </div>
                {options.map(option => (
                    <div className="dropdown-item"
                        key={option}
                        onClick={handleOptionClick}>
                        {option}
                    </div>
                ))}

            </div>

        </div>
    )
}
