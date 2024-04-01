import '../App.css';

function MenuCard({ cardImg, cardTitle, cardDesc }) {
    return (
        <div>
            <img src={cardImg} alt="menu card" />
            <h5>{cardTitle}</h5>
            <p>{cardDesc}</p>

            <button type="button">Order now</button>
        </div>
    )
}

export default MenuCard;