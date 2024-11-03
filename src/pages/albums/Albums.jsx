import AlbumParallaxBanner from '../../components/album_parallax_banner/AlbumParallaxBanner';
import './albums.css';

const Albums = ({albums, settings}) => {
    return(
        <div class="page albums">
            {albums.map((album, i) => (
                    <>
                        <AlbumParallaxBanner key={album.url} album={album} direction={i % 2 !== 0}/>
                        {i !== albums.length - 1 ? <div key={album.url + "break"} className="album-break"></div> : <></>}
                    </>
                ))}
        </div>
    )
}

export default Albums;
