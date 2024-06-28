import '/src/components/Home.css'

export default function Home() {
    return (
        <div className="home">
            <div className="home-text">
                <h1> Get fit with us</h1>
                <p>Pilates, Yoga, Fitness, Spinning &amp; many more</p>
            </div>
            <div className="home-button">
                <a href="#">Join Now</a>
            </div>
            <section class="features">
                <div class="feature">
                    <img src="/images/icon_5" alt="Yoga" />
                    <h2>Yoga</h2>
                    <p>These classes unite your breath with your body offering a variety of poses accessible to all levels of yoga practitioners. Classes will include building strength in the core, balance in the body, as well as increasing flexibility and range of motion. Calm your mind, feel alive and revived</p>
                </div>
                <div class="feature">
                    <img src="/images/icon_2" alt="Swimming pool" />
                    <h2>Swimming Pool</h2>
                    <p>Enjoy swimming long lengths in our indoor 20m swimming pool, take a dip in the jacuzzi, or rest in our poolside steam room and sauna.
                        As well as our large laned swimming area, we also offer a separate recreational/children’s swimming area ideal for little ones to enjoy some water-based fun.</p>
                </div>
                <div class="feature">
                    <img src="/images/icon_8" alt="Diet Plan" />
                    <h2>Healthy diet plan</h2>
                    <p>However, a diet plan is tailored to an individual's health status, weight and lifestyle, along with their weight loss and health goals. The diet plan acts as a bespoke template to steer your eating behaviour, exercise and lifestyle management towards optimal health and wellbeing.</p>
                </div>
            </section>
        </div>
    )
}