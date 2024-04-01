import '../App.css';
import ReviewCard from './ReviewCard';
import lady1 from '../assets/logo192.png';
import lady2 from '../assets/logo192.png';
import dude1 from '../assets/logo192.png';
import dude2 from '../assets/logo192.png';

function Reviews() {
    return (
        <div className="reviews">
            <div className="reviewsHeader">
                <h2>Reviews</h2>
            </div>

            <div className="testimonials wrapper">
                <ReviewCard profileImg={lady1} profileName={"Mary"} />
                <ReviewCard profileImg={lady2} profileName={"Jane"} />
                <ReviewCard profileImg={dude1} profileName={"Apple"} />
                <ReviewCard profileImg={dude2} profileName={"Sauce"} />
            </div>
        </div>
    )
}

export default Reviews;