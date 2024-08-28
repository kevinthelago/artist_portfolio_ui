import './piece.css';

const Piece = (props) => (
    <div className='piece' style={{
        background: `url(http://localhost:8080/api/v1/images/${props.filename})`
    }}>

    </div>
)

export default Piece;
