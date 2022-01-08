import React from "react";
import "./card.css";
const Card = (props) => {
  const { monster } = props;
  return (
    <div className="card-container">
      <img src={`https://robohash.org/10${monster.id}`} alt="monster" />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
