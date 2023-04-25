import React from "react";
import "./card.style.css";

export const Card = ({ monster }) => (
  <div className="card">
    <img src={`https://robohash.org/${monster.id}?set=set1&size=180x180`} />
    <div>{monster.name}</div>
  </div>
);
