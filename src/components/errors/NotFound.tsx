import styles from './NotFound.module.css'
import SadEmojiIcon from '../../assets/images/sad-emoji.png'
import { Link } from 'react-router-dom';

function NotFound() {
    return(
        <div className={styles.errorPageContainer}>
            <div className={styles.center}>
                <img className={styles.sadEmoji} width={300} height={300} src={SadEmojiIcon} alt="sad-emoji" />
            </div>
                <h1 className={styles.header}>404</h1>
                <div className={styles.subheader}>Page not found</div>
                <p className={styles.description}>It looks like you landed in the wrong place. The page you are looking for may have been deleted, changed its address, or never existed.</p>
                <div className={styles.buttonContainer}>
                    <Link to="/"><button className={styles.goBackBTN}>Go back</button></Link>
                </div>
        </div>
    );
}
export default NotFound