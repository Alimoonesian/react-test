import React from "react";
import "./list-cards.style.css";
import { Card } from "./card/card.component";
import { FilterInput } from "../filter-input/filter-input.compnent";
export const ListCards = ({ monsters }) => (
  <div className="cards">
    {monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
