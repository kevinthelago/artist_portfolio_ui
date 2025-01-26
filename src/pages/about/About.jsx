import Footer from '../../components/footer/Footer';
import './about.css';

const About = ({artist, settings}) => {
    return(
        <div className='page about gallery-theme flexc'>
            <div className="about-wrapper flexc">
                <div className="about-card">
                    <div className='about-card-image-wrapper'>
                        <img className='about-image' alt='' src={`${process.env.REACT_APP_IMAGES_URL}${artist.uuid}/${artist.image}`} />
                    </div>
                </div>
                <div className="description-card">
                    <div className="description-card-text">
                        {artist.about.split("\n").map(text => <h4 key={text}>{text}</h4>)}
                    </div>
                </div>
            </div>
            <Footer artist={artist} />
        </div>
    )
}

export default About;
