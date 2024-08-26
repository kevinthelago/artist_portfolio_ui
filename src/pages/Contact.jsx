import ContactCard from '../components/contact-card/ContactCard';

const Contact = (props) => (
    <div className='page gallery-theme'>
        <ContactCard email={props.contact.email} links={props.contact.links}/>
    </div>
)

export default Contact;
