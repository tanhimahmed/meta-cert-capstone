import '../App.css';
import aboutImg from '../assets/icons_assets/Mario and Adrian b.jpg';

function About() {
    return (
        <div className="about">
            <div className="aboutInfo">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Laboris laborum excepteur nulla culpa.</p>
            </div>
            <div className="aboutView">
                <img className="aboutImg" src={aboutImg} alt="about" />
            </div>
        </div>
    )
}

export default About;