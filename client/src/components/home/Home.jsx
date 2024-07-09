import React, { useEffect, useState } from 'react';
import styles from './Home.module.css'; 
import SportCard from '../classes/sportCard/SportCard';

const baseUrl = 'http://localhost:3030/jsonstore';

export default function Home() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        async function getCards() {
            try {
                const response = await fetch(`${baseUrl}/classes`);
                const result = await response.json();
                const data = Object.values(result);
                const cards = Object.values(data[0]);
                setCards(cards);
            } catch (error) {
                console.log(error.message);
            }
        }
        getCards();
    }, []);

    return (
        <div className={styles.home}> 
            <div className={styles['home-text']}>
                <h1> Get fit with us</h1>
                <p>Pilates, Yoga, Fitness, Spinning &amp; many more</p>
            </div>
            <div className={styles['home-button']}>
                <a href="/register">Join Now</a>
            </div>
            <section className={styles.cards}> 
                {cards.slice(-3).map((card) => (
                    <SportCard
                        key={card._id}
                        card={card}
                    />
                ))}
            </section>
        </div>
    );
}
