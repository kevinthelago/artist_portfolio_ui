import AlbumParallaxBanner from "../../components/album_parallax_banner/AlbumParallaxBanner";
import Scrollbar from "../../components/scrollbar/Scrollbar";
import video from "./IMG_5829.MOV";
import "./home.css";


const Home = ({ albums, settings }) => {
    return (
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
                        <AlbumParallaxBanner key={album.uuid} album={album} direction={i % 2 === 0} />
                        {i !== albums.length - 1 ? <div key={"break-" + i} className="album-break"></div> : <></>}
                    </>
                ))}
            </div>
            <Scrollbar />
        </>
    )
};

export default Home;
