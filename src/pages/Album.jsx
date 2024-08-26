import Piece from '../components/Piece/Piece';

const Album = (props) => {
    console.log(props)
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
