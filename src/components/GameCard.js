import React from 'react';
import { Link } from 'react-router-dom'

const GameCard = (props) => {
  return (
    <div className="GameCard">
      <h3>{ props.title }</h3>
      <p>By: { props.publisher }</p>
      <hr />
    </div>
  );
}

export default GameCard;
