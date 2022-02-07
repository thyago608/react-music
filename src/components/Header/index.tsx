import { FormEvent, useRef, useCallback } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "./styles.module.scss";

export function Header(){

    const handleSearchArtistsPlaylistsOrTracks = useCallback((e:FormEvent<HTMLFormElement>)=>{},[]);

    return(
        <header className={styles.container}>
            <form onSubmit={handleSearchArtistsPlaylistsOrTracks} className={styles.formSearch}>
                <div className={styles.inputBlock}>
                    <input type="text" placeholder="Search artists, playlists or tracks"/>
                    <button type="submit">
                        <FiSearch/>
                    </button>
                </div>
            </form>
        </header>
    );
}