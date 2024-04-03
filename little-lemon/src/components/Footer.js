import '../App.css';
import logo from '../assets/icons_assets/Logo.svg';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>    
            <div className="footer">
                <div className="footerLogo">
                    <img src={logo} alt="footer" />
                </div>
                <div className="footerLinks">
                    <ul className="doormat">
                        <li><Link to={`/home`}>Home</Link></li>
                        <li><Link to={`/about`}>About</Link></li>
                        <li><Link to={`/menu`}>Menu</Link></li>
                        <li><Link to={`/reservations`}>Reservations</Link></li>
                        <li><Link to={`/hero`}>Order online</Link></li>
                        <li><Link to={`/hero`}>Login</Link></li>
                    </ul>
                </div>
                <div className="footerInfo">
                    <div className="contactInfo">
                        contact info
                    </div>
                    <div className="socialLinks">
                        social media links
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;