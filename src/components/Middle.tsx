import HomeImage from "./HomeImage";
import Venom3Banner from '../assets/images/venom3-banner.png'
import Videos from "./Videos";
import Deadpool3 from '../assets/images/deadpool-3.png'
import FnafMovie from '../assets/images/fnaf-movie.png'
import Vaiana2 from '../assets/images/vaiana-2.png'
import JokerMovie from '../assets/images/joker-movie.png'
import DespicableMe4 from '../assets/images/despicable-me-4.png'
import RedOne from '../assets/images/czerwona-jedynka.png'

function Middle() {
    return(
        <main>
            <HomeImage
                id="venom3"
                movie="Venom 3: The Last Dance" 
                desc="Eddie Brock and Venom face new challenges as Knull, the creator of the symbiotes, seeks to retrieve a Codex within Eddie to free himself. The movie takes Eddie and Venom on a perilous journey, including encounters with the deadly Xenophages and military forces at Area 51." 
                movieInfo="Full name: 'Venom: The Last Dance', Release date: '2024-10-25', Length: '140min', Release locations: 'Los Angeles, London, New York, Spain', Age category: 'PG-13'"
                makeDate="2024-10-21" 
                rating={5} 
                src={Venom3Banner}
            />
            <Videos
                category="Popular"
                videos={[
                    {
                        name: 'Deadpool & Wolverine',
                        src: Deadpool3
                    },
                    {
                        name: 'Five Nights at Freddy\'s',
                        src: FnafMovie
                    },
                    {
                        name: 'Vaiana 2',
                        src: Vaiana2
                    },
                    {
                        name: 'Joker: Folie à deux',
                        src: JokerMovie
                    },
                    {
                        name: 'Minions: The Rise of Gru',
                        src: DespicableMe4
                    },
                    {
                        name: 'Red One',
                        src: RedOne
                    }
                ]}
             />
        </main>
    );
}
export default Middle