import '../App.css';
import Nav from "./Nav";
import Logo from "./elements/Logo";

function Header() {
    return (
        <header className="header">
            <Logo />
            <Nav />
        </header>
    )
}

export default Header;