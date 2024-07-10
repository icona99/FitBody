import { Link } from 'react-router-dom'
import styles from './Details.module.css'

const DetailsCard = ({ card }) => {
    return (
        <div className={styles.card}>
            <img src={card.imageUrl} alt={card.title} />
            <h2>{card.title}</h2>
            <p>{card.level}</p>
            <p>{card.description}</p>
            <Link to={'/edit'} className='circle-button'>Edit</Link>
            <Link to={'/delete'} className='circle-button'>Delete</Link>
        </div>
    )
}
export default DetailsCard