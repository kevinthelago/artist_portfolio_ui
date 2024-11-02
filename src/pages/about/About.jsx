import './about.css';
import image from './N4A0631.CR2';

const About = (props) => {
    return(
        <div className='page about gallery-theme'>
            <div className="about-card">
                <div className='about-card-image-wrapper'>
                    <img className='about-image' alt='' src={image}/>
                </div>
                <div className='about-card-description'>
                    {props.artist.about.split("\n").map(text => <h4 key={text}>{text}</h4>)}
                </div>
            </div>
            <div className="contact-card">
                <div className='contact-card-image'>

                </div>
                <div className='contact-card-email'>
                    {props.artist.email}
                </div>
                <ul className='contact-card-icons'>
                    {props.artist.links.map((link, i) => {
                        return(
                            <li key={link + i}>
                                <a className='icon-small flexc' href={link}>
                                    {/* <Icon link={link}/> */}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default About;
