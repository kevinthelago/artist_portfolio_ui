import AlbumCover from '../components/album-cover/AlbumCover';

const Home = (props) => {
    return(
        <div className='page gallery-theme'>
            <div className='albums flexc'>
                {
                    props.albums ? props.albums.map((album, i) => 
                        <AlbumCover key={`album ${i}`} album={album}/>
                    ) : ""
                }
            </div>
        </div>
    )
};

export default Home;
