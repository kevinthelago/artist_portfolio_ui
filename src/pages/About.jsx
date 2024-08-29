import AboutCard from '../components/about-card/AboutCard';

const About = (props) => {
    return(
        <div className='page gallery-theme'>
            <AboutCard artist={props.artist}/>
        </div>
    )
}

export default About;
