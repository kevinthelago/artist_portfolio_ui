import Icon from '../../icons/Icon';
import './footer.css';

const Footer = ({ artist, settings }) => {
    return (
        <div className='footer'>
            <div className='footer-email'>
                <h4>
                    {artist.email}
                </h4>
            </div>
            <div className='footer-social-media-icons'>
                {
                    artist.links.map((link) => (
                        <a key={`footer-${link}-link`} className='footer-social-media-icon icon-28' href={link}>
                            <Icon link={link} />
                        </a>
                    ))
                }
            </div>
        </div>
    )
};

export default Footer;
