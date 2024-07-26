import React, { useEffect, useState } from 'react';
import classesAPI from '../../api/classesAPI';
import styles from './Details.module.css';
import {Link, useParams} from 'react-router-dom'


const Details = () => {
    const [card, setCard] = useState({});
    const {classId}=useParams();

    useEffect(() => {
        (async ()=> {
            try {
                const result = await classesAPI.getOne(classId);
                setCard(result); 
            } catch (error) {
                alert(error.message);
            }
        })();
    }, [classId]);

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
