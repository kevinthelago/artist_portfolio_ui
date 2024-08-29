import './piece.css';

const Piece = (props) => (
    <div className='piece' style={{
        background: `url(${process.env.REACT_APP_IMAGES_URL}/${props.filename})`
    }}>

    </div>
)

export default Piece;
