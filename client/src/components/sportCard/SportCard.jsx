import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import './SportCard.css'
import { authContext } from '../../context/authContext';

const SportCard = ({ card }) => {

  const { isAuthenticated } = useContext(authContext)
  return (
     <>
      {isAuthenticated ? 
        
         <div className="card">
      <img src={card.imageUrl} alt={card.title} />
      <h2>{card.title}</h2>
      <p>{card.level}</p>
      <p>{card.description}</p>
      <Link to={`/classes/${card._id}/details`} className="circle-button">+</Link>
      </div>
     
      :
      <div className="card">
      <img src={card.imageUrl} alt={card.title} />
      <h2>{card.title}</h2>
      <p>{card.level}</p>
      <p>{card.description}</p>
      </div>
    }
    </>
    
  );
};

export default SportCard;
