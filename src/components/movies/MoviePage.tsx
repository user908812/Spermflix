import Header from "../Header";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import MovieNotFound from "../errors/MovieNotFound";
import Movie from "../Movie";

function MoviePage() {

    const params = useParams();

    function renderMove() {
        switch (params.movieId) {
            case 'deadpool3':
                return <Movie url="https://vider.info/embed/video/xmmse5" />
            case 'fnafMovie':
                return <Movie url="https://vider.info/embed/video/esev8s" />
            case 'vaiana2':
                return <Movie url="https://vider.info/embed/video/e8e5x5" />
            case 'joker2':
                return <Movie url="https://vider.info/embed/video/ee1vc1" />
            case 'despicableMe4':
                return <Movie url="https://vider.info/embed/video/e815se" />
            case 'redOne':
                return <Movie url="https://vider.info/embed/video/e1ees8" />
            case 'venom3':
                return <Movie url="https://vider.info/embed/video/e1xv51" />
            default:
                return <MovieNotFound />
        }
    }

    return(
        <>
            <Header />
                {renderMove()}
            <Footer />
        </>
    );
}
export default MoviePage