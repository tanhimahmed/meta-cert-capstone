import '../App.css';
import ReviewCard from './ReviewCard';
import lady1 from '../assets/images/1.jpg';
import lady2 from '../assets/images/2.jpg';
import dude1 from '../assets/images/3.jpg';
import dude2 from '../assets/images/4.jpg';

function Reviews() {
    return (
        <div className="reviews">
            <div className="reviewsHeader">
                <h1>Reviews</h1>
            </div>

            <div className="testimonials">
                <ReviewCard profileImg={lady1} profileName={"Mary"} altText={"mary"} />
                <ReviewCard profileImg={lady2} profileName={"Jane"} altText={"jane"} />
                <ReviewCard profileImg={dude1} profileName={"Apple"} altText={"apple"} />
                <ReviewCard profileImg={dude2} profileName={"Sauce"} altText={"sauce"} />
            </div>
        </div>
    )
}

export default Reviews;