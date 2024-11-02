import './contact.css';


const Contact = (props) => (
    <div className='page contact gallery-theme'>
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

export default Contact;
