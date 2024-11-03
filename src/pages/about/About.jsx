import Footer from '../../components/footer/Footer';
import Icon from '../../icons/Icon';
import './about.css';

const About = ({artist, settings}) => {
    return(
        <div className='page about gallery-theme'>
            <div className="about-wrapper">
                <div className="about-card">
                    <div className='about-card-image-wrapper'>
                        <img className='about-image' alt='' src={`${process.env.REACT_APP_IMAGES_URL}${artist.image}`} />
                    </div>
                    <div className='about-card-email'>
                        <h2>
                            {artist.email}
                        </h2>
                    </div>
                </div>
                <div className="description-card">
                    <div className="description-card-text">
                        {artist.about.split("\n").map(text => <h4 key={text}>{text}</h4>)}
                    </div>
                    <ul className='contact-card-icons'>
                        {artist.links.map((link, i) => {
                            return (
                                <li key={link + i}>
                                    <a className='icon-24 flexc' href={link}>
                                        <Icon link={link}/>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <Footer artist={artist} />
        </div>
    )
}

export default About;
