import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import './styles/rick.css';

export default function CharacterList() {
  const [CharacterList, GetCharacterList] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log('hello',response.data.results);
        GetCharacterList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list">
      <h2 class="Gangster">Welcome to the town of the Gangsters!</h2>
      {CharacterList.map((chars, id) => {
        return <CharacterCard key={id} chars={chars} />;
      })}
    </section>
  );
}