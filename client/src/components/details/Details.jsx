import React, { useEffect, useState } from 'react';
import classesAPI from '../../api/classesAPI';
import styles from './Details.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom'


const Details = () => {
  const [card, setCard] = useState({});
  const { classId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      try {
        const result = await classesAPI.getOne(classId);
        setCard(result);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [classId]);

  const handleDelete = async () => {
    const IsConfirmed = confirm(`Are you sure you want to delete ${card.title} game`);

    if (!IsConfirmed) {
      return
    };

    try {
      await classesAPI.remove(classId);
      navigate('/classes');
    } catch (error) {
      alert(error.message);
    }
  };

  return (<div className={styles.cardContainer}>
    <div className={styles.card}>
      <img src={card.imageUrl} alt={card.title} className={styles.image} />
      <h2>{card.title}</h2>
      <p>{card.level}</p>
      <p>{card.description}</p>
      <div className={styles.buttons}>
        <Link to={`/classes/${classId}/edit`} className={styles.editButton}>Edit</Link>
        <Link onClick={handleDelete} className={styles.deleteButton}>Delete</Link>
      </div>
    </div>
  </div>
  );
};


export default Details;
