import React, { useEffect, useState, useContext } from 'react';
import classesAPI from '../../api/classesAPI';
import styles from './Details.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ConfirmModal from '../../utils/ConfirmModal';
import { authContext } from '../../context/authContext.js';

const Details = () => {
  const [card, setCard] = useState({});
  const { classId } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userId } = useContext(authContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await classesAPI.getOne(classId);
        setCard(result);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [classId]);

  const handleDelete = async () => {
    try {
      await classesAPI.remove(classId);
      navigate('/classes');
    } catch (error) {
      setError(error.message);
    }
  };

  const isAuthor = userId === card._ownerId;

  return (
    <div className={styles.cardContainer}>
      {error && <div className={styles.errorMessage}>{error}</div>}
      <div className={styles.card}>
        <img src={card.imageUrl} alt={card.title} className={styles.image} />
        <h2>{card.title}</h2>
        <p>{card.level}</p>
        <p>{card.description}</p>
        {isAuthor && (
          <div className={styles.buttons}>
            <Link to={`/classes/${classId}/edit`} className={styles.editButton}>Edit</Link>
            <Link onClick={() => setIsModalOpen(true)} className={styles.deleteButton}>Delete</Link>
          </div>
        )}
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
