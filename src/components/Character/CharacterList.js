import React, { useEffect, useState } from "react";
import Character from "./Character";
import axios from "axios";

export default function CharacterList(props) {
    const [CharacterArr, GetCharacterArr] = useState([]);

    useEffect(() => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          GetCharacterArr(response.data.results);
        })
        .catch(err => {
          console.log(err);
        });

    }, []);
    
    return (
      <section className="character-list">
        {CharacterArr.map((character, id) => {
          return <div>
              <Character key={id} character={character} />
            </div>;
        })}
      </section>
    );
}