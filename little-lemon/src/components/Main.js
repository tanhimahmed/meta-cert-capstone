import '../App.css';
import About from './About';
import HeroSection from './HeroSection';
import Menu from './Menu';
import Reviews from './Reviews';

function Main() {
    return (
        <main className="main">
            <HeroSection />
            <Menu />
            <Reviews />
            <About />
        </main>
    )
}

export default Main;