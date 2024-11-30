import Videos from '../../components/Videos'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Deadpool3 from '../../assets/images/deadpool-3.png'
import FnafMovie from '../../assets/images/fnaf-movie.png'
import Vaiana2 from '../../assets/images/vaiana-2.png'
import JokerMovie from '../../assets/images/joker-movie.png'
import DespicableMe4 from '../../assets/images/despicable-me-4.png'
import RedOne from '../../assets/images/czerwona-jedynka.png'
import Oppenheimer from '../../assets/images/oppenheimer.png'
import SpidermanMultiverse from '../../assets/images/spider-man-multiverse.png'
import Wonka from '../../assets/images/wonka.png'
import StraznicyGalaktyki from '../../assets/images/straznicy-galaktyki.png'
import SuperMarioBros from '../../assets/images/super-mario-bros.png'
import FlashMovie from '../../assets/images/flash-movie.png'
import TheBatmanMovie from '../../assets/images/the-batman.png'
import DoctorStrange from '../../assets/images/doctor-strange.png'
import AvatarMovie from '../../assets/images/avatar-the-way-of-water.png'
import PussInBoots from '../../assets/images/puss-in-boots.png'
import Sonic2Movie from '../../assets/images/sonic-2.png'
import Therrifier2 from '../../assets/images/therrifier-2.png'
import SpidermanNoWayHome from '../../assets/images/spider-man-no-way-home.png'
import Venom2 from '../../assets/images/venom-2.png'
import Sing2 from '../../assets/images/sing-2.png'
import MortalKombat from '../../assets/images/mortal-kombat.png'
import JungleCruise from '../../assets/images/jungle-cruise.png'
import GodzillaVsKong from '../../assets/images/godzilla-vs-kong.png'

function Films() {
    return(
        <>
            <Header />
                <Videos category="Popular (2024)" videos={[
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
                    ]}/>
                <Videos category="Best of 2023" videos={[
                        {
                            name: 'Oppenheimer',
                            src: Oppenheimer
                        },
                        {
                            name: 'Spider-Man: Across the Spider-Verse',
                            src: SpidermanMultiverse
                        },
                        {
                            name: 'Wonka',
                            src: Wonka
                        },
                        {
                            name: 'Strażnicy Galaktyki: Volume 3',
                            src: StraznicyGalaktyki
                        },
                        {
                            name: 'Super Mario Bros',
                            src: SuperMarioBros
                        },
                        {
                            name: 'Flash',
                            src: FlashMovie
                        }
                    ]}/>
                <Videos category="Best of 2022" videos={[
                        {
                            name: 'The Batman',
                            src: TheBatmanMovie
                        },
                        {
                            name: 'Avatar: The Way of Water',
                            src: AvatarMovie
                        },
                        {
                            name: 'Doctor Strange in the Multiverse of Madness',
                            src: DoctorStrange
                        },
                        {
                            name: 'Puss in Boots: The Last Wish',
                            src: PussInBoots
                        },
                        {
                            name: 'Sonic the Hedgehog 2',
                            src: Sonic2Movie
                        },
                        {
                            name: 'Terrifier 2',
                            src: Therrifier2
                        }
                    ]}/>
                <Videos category="Best of 2021" videos={[
                        {
                            name: 'Spider-Man: No Way Home',
                            src: SpidermanNoWayHome
                        },
                        {
                            name: 'Venom 2: Carnage',
                            src: Venom2
                        },
                        {
                            name: 'Sing 2',
                            src: Sing2
                        },
                        {
                            name: 'Mortal Kombat',
                            src: MortalKombat
                        },
                        {
                            name: 'Jungle Cruise',
                            src: JungleCruise
                        },
                        {
                            name: 'Godzilla vs. Kong',
                            src: GodzillaVsKong
                        }
                    ]}/>
                    <Videos category="Hall of Fame (2021-2024)" videos={[
                        {
                            name: 'Terrifier 2',
                            src: Therrifier2
                        },
                        {
                            name: 'Spider-Man: No Way Home',
                            src: SpidermanNoWayHome
                        },
                        {
                            name: 'Avatar: The Way of Water',
                            src: AvatarMovie
                        },
                        {
                            name: 'Puss in Boots: The Last Wish',
                            src: PussInBoots
                        },
                        {
                            name: 'Oppenheimer',
                            src: Oppenheimer
                        },
                        {
                            name: 'Five Nights at Freddy\'s',
                            src: FnafMovie
                        },
                    ]}/>
            <Footer />
        </>
    );
}
export default Films