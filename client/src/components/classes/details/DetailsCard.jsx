import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Details.module.css';

const DetailsCard = ({ card }) => {
  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.card}>
      <img src={card.imageUrl} alt={card.title} className={styles.image} />
      <h2>{card.title}</h2>
      <p>{card.level}</p>
      <p>{card.description}</p>
      <div className={styles.buttons}>
        <Link to={`/edit/${card._id}`} className={styles.circleButton}>Edit</Link>
        <Link to={`/delete/${card._id}`} className={styles.circleButton}>Delete</Link>
      </div>
    </div>
  );
};

export default DetailsCard;

