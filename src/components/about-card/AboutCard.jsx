import './aboutCard.css';

const AboutCard = (props) => (
    <div className="about-card">
       <div className='about-card-description'>
            {props.artist.about}
        </div>
    </div>
)

export default AboutCard;
