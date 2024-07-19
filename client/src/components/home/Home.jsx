import React, { useEffect, useState } from 'react';
import styles from './Home.module.css'; 
import SportCard from '../sportCard/SportCard';

const baseUrl = 'http://localhost:3030/jsonstore';

export default function Home() {
    const [cards, setCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        async function getCards() {
            try {
                const response = await fetch(`${baseUrl}/classes`);
                const result = await response.json();
                const data = Object.values(result);
                setCards(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        getCards();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 3) % cards.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [cards.length]);

    const displayedCards = cards.slice(currentIndex, currentIndex + 3);

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
                {displayedCards.map((card) => (
                    <SportCard
                        key={card._id}
                        card={card}
                    />
                ))}
            </section>
        </div>
    );
}

