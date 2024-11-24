import StarIcon from '../assets/images/star.png'
import BlackStarIcon from '../assets/images/black_star.png'
import PlayIcon from '../assets/images/play-icon.png'
import InfoIcon from '../assets/images/info-icon.png'
import { Link } from 'react-router-dom'

interface ImageProps {
    id: string;
    movieInfo: string;
    src: string;
    movie: string;
    makeDate: string;
    desc: string;
    rating: 1 | 2 | 3 | 4 | 5;
}

function HomeImage(props: ImageProps) {

    function getNumberOfStars() {
        switch (props.rating) {
            case 1:
                return(
                    <div>
                        <img src={StarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={BlackStarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={BlackStarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={BlackStarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={BlackStarIcon} alt="star" className='star-icon' draggable={false} />
                    </div>
                );
            case 2:
                return(
                    <div>
                        <img src={StarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={StarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={BlackStarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={BlackStarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={BlackStarIcon} alt="star" className='star-icon' draggable={false} />
                    </div>
                );
            case 3:
                return(
                    <div>
                        <img src={StarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={StarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={StarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={BlackStarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={BlackStarIcon} alt="star" className='star-icon' draggable={false} />
                    </div>
                );
            case 4:
                return(
                    <div>
                        <img src={StarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={StarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={StarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={StarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={BlackStarIcon} alt="star" className='star-icon' draggable={false} />
                    </div>
                );
            case 5:
                return(
                    <div>
                        <img src={StarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={StarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={StarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={StarIcon} alt="star" className='star-icon' draggable={false} />
                        <img src={StarIcon} alt="star" className='star-icon' draggable={false} />
                    </div>
                );
        }
    }

    return(
        <div id="home-page-image" style={{background: `url('${props.src}')`}}>
            <div id='home-page-image-content'>
                <div id='home-page-movie-name'>{props.movie}</div>
                <div id='home-page-stars-date-hd-display'><div>{getNumberOfStars()}</div> <div>{props.makeDate}</div> <div id="home-page-hd-title"><span>HD</span></div></div>
                <div id='home-page-movie-description'>{props.desc}</div>

                <div id='home-page-buttons'>
                    <Link style={{textDecoration: 'none'}} to={`./movies/${props.id}`}><button id='home-page-play-button'><div><img id='home-page-play-icon' src={PlayIcon} alt="play-icon" /></div><div id='home-page-play-title'>Play</div></button></Link>
                    <button id='home-page-info-button' onClick={() => alert(props.movieInfo)}><div><img id='home-page-info-icon' src={InfoIcon} alt="info-icon" /></div><div id='home-page-info-title'>More Info</div></button>
                </div>
            </div>
        </div>
    );
}
export default HomeImage