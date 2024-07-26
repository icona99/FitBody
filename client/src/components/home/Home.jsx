import React, { useEffect, useState } from 'react';
import styles from './Home.module.css'; 
import SportCard from '../sportCard/SportCard';
import classesAPI from '../../api/classesAPI';

export default function Home() {
    const [latestCards, setLatestCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 3) % latestCards.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [latestCards.length]);

    const displayedCards = latestCards.slice(currentIndex, currentIndex + 3);

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
                <div className={styles['card-container']} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
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
