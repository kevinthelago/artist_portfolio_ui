import './contactCard.css';
import Icon from '../../icons/Icon';

const ContactCard = (props) => (
    <div className="contact-card">
        <div className='contact-card-image'>

        </div>
        <div className='contact-card-email'>
            {props.email}
        </div>
        <ul className='contact-card-icons'>
            {props.links.map((link, i) => {
                return(
                    <li key={link + i}>
                        <a className='icon-small flexc' href={link}>
                            <Icon link={link}/>
                        </a>
                    </li>
                )
            })}
        </ul>
    </div>
)

export default ContactCard;
