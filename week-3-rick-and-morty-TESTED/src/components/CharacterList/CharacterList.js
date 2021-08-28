import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./character-list.css";
import CharacterCard from "../CharacterCard/CharacterCard.js";
import ButtonBack from "../ButtonBack/ButtonBack.js";
import axios from "axios";
import RickNotFoundImage from "../../img/rick-not-found.jpg";
import Rick from "../../img/rick.png";
import Morty from "../../img/morty.png";
import APIService from "../../services/api.services";
import { nameToLink, filterByName } from "../../utils";

export default function CharacterList(props) {
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const { filter } = props;
    const { gender, species, aliveness, search: nameQuery} = filter;
    const [isLoading, setLoading] = useState(true);
    const history = useHistory();
    useEffect(async () => {

        const filteredCharacters = await APIService.getCharactersByFilter(
            gender,
            species,
            aliveness
        )

        if(filteredCharacters.length === 0) {
            goNoResultPage();
        }

        setFilteredCharacters(filteredCharacters);
        setLoading(false);


    }, [gender, species, aliveness]);

    if (isLoading) {
        return <div className="CharacterList">Loading...</div>;
    }

    function goNoResultPage() {
        history.push("/no-result");
    }

    if (filteredCharacters == undefined) {
        goNoResultPage();
    }

    if (filterByName(filteredCharacters, nameQuery).length === 0) {
        return (
            <div className="not-found">
                <span>Not Found</span>
                <img width={200} src={RickNotFoundImage} alt="Rick Not Found" />
                <ButtonBack
                    clearFilter={true}
                    filter={props.filter}
                    setFilter={props.setFilter}
                ></ButtonBack>
            </div>
        );
    }

    return (
        <div className="CharacterList">
            <img height={300} src={Rick} alt="Rick" className="img-rick" />
            <img height={300} src={Morty} alt="Morty" className="img-morty" />
            {filterByName(filteredCharacters, nameQuery?.toLowerCase().trim()).map(
                (character) => {
                    return (
                        <Link
                            to={`character/${nameToLink(character.name)}`}
                            className="CharacterLink"
                            key={character.id}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <CharacterCard character={character} />
                        </Link>
                    );
                }
            )}
        </div>
    );
}
