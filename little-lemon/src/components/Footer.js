import '../App.css';
import logo from '../assets/logo192.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="footer wrapper">
                <div id="footerLogo" className="col-3">
                    <img src={logo} alt="footer" />
                </div>
                <div id="doormat" className="col-3">
                    <ul className="doormat">
                        <li><Link to={`/home`}>Home</Link></li>
                        <li><Link to={`/about`}>About</Link></li>
                        <li><Link to={`/highlights`}>Menu</Link></li>
                        <li><Link to={`/reservations`}>Reservations</Link></li>
                        <li><Link to={`/hero`}>Order online</Link></li>
                        <li><Link to={`/hero`}>Login</Link></li>
                    </ul>
                </div>
                <div id="contactInfo" className="col-3">
                    contact info
                </div>
                <div id="socialLinks" className="col-3">
                    social media links
                </div>
            </div>

        </footer>
    )
}

export default Footer;