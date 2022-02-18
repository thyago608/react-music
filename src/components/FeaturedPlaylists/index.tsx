import { useState } from "react";
import { Playlist } from "../Playlist";
import styles from "./styles.module.scss";

const playlists = [
    { image:"/images/playlist1.jpg", title:"Only STARDUST", tracksAmount:24 },
    { image:"/images/playlist2.jpg", title:"Mike Vella", tracksAmount:12 },
    { image:"/images/playlist3.jpg", title:"The best Sigles", tracksAmount:163 },
    { image:"/images/playlist4.jpg", title:"This is War", tracksAmount:42 }
];


export function FeaturedPlaylists(){
    // const [playlists, setPlaylists] = useState([]);

    return(
        <div>
           {playlists.map(playlist => (
                <Playlist key={ playlist.tracksAmount} data={ playlist }/>
           ))}
        </div>
    );
}