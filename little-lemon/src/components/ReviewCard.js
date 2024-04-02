import '../App.css';
import star from '../assets/images/star.jpg';

function ReviewCard({ profileImg, profileName, altText }) {
    return (
        <div className="review">
            <div className="star-rating">
                <img width="20vw" src={star} alt="1star"/>
                <img width="20vw" src={star} alt="2star"/>
                <img width="20vw" src={star} alt="3star"/>
                <img width="20vw" src={star} alt="4star"/>
                <img width="20vw" src={star} alt="5star"/>
            </div>
            <div className="review-profile">
                <img width="70%" src={profileImg} alt={altText} />
                <h6>{profileName}</h6>
            </div>
            <div className="review-desc">Lorem impsum!</div>
        </div>
    )
}

export default ReviewCard;