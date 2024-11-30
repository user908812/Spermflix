import { Link } from "react-router-dom";
import OrangeNotificationIcon from '../assets/images/orange-heart-notification-icon.png'
import { Movie } from './Header'
import { useState } from "react";

interface VideosProperties {
    category: string;
    videos: [{name: string, src: string}, {name: string, src: string}, {name: string, src: string}, {name: string, src: string}, {name: string, src: string}, {name: string, src: string}]
}

class Notif {
    private readonly message: string;
    private readonly description?: string;
    private readonly icon?: string;

    constructor(message: string, description: string, icon?: string) {
        this.message = message;
        this.description = description;
        this.icon = icon;
    }
    create(): void {
        Notification.requestPermission().then(perm => {
            perm === 'granted' && new Notification(this.message, {
                body: this.description,
                icon: this.icon ? this.icon : OrangeNotificationIcon
            });
        })
    }
}

export function notify(message: string, description: string, icon: string = OrangeNotificationIcon): void {
    new Notif(message, description, icon).create();
}

export const movie: string[] = [
    'deadpool3', 
    'fnafMovie', 
    'vaiana2', 
    'joker2', 
    'despicableMe4', 
    'redOne'
];

function Videos(props: VideosProperties) {
    
    const [toggleFavVideos, setToggleFavVideos] = useState<boolean>(false);
    const [favouriteVideos, setFavouriteVideos] = useState<Movie[]>(['venom3']);

    document.querySelector<HTMLLIElement>('.my-videos-list-button')?.addEventListener('click', () => setToggleFavVideos(!toggleFavVideos));
    document.querySelector<HTMLLIElement>('.home-button-for-my-list')?.addEventListener('click', () => setToggleFavVideos(false));

    function setBiggerIMG(e: React.MouseEvent<HTMLImageElement>): void {
        const target = e.target as HTMLImageElement;
        if (target) {
          setTimeout(() => {
            target.style.width = '330px';
            target.style.height = '180px';
          }, 200);
        }
      }

      function setSmallerIMG(e: React.MouseEvent<HTMLImageElement>): void {
        const target = e.target as HTMLImageElement;
        if (target) {
          setTimeout(() => {
            target.style.width = '300px';
            target.style.height = '150px';
          }, 250);
        }
      }

      function movieRightClick(movieID: number, movieName: Movie): void {
            notify('Success!', `Added ${props.videos[movieID].name} to favourites.`);
            setFavouriteVideos([...favouriteVideos, movieName]);
      }

      function getFavVid(src: string, indexOfName: number, index: number, favVideo: string) {
            return(
                <div className="fav-vid-container">
                    <img className="fav-movie-image" src={src} alt="fav-vid-image" draggable={false} />
                    <div className="fav-movie-name" key={index}>{props.videos[indexOfName].name} &nbsp; <Link to={`./movies/${favVideo}`}><button className="fav-vid-watch-now-btn">Watch Now</button></Link></div>
                </div>
            );
      }

      function checkVideosByFavVid(favVideo: Movie, index: number) {
            switch (favVideo) {
                case 'deadpool3':
                    return getFavVid(props.videos[0].src, 0, index, favVideo);
                case 'fnafMovie':
                    return getFavVid(props.videos[1].src, 1, index, favVideo);
                case 'vaiana2':
                    return getFavVid(props.videos[2].src, 2, index, favVideo);
                case 'joker2':
                    return getFavVid(props.videos[3].src, 3, index, favVideo);
                case 'despicableMe4':
                    return getFavVid(props.videos[4].src, 4, index, favVideo);
                case 'redOne':
                    return getFavVid(props.videos[5].src, 5, index, favVideo);
            }
      }

    return(
        <>   
            {!toggleFavVideos ?
            (
                <section className="video-section">
                <div className='videos-category'>{props.category}</div>

                <div className="videos-grid">
                    <div className="video">
                        <Link to={`./movies/${movie[0]}`}><img onContextMenu={() => movieRightClick(0, 'deadpool3')} onMouseOver={setBiggerIMG} onMouseOut={setSmallerIMG} draggable={false} className="video-in-videos" src={props.videos[0].src} title={props.videos[0].name} alt="video-icon" /></Link>
                    </div>
                    <div className="video">
                        <Link to={`./movies/${movie[1]}`}><img onContextMenu={() => movieRightClick(1, 'fnafMovie')} onMouseOver={setBiggerIMG} onMouseOut={setSmallerIMG} draggable={false} className="video-in-videos" src={props.videos[1].src} title={props.videos[1].name} alt="video-icon" /></Link>
                    </div>
                    <div className="video">
                        <Link to={`./movies/${movie[2]}`}><img onContextMenu={() => movieRightClick(2, 'vaiana2')} onMouseOver={setBiggerIMG} onMouseOut={setSmallerIMG} draggable={false} className="video-in-videos" src={props.videos[2].src} title={props.videos[2].name} alt="video-icon" /></Link>
                    </div>
                    <div className="video">
                        <Link to={`./movies/${movie[3]}`}><img onContextMenu={() => movieRightClick(3, 'joker2')} onMouseOver={setBiggerIMG} onMouseOut={setSmallerIMG} draggable={false} className="video-in-videos" src={props.videos[3].src} title={props.videos[3].name} alt="video-icon" /></Link>
                    </div>
                    <div className="video">
                        <Link to={`./movies/${movie[4]}`}><img onContextMenu={() => movieRightClick(4, 'despicableMe4')} onMouseOver={setBiggerIMG} onMouseOut={setSmallerIMG} draggable={false} className="video-in-videos" src={props.videos[4].src} title={props.videos[4].name} alt="video-icon" /></Link>
                    </div>
                    <div className="video">
                        <Link to={`./movies/${movie[5]}`}><img onContextMenu={() => movieRightClick(5, 'redOne')} onMouseOver={setBiggerIMG} onMouseOut={setSmallerIMG} draggable={false} className="video-in-videos" src={props.videos[5].src} title={props.videos[5].name} alt="video-icon" /></Link>
                    </div>
                </div>
            </section>
            ) :
            (
            <div>    
                {favouriteVideos.map((favVideo, index) => checkVideosByFavVid(favVideo, index))}
            </div>
            )}
        </>
    );
}
export default Videos