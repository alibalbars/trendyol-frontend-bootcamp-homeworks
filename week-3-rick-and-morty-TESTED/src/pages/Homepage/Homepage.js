import React from 'react';
import './homepage.css';
import Header from '../../components/Header/Header';
import CharacterList from '../../components/CharacterList/CharacterList';
import Filter from '../../components/Filter/Filter';

export default function Homepage({filter, setFilter, characters}) {
    return (
        <div className="homepage">
            <Header></Header>
            <div>
                <Filter
                    filter={filter}
                    setFilter={setFilter}
                />
                <CharacterList
                    characters={characters}
                    filter={filter}
                    setFilter={setFilter}
                />
            </div>
        </div>
    )
}
