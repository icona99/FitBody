import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

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
                <Slider {...settings}>
                    {latestCards.map((card) => (
                        <div key={card._id} className={styles['card-container']}>
                            <SportCard card={card} className={styles.card} />
                        </div>
                    ))}
                </Slider>
            </section>
        </div>
    );
}
