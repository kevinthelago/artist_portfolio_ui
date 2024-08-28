import Piece from '../components/piece/Piece';

const Album = (props) => {
    return(
        <div className='page gallery-theme'>
            <div className='album'>
                {
                    props.album.files.map((filename, i) => {
                        return <Piece key={`image-${i}`} filename={filename}/>
                    })
                }
            </div>
        </div>
    )
}


export default Album;
