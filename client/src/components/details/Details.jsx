import React, { useEffect, useState } from 'react';
import classesAPI from '../../api/classesAPI';
import styles from './Details.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ConfirmModal from '../../utils/ConfirmModal';


const Details = () => {
  const [card, setCard] = useState({});
  const { classId } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    try {
      await classesAPI.remove(classId);
      navigate('/classes');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src={card.imageUrl} alt={card.title} className={styles.image} />
        <h2>{card.title}</h2>
        <p>{card.level}</p>
        <p>{card.description}</p>
        <div className={styles.buttons}>
          <Link to={`/classes/${classId}/edit`} className={styles.editButton}>Edit</Link>
          <Link to onClick={() => setIsModalOpen(true)} className={styles.deleteButton}>Delete</Link>
        </div>
      </div>
      <ConfirmModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        message={`Are you sure you want to delete ${card.title} game?`}
      />
    </div>
  );
};

export default Details;
