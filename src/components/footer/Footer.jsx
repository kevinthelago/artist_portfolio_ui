import Icon from '../../icons/Icon';
import './footer.css';

const Footer = ({artist, settings}) => {
    return(
        <div className='page footer'>
            <div className='footer-nav'>

            </div>
            <div className='footer-social-media-icons'>
                {
                    artist.links.map((link) => (
                        <div key={`footer-${link}-link`} className='footer-social-media-icon'>
                            <Icon link={link}/>
                        </div>
                    ))
                }
            </div>
            footer
        </div>
    )
};

export default Footer;
