import React from "react";
import Card from "../card/card";
import "./cardList.css";
const CardList = (props) => {
  const { monsters } = props;
  return (
    <React.Fragment>
      <section className="card-list">
        {monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </section>
    </React.Fragment>
  );
};

export default CardList;
