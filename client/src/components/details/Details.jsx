import React, { useEffect, useState } from 'react';
import classesAPI from '../../api/classesAPI';
import styles from './Details.module.css';
import {Link} from 'react-router-dom'


const Details = () => {
    const [card, setCard] = useState({});

    useEffect(() => {
        (async ()=> {
            try {
                const result = await classesAPI.getOne();
                setCard(result); 
            } catch (error) {
                alert(error.message);
            }
        })();
    });

    return (<div className={styles.cardContainer}>
    <div className={styles.card}>
      <img src={card.imageUrl} alt={card.title} className={styles.image} />
      <h2>{card.title}</h2>
      <p>{card.level}</p>
      <p>{card.description}</p>
      <div className={styles.buttons}>
        <Link to={`/edit/${card._id}`} className={styles.editButton}>Edit</Link>
        <Link to={`/delete/${card._id}`} className={styles.deleteButton}>Delete</Link>
      </div>
    </div>
  </div>
  );
};


export default Details;
