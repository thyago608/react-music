import Image from "next/image";
import styles from "./styles.module.scss";

type ArtistType = {
    name:string;
    image:string;
    day:number;
    albumsAmount: number;
};

type ArtistProps = {
    data: ArtistType;
};

export function Artist({ data }:ArtistProps){
    return(
        <section className={styles.container}>
            <header className={styles.header}>
                <h1>{data.name}</h1>
            </header>
            <div className={styles.containerImage}>
                <Image src={data.image} alt={data.name} layout="fill" />
            </div>
            <span className={styles.day}>{data.day} day ago</span>
            <span className={styles.amountAlbums}>{data.albumsAmount} albums</span>
        </section>
    );
}