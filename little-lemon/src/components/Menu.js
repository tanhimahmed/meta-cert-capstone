import '../App.css';
import MenuCard from './MenuCard';
import cardImg1 from '../assets/icons_assets/greek salad.jpg';
import cardImg2 from '../assets/icons_assets/bruchetta.svg';
import cardImg3 from '../assets/icons_assets/lemon dessert.jpg';

function Menu() {
    let cardDesc = 'Nostrud sunt qui non non deserunt excepteur est veniam culpa eu mollit in.';

    return (
        <div className="highlights">
            <div className="highlightsHeader">
                <h1>Highlights</h1>
                <button>HUH</button>
            </div>
            <div className="highlightsMenu">
                <MenuCard cardTitle="Greek salad" cardImg={cardImg1} cardDesc={cardDesc} />
                <MenuCard cardTitle="Bruchetta" cardImg={cardImg2} cardDesc={cardDesc} />
                <MenuCard cardTitle="Lemon dessert" cardImg={cardImg3} cardDesc={cardDesc} />
            </div>
        </div>
    )
}

export default Menu;