import './Card.scss';
import StarRating from './StarRating.jsx';
import styles from './Card.module.css';


function Card() {
    return (
        <div className="card">
            <img src="https://raw.githubusercontent.com/stevenbachimont/card/main/src/assets/dysto.png" alt="ville seule" />
            <h2 className={styles.violetColor}>Dystopy</h2>
            <p>Mourir seul</p>
            <StarRating />
        </div>
    );
}

export default Card;
