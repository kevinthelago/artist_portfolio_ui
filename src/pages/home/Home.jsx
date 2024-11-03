import AlbumParallaxBanner from "../../components/album_parallax_banner/AlbumParallaxBanner";
import Scrollbar from "../../components/scrollbar/Scrollbar";
import video from "./IMG_5829.MOV";
import background from './11045-512.png';
import "./home.css";
import { useEffect, useState } from "react";


const Home = ({albums, settings}) => {
    let [backgroundPosition, setBackgroundPosition] = useState(0);
    const page = document.getElementById('page');
    console.log(page)

    useEffect(() => {
        onscroll = () => {
            console.log(page.getBoundingClientRect().y)
            setBackgroundPosition(Math.abs(page.getBoundingClientRect().y));
        }
    }, [])

    return(
        <>
            <div id="page" className={`home page ${settings.theme}-theme`}>
                {/* <div id="home-background" style={{background: `url(${background}) no-repeat center`, top: backgroundPosition}}></div> */}
                <div id="home-hero" className="hero">
                    <video id="home-hero-video" loop autoPlay muted playsInline>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="album-break"></div>
                {albums.map((album, i) => (
                    <>
                        <AlbumParallaxBanner key={album.url} album={album} direction={i % 2 === 0}/>
                        {i !== albums.length - 1 ? <div key={album.url + "break"} className="album-break"></div> : <></>}
                    </>
                ))}
            </div>
            <Scrollbar />
        </>
    )
};

export default Home;
