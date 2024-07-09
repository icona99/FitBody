import { useEffect, useState } from 'react';
import './Home.css'
import SportCard from '../classes/sportCard/SportCard';


const baseUrl = `http://localhost:3030/jsonstore`;

export default function Home() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        (async function getCards() {
            try {
                const response = await fetch(`${baseUrl}/classes`);
                const result = await response.json();
                const data = Object.values(result);
                const cards = Object.values(data[0]);

                setCards(cards)

            } catch (error) {
                console.log(error.message);
            }
        })();
    }, []);
    return (
        <div className="home">
            <div className="home-text">
                <h1> Get fit with us</h1>
                <p>Pilates, Yoga, Fitness, Spinning &amp; many more</p>
            </div>
            <div className="home-button">
                <a href="/register">Join Now</a>
            </div>
            <section class="cards">
                {cards.map((card)=>(
                    <SportCard
                    key={card._id}
                    card={card}
                    />
                ))}
                {/* <div class="featuree">
                    <img src="/public/images/icon_1.png" alt="Pilates" />
                    <h2>Pilates</h2>
                    <p>Pilates is a system of repetitive exercises performed on a yoga mat or other equipment to promote strength, stability, and flexibility. Pilates exercises develop the body through muscular effort that stems from the core.</p>
                    <a href="/details" class="circlee-button">+</a>
                </div>
                <div class="featuree">
                    <img src="/public/images/icon_2.png" alt="Swimming pool" />
                    <h2>Swimming Pool</h2>
                    <p>Enjoy swimming long lengths in our indoor 20m swimming pool, take a dip in the jacuzzi, or rest in our poolside steam room and sauna.
                        As well as our large laned swimming area, we also offer a separate recreational/children’s swimming area ideal for little ones to enjoy some water-based fun.</p>
                        <a href="/details" class="circlee-button">+</a>
                </div>
                <div class="featuree">
                    <img src="/public/images/icon_3.png" alt="Diet Plan" />
                    <h2>Healthy diet plan</h2>
                    <p>However, a diet plan is tailored to an individual's health status, weight and lifestyle, along with their weight loss and health goals. The diet plan acts as a bespoke template to steer your eating behaviour, exercise and lifestyle management towards optimal health and wellbeing.</p>
                    <a href="/details" class="circlee-button">+</a>
                </div> */}
            </section>
        </div>
    )
}