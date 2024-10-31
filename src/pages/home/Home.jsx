import AlbumCover from '../../components/album-cover/AlbumCover';
import { Link } from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';
import video from './IMG_5829.MOV';
import './home.css';
import { useEffect } from 'react';

const AlbumDescription = (props) => (
    <div className='album-description'>
        <div className='text'>
            {props.album.name}
        </div>
    </div>
)

const Home = (props) => {
    useEffect(() => {
        document.getElementById("home-hero-video").play();
    })

    return(
        <div className='home page gallery-theme'>
            <div id='home-hero' className='hero'>
                <div className='overlay'>

                </div>
                <video id='home-hero-video' loop autoPlay muted>
                    <source src={video} type='video/mp4'/>
                </video>
            </div>
            <div className='albums-break'>

            </div>
                {
                    props.albums ? props.albums.map((album, i) => (
                        <ParallaxBanner 
                            className='parallax-banner' 
                            layers={[
                                {image: `${process.env.REACT_APP_IMAGES_URL}/${album.files[0]}`, speed: 10},
                                {children: (
                                    <div>
                                        {i % 2 === 0 ? <AlbumDescription key={album.name} album={album} /> : ""}
                                        <Link key={album.url} to={`/album/${album.url}`}
                                            className="album-link"
                                        >
                                        </Link>
                                        {i % 2 !== 0 ? <AlbumDescription key={album.name} album={album} /> : ""}
                                    </div>
                                ), speed: 10}
                            ]}
                        >

                        </ParallaxBanner>
                    )) : "Loading..."
                }
            {/* <div className='albums flexc'>
                {
                    props.albums ? props.albums.map((album, i) => 
                        <AlbumCover key={`album ${i}`} album={album}/>
                    ) : ""
                }
            </div> */}
        </div>
    )
};

export default Home;
