import React from "react";

function CharacterCard({ data }) {
  return (
    <div className="character-card">
      <h3 className="card-title">{data.name}</h3>
      <img className="card-image" src={data.image} alt={data.name} />
      <p className="card-text">Species: {data.species}</p>
      <p className="card-text">Gender: {data.gender}</p>
      <p className="card-text">Status: {data.status}</p>
    </div>
  );
}

export default CharacterCard;
