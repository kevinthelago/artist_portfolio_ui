import './album.css';

const Album = (props) => {
    return(
        <div className={`page ${props.settings.theme}-theme`}>
            <div className='album-title'>
                {props.album.name}
            </div>
            <div className='album-pieces'>
                {props.album.files.map((filename, i) => (
                    <div className='album-piece' style={{
                        backgroundImage: `url(${process.env.REACT_APP_IMAGES_URL}${filename})`
                    }}>
                
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Album;
