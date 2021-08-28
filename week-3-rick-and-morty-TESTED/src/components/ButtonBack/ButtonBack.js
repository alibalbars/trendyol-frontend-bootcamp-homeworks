import React from 'react';
import { useHistory } from 'react-router-dom';
import './button-back.css';

export default function ButtonBack(props) {

    const history = useHistory();

    const handleClick = (event) => {
        if (props.clearFilter) {
            props.setFilter({
                search: '',
                gender: '',
                aliveness: '',
                species: '',
            })
        }
        history.goBack();
    }
    return (
        <div className="btn-back-container">
            <button className="btn-back" onClick={handleClick}>
                <span>
                    <img width="25" src="https://img.icons8.com/ios/50/000000/circled-left-2.png" />
                    Geri Dön
                </span>
            </button>
        </div>
    )
}
