import AlbumParallaxBanner from '../../components/album_parallax_banner/AlbumParallaxBanner';
import Footer from '../../components/footer/Footer';
import './albums.css';

const Albums = ({ artist, albums, settings }) => {
    albums.sort(function(a, b) {
        return a.index - b.index;
    });

    return (
        <div className="page albums" data-testid="albums">
            {albums.map((album, i) => (
                <AlbumParallaxBanner key={"albums-album-parallax-banner-" + i} artist={artist} album={album} direction={i % 2 !== 0} end={i === albums.length - 1} />
            ))}
            <Footer artist={artist} />
        </div>
    )
}

export default Albums;
