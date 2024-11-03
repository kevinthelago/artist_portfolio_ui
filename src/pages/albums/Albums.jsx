import AlbumParallaxBanner from '../../components/album_parallax_banner/AlbumParallaxBanner';
import Footer from '../../components/footer/Footer';
import './albums.css';

const Albums = ({ artist, albums, settings }) => {
    return (
        <div className="page albums">
            {albums.map((album, i) => (
                <AlbumParallaxBanner key={"albums-album-parallax-banner-" + i} album={album} direction={i % 2 !== 0} end={i === albums.length - 1} />
            ))}
            <Footer artist={artist} />
        </div>
    )
}

export default Albums;
