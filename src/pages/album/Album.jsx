import Footer from '../../components/footer/Footer';
import './album.css';

const Album = ({artist, album, settings}) => {
    return(
        <div className={`page ${settings.theme}-theme`}>
            <div className='album-title'>
                {album.name}
            </div>
            <div className='album-pieces'>
                {album.files.map((filename, i) => (
                    <div className='album-piece-wrapper'>
                        <div key={filename} className='album-piece' style={{
                            backgroundImage: `url(${process.env.REACT_APP_IMAGES_URL}${artist.uuid}/${filename})`
                        }}>
                    
                        </div>
                    </div>
                ))}
            </div>
            <Footer artist={artist}/>
        </div>
    )
}


export default Album;
