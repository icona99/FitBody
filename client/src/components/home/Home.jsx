import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import styles from './Home.module.css';
import SportCard from '../sportCard/SportCard';
import classesAPI from '../../api/classesAPI';
import { Link } from 'react-router-dom';

export default function Home() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await classesAPI.getAll();
                if (Array.isArray(result)) {
                    setCards(result);
                } else {
                    console.error("Unexpected response format:", result);
                }
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
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={styles.home}>
            <div className={styles['home-text']}>
                <h1>Your Journey Starts Here</h1>
                <p>Pilates, Yoga, Fitness, Spinning &amp; many more</p>
            </div>
            <div className={styles['home-button']}>
                <Link to="/register">Join Now</Link>
            </div>
            <section className={styles.cards}>
                <Slider {...settings}>
                    {Array.isArray(cards) && cards.length > 0 ? (
                        cards.map((card) => (
                            <div key={card._id} className={styles['card-container']}>
                                <SportCard card={card} className={styles.card} />
                            </div>
                        ))
                    ) : (
                        <p>No classes available</p>
                    )}
                </Slider>
            </section>
        </div>
    );
}
