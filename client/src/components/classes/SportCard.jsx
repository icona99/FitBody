import React from 'react';
import './SportCard.css'

const SportCard = ({ card }) => {
  return (
    <div className="card">
      <img src={card.imageUrl} alt={card.title}/>
      <h2>{card.title}</h2>
      <p>{card.level}</p>
      <p>{card.description}</p>
      <a href="/details" className="circle-button">+</a>
    </div>
  );
};

export default SportCard;
