import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import video from "./IMG_5829.MOV";
import "./home.css";

const AlbumParallaxBanner = (props) => (
    <ParallaxBanner
        className="parallax-banner"
        layers={[
            {
                image: `${process.env.REACT_APP_IMAGES_URL}/${props.album.files[0]}`,
                speed: 50,
            },
            {
                children: (
                    <Link
                        key={props.album.url}
                        to={`/album/${props.album.url}`}
                        className={`album-link`}
                    >
                        <h1 className="album-title">{props.album.name}</h1>
                    </Link>
                ),
            },
        ]}
    ></ParallaxBanner>
);

const Home = ({albums, settings}) => {
    return(
        <div className={`home page ${settings.theme}-theme`}>
            <div id="home-hero" className="hero">
                <video id="home-hero-video" loop autoPlay muted playsInline>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className="albums-break"></div>
            {albums.map((album, i) => (
                <>
                    <AlbumParallaxBanner key={album.url} album={album} />
                    <div className="albums-break"></div>
                </>
            ))}
        </div>
    )
};

export default Home;
