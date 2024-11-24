import NotFoundVideoIcon from '../../assets/images/video-not-found.png'
import { Link } from "react-router-dom";

function MovieNotFound() {
    return(
    <div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img width={1200} height={400} src={NotFoundVideoIcon} alt="video-not-found-icon" draggable={false} />
        </div>
            <div style={{color: 'red', textAlign: 'center', marginBottom: '10px'}}>Error: Invalid movie ID.</div>
            <div id="go-back-from-movie-btn">
                <Link to="/Spermflix"><button>Go back</button></Link>
            </div>
    </div>
    );
}
export default MovieNotFound