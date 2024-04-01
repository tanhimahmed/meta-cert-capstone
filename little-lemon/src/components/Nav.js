import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul className="headerMenu">
                <li><Link to={`/home`}>Home</Link></li>
                <li><Link to={`/about`}>About</Link></li>
                <li><Link to={`/menu`}>Menu</Link></li>
                <li><Link to={`/reservations`}>Reservations</Link></li>
                <li><Link to={`/hero`}>Order Online</Link></li>
                <li><Link to={`/login`}>Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;