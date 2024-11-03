import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import './albumParallaxBanner.css';


const AlbumParallaxBanner = (props) => (
    <ParallaxBanner
        key={props.album.url}
        className="parallax-banner"
        layers={[
            {
                image: `${process.env.REACT_APP_IMAGES_URL}${props.album.files[0]}`,
                speed: 50,
            },
            {
                children: (
                    <Link
                        key={props.album.url}
                        to={`/albums/${props.album.url}`}
                        className={`album-link ${props.direction ? 'album-link-left' : 'album-link-right'}`}
                    >
                        <h1 className="album-title">{props.album.name}</h1>
                    </Link>
                ),
            },
        ]}
    ></ParallaxBanner>
);

export default AlbumParallaxBanner;
