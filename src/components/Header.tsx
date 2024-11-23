import { useRef, useState, useEffect } from "react";
import LoupeIcon from '../assets/images/loupe-icon.png'
import NotificationIcon from '../assets/images/notification-icon.png'
import DefaultAvatarIcon from '../assets/images/default-avatar.png'
import { Link } from "react-router-dom";

function Header() {

    const username: string = 'xxx xxxx';

    const [searchBarVisible, setSearchBarVisible] = useState<boolean>(false);
    const inputRef = useRef<any>(null);

    function showSearchBar() {
        setSearchBarVisible(!searchBarVisible);
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="#">Series</Link></li>
                        <li><Link to="#">Films</Link></li>
                        <li><Link to="#">Latest</Link></li>
                        <li><Link to="#">My list</Link></li>
                    </ul>
                </nav>
            </div>

            <div>{searchBarVisible && <input ref={inputRef} type="text" name="searchBar" id="searchBar" autoFocus required autoComplete="on" />}</div>
            <div><img onClick={showSearchBar} id="searchBarToggleButton" src={LoupeIcon} alt="loupe-icon" draggable={false} /></div>
            <div id="usernameDisplay">{username.length < 9 ? username : `user${Math.floor(Math.random() * 99)}`}</div>
            <div><img onClick={() => alert('Notifications not found.')} id="notificationBellButton" src={NotificationIcon} alt="notification-icon" draggable={false} /></div>
            <div><img onClick={() => alert('Soon.')} id="userProfileIcon" src={DefaultAvatarIcon} alt="user-pfp-icon" draggable={false} /></div>
        </header>
    );

    // Credits: https://netflicz-reactjs-rho.vercel.app/series
}
export default Header