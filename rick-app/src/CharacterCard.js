import React from "react";
import './styles/rick.css';

export default function CharacterCard(props) {
  if(props.chars.status === "alive") {
    return (console.log("true"))
  }
  return (
    <div class = "MainCard">
      <div class = "TopHeader">
        <h1>{props.chars.name}</h1>
      </div>
      <div class = "MugShot">
        <img src={props.chars.image} alt="rick and morty" />
      </div>
      <div class = "MISC">
        <p>{props.chars.gender}</p>
        <p>{props.chars.status}</p>
      </div> 
    </div>
  );
}
