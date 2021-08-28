import React from 'react';
import './no-result.css';
import Filter from "../Filter/Filter";
import Header from "../Header/Header";
import ButtonBack from '../ButtonBack/ButtonBack';

export default function NoResult(props) {
    const resetFilter = () => {
        props.setFilter({});
    }
    return (
        <div className="no-result-container">
            <Header></Header>
            <Filter
                filter={props.filter}
                setFilter={props.setFilter}
            />
            <div className="no-result">
                <span className="no-result-text">No Result</span>
                <ButtonBack clearFilter={true} filter={props.filter} setFilter={props.setFilter}></ButtonBack>

            </div>
        </div>
    )
}
