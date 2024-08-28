import './piece.css';

const Piece = (props) => (
    <div className='piece' style={{
        background: `url(https://artistportfolio-2d514932b001.herokuapp.com/api/v1/images/${props.filename})`
    }}>

    </div>
)

export default Piece;
