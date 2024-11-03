import AlbumParallaxBanner from '../../components/album_parallax_banner/AlbumParallaxBanner';
import Footer from '../../components/footer/Footer';
import './albums.css';

const Albums = ({albums, settings}) => {
    return(
        <div className="page albums">
            {albums.map((album, i) => (
                    <>
                        <AlbumParallaxBanner key={"albums-album-parallax-banner-" + i} album={album} direction={i % 2 !== 0}/>
                        {i !== albums.length - 1 ? <div key={"albums-album-break-" + i} className="album-break"></div> : <></>}
                    </>
                ))}
            <Footer />
        </div>
    )
}

export default Albums;
