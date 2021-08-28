import React, { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Header from "../../components/Header/Header.js";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import "./character-detail.css";
import axios from "axios";
import { linkToName } from '../../utils';
import APIService from "../../services/api.services";

export default function CharacterDetail(props) {
    const BASE_API_URL = "https://rickandmortyapi.com/api/character/?name=";
    const characterName = linkToName(props.match.params.name);
    const [character, setCharacter] = useState({});
    const [lastEpisodeNames, setLastEpisodeNames] = useState([]);

    useEffect(async () => {
        
        const character = await APIService.getCharacterByName(characterName);
        setCharacter(character);
        const lastEpisodeUrls = character.episode.slice(-5);

        let lastEpisodeNames = Promise.all(
            lastEpisodeUrls.map((episode) =>
                axios.get(episode).then((response) => response.data.name)
            )
        );
        setLastEpisodeNames(await lastEpisodeNames);
    }, []);

    function deneme() {
        return 'deneme'
    }

    return (
        <div className="container">
            <Header />
            <div className="character-detail">
                <CharacterCard
                    character={character}
                    episodeNames={lastEpisodeNames}
                />
                <ButtonBack className="btn-back" />
            </div>
        </div>
    );
}
