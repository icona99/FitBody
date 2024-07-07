
const SportCard = (
    {
        card
    }
) => {
    return (
        <div class="feature">
            <img src={card.imageUrl} alt="Diet Plan" />
            <h2>{card.title}</h2>
            <p>{card.level}</p>
            <p>{card.description}</p>
            <a href="/details" class="circle-button">+</a>
        </div>)
}

export default SportCard