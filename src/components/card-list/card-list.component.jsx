import React from "react";
import "./card-list.styles.css";
import {Card} from "./../card/card.component.jsx";

export const CardList = (props) => {
  return(
    <div className = "card-list">
      {
        props.monsters.map(monster => <Card key = {monster.id} monster = {monster}/>)
      }
    </div>
    );
}