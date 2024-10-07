import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import Review from './Review';
import ReviewForm from './ReviewForm';

const ProductReviews = () => {
    const [productReviews, setProductReviews] = useState([
        { id: 1, author: 'Alice', text: 'Excellent service!', rating: 4 },
        { id: 2, author: 'Bob', text: 'Good product.', rating: 3 },
        { id: 3, author: 'Charlie', text: 'Fast delivery.', rating: 4 },
        { id: 4, author: 'David', text: 'Nice packaging.', rating: 3 }
    ]);

    const addReview = (review) => {
        const newReview = { ...review, id: productReviews.length + 1 };
        setProductReviews([...productReviews, newReview]);
    };

    const calculateAverageRating = () => {
        if (productReviews.length === 0) return 0;
        const sum = productReviews.reduce((total, review) => total + review.rating, 0);
        return sum / productReviews.length;
    };

    const generateRatingStars = () => {
        const rating = calculateAverageRating();
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars !== 0;

        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
        }
        if (hasHalfStar) {
            stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={'half'} />);
        }
        for (let i = stars.length; i < 5; i++) {
            stars.push(<FontAwesomeIcon icon={faStarRegular} key={i} />);
        }

        return stars;
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-6 offset-md-3 text-start p-3">
                    <h2 className="text-center">Product Reviews</h2>
                    <h5>Total Reviews: {productReviews.length}</h5>
                    <h5>Average Rating {calculateAverageRating().toFixed(1)} : <span style={{ color: 'gold' }}> {generateRatingStars()} </span></h5>
                    
                    
                    <div style={{ height: "200px", overflow: 'auto' }}>
                        <table className="table text-start">
                            <tbody>
                                {productReviews.map((review) => (
                                    <Review key={review.id} review={review} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>Share Your Thoughts</h3>
                    <ReviewForm handleReviewSubmit={addReview} />
                </div>
            </div>
        </div>
    );
};

export default ProductReviews;