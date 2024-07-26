import React, { useEffect, useState } from 'react';
import styles from './Home.module.css'; 
import SportCard from '../sportCard/SportCard';
import classesAPI from '../../api/classesAPI';

export default function Home() {
    const [latestCards, setLatestCards] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await classesAPI.getAll();
                setLatestCards(result.slice(-3));
            } catch (error) {
                console.log(error.message);
            }
        })();
    }, []);

    return (
        <div className={styles.home}>
            <div className={styles['home-text']}>
                <h1>Your Journey Starts Here</h1>
                <p>Pilates, Yoga, Fitness, Spinning &amp; many more</p>
            </div>
            <div className={styles['home-button']}>
                <a href="/register">Join Now</a>
            </div>
            <section className={styles.cards}>
                <div className={styles['card-container']}>
                    {latestCards.map((card) => (
                        <SportCard
                            key={card._id}
                            card={card}
                            className={styles.card}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
