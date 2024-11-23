import { Link } from "react-router-dom";

interface VideosProperties {
    category: string;
    videos: [{name: string, src: string}, {name: string, src: string}, {name: string, src: string}, {name: string, src: string}, {name: string, src: string}, {name: string, src: string}]
}

function Videos(props: VideosProperties) {

    const movie: string[] = ['deadpool3', 'fnafMovie', 'vaiana2', 'joker2', 'despicableMe4', 'redOne'];

    function setBiggerIMG(e: Event) {
        e.target.style.width = '350px';
        e.target.style.height = '200px';
    }
    function setSmallerIMG(e: Event) {
        e.target.style.width = '300px';
        e.target.style.height = '150px';
    }

    return(
        <section className="video-section">
            <div className='videos-category'>{props.category}</div>

            <div className="videos-grid">
                <div className="video">
                    <Link to={`/movies/${movie[0]}`}><img onMouseOver={setBiggerIMG} onMouseOut={setSmallerIMG} draggable={false} className="video-in-videos" src={props.videos[0].src} title={props.videos[0].name} alt="video-icon" /></Link>
                </div>
                <div className="video">
                    <Link to={`/movies/${movie[1]}`}><img onMouseOver={setBiggerIMG} onMouseOut={setSmallerIMG} draggable={false} className="video-in-videos" src={props.videos[1].src} title={props.videos[1].name} alt="video-icon" /></Link>
                </div>
                <div className="video">
                    <Link to={`/movies/${movie[2]}`}><img onMouseOver={setBiggerIMG} onMouseOut={setSmallerIMG} draggable={false} className="video-in-videos" src={props.videos[2].src} title={props.videos[2].name} alt="video-icon" /></Link>
                </div>
                <div className="video">
                    <Link to={`/movies/${movie[3]}`}><img onMouseOver={setBiggerIMG} onMouseOut={setSmallerIMG} draggable={false} className="video-in-videos" src={props.videos[3].src} title={props.videos[3].name} alt="video-icon" /></Link>
                </div>
                <div className="video">
                    <Link to={`/movies/${movie[4]}`}><img onMouseOver={setBiggerIMG} onMouseOut={setSmallerIMG} draggable={false} className="video-in-videos" src={props.videos[4].src} title={props.videos[4].name} alt="video-icon" /></Link>
                </div>
                <div className="video">
                    <Link to={`/movies/${movie[5]}`}><img onMouseOver={setBiggerIMG} onMouseOut={setSmallerIMG} draggable={false} className="video-in-videos" src={props.videos[5].src} title={props.videos[5].name} alt="video-icon" /></Link>
                </div>
            </div>

        </section>
    );
}
export default Videos