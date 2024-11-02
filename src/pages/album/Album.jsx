import { useEffect } from 'react';
import './album.css';

function scrollToTop() {
    console.log("scroll")
}

const Album = (props) => {
    return(
        <div className={`page ${props.settings.theme}-theme`}>
            <div className='albums'>
                {props.album.files.map((filename, i) => (
                    <div className='piece' style={{
                        background: `url(${process.env.REACT_APP_IMAGES_URL}/${filename}) no-repeat`
                    }}>
                
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Album;
