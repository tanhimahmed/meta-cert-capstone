import '../App.css';
import heroImg from '../assets/icons_assets/restaurant.jpg';

function HeroSection() {
    return (
        <div className="hero">
            <div className="col-4 heroItem">
                <h1>Welcome to Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Aliqua est officia aute nostrud ea enim tempor.</p>
                <button>Make reservation</button>
            </div>
            <div className="col-8 heroItem">
                <img className="heroImg" src={heroImg} alt="restaurant" />
            </div>
        </div>
    )
}

export default HeroSection;