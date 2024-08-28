import { Link } from 'react-router-dom';
import './albumCover.css';

const Album = (props) => (
  <Link to={`/album/${props.album.url}`}
    className="album-cover flexc"
    style={{ backgroundImage: `url(https://artistportfolio-2d514932b001.herokuapp.com//api/v1/images/${props.album.files[0]})` }}
  >
    <div className="album-title">{props.album.name}</div>
  </Link>
);

export default Album;
