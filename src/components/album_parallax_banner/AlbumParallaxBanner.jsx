import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import "./albumParallaxBanner.css";

const AlbumParallaxBanner = ({ artist, album, direction, end }) => {
    // let albumImage = album.pieces.filter(piece => piece.isAlbumCover === true);

    return (
        <>
            <ParallaxBanner
                className="parallax-banner"
                layers={[
                    {
                        image: `${process.env.REACT_APP_IMAGES_URL}${artist.uuid}/${album.pieces[0].file}`,
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
                data-testid="parallax-banner"
            ></ParallaxBanner>
            {end ? <></> : <div className="album-break"></div>}
        </>
    );
};

export default AlbumParallaxBanner;
