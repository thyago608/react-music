import Head from "next/head";
import { PlaylistsCollection } from "components/PlaylistsCollection";
import { Artist } from "components/Artist";
import styles from "./home.module.scss";


const artists = [
  {  name:"Jenny Villa", image:"/images/track1.jpg", day:3, albumsAmount: 10},
  {  name:"Aquila", image:"/images/track2.jpg", day:5, albumsAmount: 3},
  {  name:"This is War", image:"/images/track3.jpg", day:2, albumsAmount: 2},
  {  name:"Donna", image:"/images/track4.jpg", day:1, albumsAmount: 1},
  {  name:"Avicii", image:"/images/track5.jpg", day:32, albumsAmount: 5},
  {  name:"Dj Balvin", image:"/images/track6.jpg", day:23, albumsAmount: 2},
  {  name:"Zandaya", image:"/images/track7.jpg", day:54, albumsAmount: 1},
  {  name:"Sonza", image:"/images/track8.jpg", day:7, albumsAmount: 7}
];

export default function Home(){
  return(
    <main className={styles.main}>
        <Head>
            <title>React Music | Home</title>
        </Head>
       
        <PlaylistsCollection title="Featured Playlists"/>

        <section className={styles.profileViews}>
          <header>
            <h1>Profile Views</h1>
          </header>

            <div className={styles.containerArtists}>
                {artists.map(artist => (
                <Artist key={artist.name} data={artist}/>
              ))}
            </div>
        </section>        

    </main>
  );
}