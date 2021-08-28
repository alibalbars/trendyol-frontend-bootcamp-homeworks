import "./css/styles.css";
import React, { useEffect, useState } from "react";
import CharacterDetail from "./pages/CharacterDetail/CharacterDetail.js";
import Homepage from "./pages/Homepage/Homepage.js";
import NoResult from "./components/NoResult/NoResult.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState({
    search: '',
    gender: '',
    aliveness: '',
    species: '',
  });

  const generateUrl = () => {
    let url = `https://rickandmortyapi.com/api/character/?gender=${filter.gender ? filter.gender : ''}&species=${filter.species ? filter.species : ''}&status=${filter.aliveness ? filter.aliveness : ''}`;
    return url;
  }

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setCharacters(response.results);
      });
  }, []);

  return (
    <Router>
      <Route
        path="/"
        exact
        render={() => {
          {
            return (
              <Homepage
                filter={filter}
                setFilter={setFilter}
                characters={characters} />
            );
          }
        }}
      />

      <Route
        path="/character/:name"
        render={(renderProps) => {
          const character = characters.find(
            (character) =>
              character.name.replace(/(\w+)\s(\w+)/, "$1-$2").toLowerCase() === renderProps.match.params.name
          );
          return (
            <CharacterDetail
              {...renderProps}
            />
          );
        }}
      />
      <Route
        path="/no-result"
        render={() => {
          return <NoResult filter={filter}
            setFilter={setFilter}
            generateUrl={generateUrl} />
        }}

      />
    </Router>
  );
}
