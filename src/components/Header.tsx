import { useRef, useState, useEffect } from "react";
import LoupeIcon from '../assets/images/loupe-icon.png'
import NotificationIcon from '../assets/images/notification-icon.png'
import DefaultAvatarIcon from '../assets/images/default-avatar.png'
import { Link } from "react-router-dom";

export type Movie = 'venom3' | 'despicableMe4' | 'deadpool3' | 'fnafMovie' | 'vaiana2' | 'joker2' | 'redOne';

function Header() {
    const defaultName: string = 'xxx xxxx';

    const [userName, setUserName] = useState<string>(defaultName);
    const [searchBarVisible, setSearchBarVisible] = useState<boolean>(false);
    const inputRef = useRef<any>(null);

    const toggleSearchBar = (): void => setSearchBarVisible(!searchBarVisible);
    
    function username(username: string | null, minMax: [number, number]): string | undefined {
        const randomUsername: string = `user${Math.floor(Math.random() * 9)}`;
        const shortenUsername: string | undefined = username?.slice(0, minMax[1]);

        if (typeof username !== 'string') return randomUsername;

        if (typeof username === 'string') {
            if (username.trim() === '') {
                return randomUsername;
            } else if (username.length <= minMax[1] && username.length >= minMax[0]) {
                return username;
            } else if (username.length > minMax[1]) {
                return shortenUsername;
            } else if (username.length < minMax[0]) {
                return randomUsername;
            }
        }
    }

    function changeUserName(): void {
        const maxLength: number = 8;
        const usernameFromUser: string | undefined = username(prompt(`Enter an username (${maxLength} characters max): `), [3, maxLength]);
        usernameFromUser && setUserName(typeof usernameFromUser === 'undefined' ? defaultName : usernameFromUser);
    }
    
    function isIncluding(keywords: Array<string>, movieToOpen: Movie, target: HTMLInputElement, delay?: number): void {
        keywords.forEach(keyword => {
            if (target.value.includes(keyword)) {
                setTimeout((): void => {
                    open(`Spermflix/movies/${movieToOpen}`, '_self');
                    target.value = '';
                }, !delay ? 300 : delay);
            }
        })
    }

    function launchTypedVideo(e: React.ChangeEvent<HTMLInputElement>): void {
        const target = e.target as HTMLInputElement;
        if (target) {
            isIncluding(['despicableme', 'minions'], 'despicableMe4', target);
            isIncluding(['deadpool', 'wolverine'], 'deadpool3', target);
            isIncluding(['piec', 'fnaf', 'freddy'], 'fnafMovie', target);
            isIncluding(['folie', 'joker'], 'joker2', target);
            isIncluding(['red'], 'redOne', target);
            isIncluding(['vaiana'], 'vaiana2', target);
            isIncluding(['venom'], 'venom3', target);
        }
    }

    useEffect(() => {
        inputRef.current && inputRef.current.focus();

        return() => {
            inputRef.current && inputRef.current.blur();
        }
    }, [searchBarVisible]);

    return(
        <header>
            <div id="spermflix-title">Spermflix</div>

            <div>
                <nav>
                    <ul>
                        <li className="home-button-for-my-list"><Link to="/Spermflix">Home</Link></li>
                        <li><Link to="#">Series</Link></li>
                        <li><Link to="/Spermflix/Films">Films</Link></li>
                        <li><Link to="#">Latest</Link></li>
                        <li className="my-videos-list-button"><Link to="#">My list</Link></li>
                    </ul>
                </nav>
            </div>

            <div>{searchBarVisible && <input ref={inputRef} onChange={launchTypedVideo} type="text" name="searchBar" id="searchBar" autoFocus required autoComplete="on" />}</div>
            <div><img onClick={toggleSearchBar} id="searchBarToggleButton" src={LoupeIcon} alt="loupe-icon" draggable={false} /></div>
            <div id="usernameDisplay" onClick={changeUserName}>{userName}</div>
            <div><img onClick={() => alert('Notifications not found.')} id="notificationBellButton" src={NotificationIcon} alt="notification-icon" draggable={false} /></div>
            <div><img id="userProfileIcon" src={DefaultAvatarIcon} alt="user-pfp-icon" draggable={false} /></div>
        </header>
    );

    // Credits: https://netflicz-reactjs-rho.vercel.app/series
}
export default Header
