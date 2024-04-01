import '../App.css';
import aboutImg from '../assets/icons_assets/Mario and Adrian b.jpg';

function About() {
    return (
        <div className="about">
            <div className="col-4">
                <h2>Little Lemon</h2>
                <h6>Chicago</h6>
                <p>Laboris laborum excepteur nulla culpa.</p>
            </div>
            <div className="col-8">
                <img className="aboutImg" src={aboutImg} alt="about" />
            </div>
        </div>
    )
}

export default About;