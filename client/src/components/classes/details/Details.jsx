import styles from './Details.module.css'

const DetailsCard=({card}) => {
    return (
        <div className={styles.card}>
        <img src={styles.card.imageUrl} alt={styles.title}/>
        <h2>{styles.title}</h2>
        <p>{styles.level}</p>
        <p>{styles.description}</p>
        <a href="/edit" className="circle-button">Edit</a>
        <a href="/delete" className="circle-button">Delete</a>
      </div>
    )
}
export default DetailsCard