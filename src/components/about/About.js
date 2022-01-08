import './about.css';
import Me from '../../img/me.jpeg';

const About = () => {
    return (
        <div className="about">
            <img src={Me} alt="" className="about-image" />
            <div className="about-text">
                <p>My name is Tim Renken. I currently work in a small compounding pharmacy, and would love to transition to a development/coding career.</p>
                <p>I live in Kirkland, WA where I love to play tennis, and hang out on the waterfront of Lake Washington.</p>
                <p>I will update this with more information and updated projects as the Bootcamp goes on, and turn this into a full fledged portfolio I will use to seek employment.</p>
            </div>
        </div>
    )
}

export default About
