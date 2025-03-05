import Footer from '../../components/footer/Footer';
import './album.css';

const Album = ({artist, album, settings}) => {
    album.pieces.sort(function (a, b) {
        return a.index - b.index
    })

    return(
        <div className={`page album ${settings.theme}-theme`} data-testid="album">
            <div className='album-title'>
                {album.name}
            </div>
            <div className='album-pieces'>
                {album.pieces.map((piece, i) => (
                    <div key={piece.file} className='album-piece-wrapper'>
                        <div className='album-piece' style={{
                            backgroundImage: `url(${process.env.REACT_APP_IMAGES_URL}${artist.uuid}/${piece.file})`
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
