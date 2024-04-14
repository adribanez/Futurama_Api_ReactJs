import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import { fetchCharacters } from "./FetchCharacters";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const charactersData = await fetchCharacters();
        const excludedIds = [25, 26, 28, 30, 35, 40, 47, 48, 50];

        const filteredData = charactersData.filter(
          (character) => !excludedIds.includes(character.id)
        );

        setCharacters(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);

    const filteredCharacters = characters.filter((character) => {
      const nameMatches = searchTerm
        ? character.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      return nameMatches;
    });

    setFilteredCharacters(filteredCharacters);
  };

  return (
    <div className="app">
      <h1 className="div-logo"></h1>
      <div className="buttons">
        <div className="search-container">
          <input
            type="text"
            placeholder="Encuentra tu personaje..."
            value={search}
            onChange={handleSearch}
          />
        </div>
        <button className="clear-button" onClick={() => setSearch("")}>
          Limpiar búsqueda
        </button>
      </div>
      <div className="characters">
        <img className="leela" src="public/img/leela.png" />
        <div className="characters-container">
          {search
            ? filteredCharacters.map((character) => (
                <CharacterCard data={character} key={character.id} />
              ))
            : characters.map((character) => (
                <CharacterCard data={character} key={character.id} />
              ))}
        </div>
        <img className="pistola" src="public/img/pistola-peronaje.png" />
      </div>
    </div>
  );
};

export default Characters;
