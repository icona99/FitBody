import React from 'react';
import { Link } from 'react-router-dom'
import './SportCard.css'

const SportCard = ({ card }) => {
  return (
    <div className="card">
      <img src={card.imageUrl} alt={card.title} />
      <h2>{card.title}</h2>
      <p>{card.level}</p>
      <p>{card.description}</p>
      <Link to={`/details/${card.id}`} className="circle-button">+</Link>
    </div>
  );
};

export default SportCard;
