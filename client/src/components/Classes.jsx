import React from 'react';
import './Classes.css'
import SportCard from './SportCard';


function Classes() {
    return (
        <div className="classes">
            <div className="title">
                <h2>We have variety of classes</h2>
            </div>
            <section class="features">
                {/* <SportCard /> */}
                <div class="feature">
                    <img src="/public/images/icon_7.png" alt="Weight traning" />
                    <h2>Weight training</h2>
                    <p>Pilates is a system of repetitive exercises performed on a yoga mat or other equipment to promote strength, stability, and flexibility. Pilates exercises develop the body through muscular effort that stems from the core.</p>
                    <a href="/details" class="circle-button">+</a>
                </div>
                <div class="feature">
                    <img src="/public/images/icon_13.png" alt="Cardio" />
                    <h2>Cardio</h2>
                    <p>Cardio is shorthand for cardiovascular training, and it encompasses any exercise—such as running or cycling .Cardio is also considered aerobic exercise, meaning it demands elevated oxygen flow, which causes you to breathe harder. Cardio is essential if you want to burn calories, strengthen your heart and lungs, and be healthier overall..</p>
                    <a href="/details" class="circle-button">+</a>
                </div>
                <div class="feature">
                    <img src="/public/images/icon_5.png" alt="Yoga" />
                    <h2>Yoga</h2>
                    <p>Yoga is a system of repetitive exercises performed on a yoga mat or other equipment to promote strength, stability, and flexibility. Pilates exercises develop the body through muscular effort that stems from the core.</p>
                    <a href="/details" class="circle-button">+</a>
                </div>
                <div class="feature">
                    <img src="/public/images/icon_1.png" alt="Pilates" />
                    <h2>Pilates</h2>
                    <p>Pilates is a system of repetitive exercises performed on a yoga mat or other equipment to promote strength, stability, and flexibility. Pilates exercises develop the body through muscular effort that stems from the core.</p>
                    <a href="/details" class="circle-button">+</a>
                </div>
                <div class="feature">
                    <img src="/public/images/icon_2.png" alt="Swimming pool" />
                    <h2>Swimming Pool</h2>
                    <p>Enjoy swimming long lengths in our indoor 20m swimming pool, take a dip in the jacuzzi, or rest in our poolside steam room and sauna.
                        As well as our large laned swimming area, we also offer a separate recreational/children’s swimming area ideal for little ones to enjoy some water-based fun.</p>
                    <a href="/details" class="circle-button">+</a>
                </div>
                <div class="feature">
                    <img src="/public/images/icon_3.png" alt="Diet Plan" />
                    <h2>Healthy diet plan</h2>
                    <p>However, a diet plan is tailored to an individual's health status, weight and lifestyle, along with their weight loss and health goals. The diet plan acts as a bespoke template to steer your eating behaviour, exercise and lifestyle management towards optimal health and wellbeing.</p>
                    <a href="/details" class="circle-button">+</a>
                </div>
            </section>
        </div>
    )
}

export default Classes