import { url } from "inspector";
import Image from "next/image";
import styles from "./styles.module.scss";

type PlaylistProps = {
    data:{
        image: string;
        title: string;
        tracksAmount: number;
    }
};

export function Playlist({ data }:PlaylistProps){
    return(
        <section className={styles.container}>
            <header>
                <h1 className={styles.playlistTitle}>{data.title}</h1>
            </header>
            
            <div 
                className={styles.containerImage}
            >
                <Image src={data.image} alt={data.title} layout="fill"/>
            </div>

            <span className={styles.tracksAmountPlaylist}>{data.tracksAmount} tracks</span>
        </section>
    );
}