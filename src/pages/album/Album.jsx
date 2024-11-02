import './album.css';

const Album = (props) => {
    return(
        <div className={`page ${props.settings.theme}-theme`}>
            <div className='album'>
                {props.album.files.map((filename, i) => (
                    <div className='piece' style={{
                        background: `url(${process.env.REACT_APP_IMAGES_URL}/${filename})`
                    }}>
                
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Album;
