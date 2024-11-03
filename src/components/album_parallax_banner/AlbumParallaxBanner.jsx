import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import "./albumParallaxBanner.css";

const AlbumParallaxBanner = ({ album, direction, end }) => {
    return (
        <>
            <ParallaxBanner
                className="parallax-banner"
                layers={[
                    {
                        image: `${process.env.REACT_APP_IMAGES_URL}${album.files[0]}`,
                        speed: 50,
                    },
                    {
                        children: (
                            <Link
                                to={`/albums/${album.url}`}
                                className={`album-link ${direction ? "album-link-left" : "album-link-right"
                                    }`}
                            >
                                <h1 className="album-title">{album.name}</h1>
                            </Link>
                        ),
                    },
                ]}
            ></ParallaxBanner>
            {end ? <></> : <div className="album-break"></div>}
        </>
    );
};

export default AlbumParallaxBanner;
