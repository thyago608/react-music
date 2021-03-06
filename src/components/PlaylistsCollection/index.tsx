import { useState } from "react";
import { Playlist } from "../Playlist";
import styles from "./styles.module.scss";

const playlists = [
    { image:"/images/playlist1.jpg", title:"Only STARDUST", tracksAmount:24 },
    { image:"/images/playlist2.jpg", title:"Mike Vella", tracksAmount:12 },
    { image:"/images/playlist3.jpg", title:"The best Sigles", tracksAmount:163 },
    { image:"/images/playlist4.jpg", title:"This is War", tracksAmount:42 }
];

type CollectionProps = {
    title:string;
};

export function PlaylistsCollection({ title }:CollectionProps){
    // const [playlists, setPlaylists] = useState([]);

    return(
        <section className={styles.container}>
            <header>
                <h1>{title}</h1>
            </header>

            <div className={styles.containerPLaylists}>
                <div 
                    className={styles.playlists}
                    style={{ width: `${playlists.length * 300}px`}}
                >
                    {playlists.map(playlist => (
                        <Playlist key={ playlist.tracksAmount} data={ playlist }/>
                    ))}
                </div>
            </div>
        </section>
    );
}