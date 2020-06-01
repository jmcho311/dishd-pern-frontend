import React from 'react';

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
