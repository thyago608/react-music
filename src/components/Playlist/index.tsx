import Image from "next/image";
import styles from "./styles.module.scss";

export function Playlist(){
    return (
        <section className={styles.container}>
            <header>
                <h1 className={styles.titlePlaylist}>Only STARDUST</h1>
            </header>
            
            <div className={styles.containerImage}>
                <Image src="/images/playlist1.jpg" alt="only stardust" layout="fill"/>
            </div>
            <p className={styles.quantityTracks}>24 tracks</p>
        </section>
    );
}