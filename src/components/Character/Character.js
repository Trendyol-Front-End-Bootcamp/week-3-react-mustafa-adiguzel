import React from "react";

export default function Character({ character }) {
  return (
    <div className="character-card">
      <div className="character-img-container">
        <img src={character.image} alt={character.name} />
      </div>

      <h1 className="character-name">{character.name}</h1>
      <div className="character-gender">Gender: {character.gender}</div>
      <div className="character-type">Type: {character.status}</div>
      <div className="character-status">Status: {character.status}</div>
      <div className="character-location">Location: {character.location.name}</div>

      <div class="character-link">
          <a href="/asdasdf">Details</a>
      </div>
    </div>
  );
}