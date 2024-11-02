const About = (props) => {
    return(
        <div className='page gallery-theme'>
            <div className="about-card">
                <div className='about-card-description'>
                    {props.artist.about.split("\n").map(text => <h4>{text}</h4>)}
                </div>
                <div className='about-card-image-wrapper'>
                    <img className='about-image' alt='' src='https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                </div>
            </div>
        </div>
    )
}

export default About;
