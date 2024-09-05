import './aboutCard.css';

const AboutCard = (props) => (
    <div className="about-card">
       <div className='about-card-description'>
            {props.artist.about.split("\n").map(text => <h4>{text}</h4>)}
        </div>
    </div>
)

export default AboutCard;
