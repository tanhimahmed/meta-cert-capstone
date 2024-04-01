import '../App.css';

function ReviewCard({ profileImg, profileName }) {
    return (
        <div className="review wrapper">
            <div className="star-rating">*****</div>
            <div className="review-profile">
                <img src={profileImg} alt="profile" />
                <h6>{profileName}</h6>
            </div>
            <div className="review-desc">Lorem impsum!</div>
        </div>
    )
}

export default ReviewCard;