import React, { useEffect, useState } from 'react';
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [characters, setCharacters] = useState([]);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      setCharacters(res.data.results)})
    .catch(err => console.log(err));
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
if (characters) {
  return (
  <section className='character-list grid-view'>
    {characters.map((character) => (
    <CharacterCard
      img={character.image}
      name={character.name}
      species={character.species}
      status={character.status}
    />))}
  </section>
  )
}
else {
  return null
}
}
