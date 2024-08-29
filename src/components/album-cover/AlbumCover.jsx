import { Link } from 'react-router-dom';
import './albumCover.css';

const Album = (props) => (
  <Link to={`/album/${props.album.url}`}
    className="album-cover flexc"
    style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGES_URL}/${props.album.files[0]})` }}
  >
    <div className="album-title">{props.album.name}</div>
  </Link>
);

export default Album;
