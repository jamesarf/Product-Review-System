import React, { useState } from 'react';
import Rating from './Rating';

const ReviewForm = ({ handleReviewSubmit }) => {
    const [review, setReview] = useState({ author: '', text: '', rating: 0 });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReview({ ...review, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(review.rating === 0){
            alert("Please select a rating.");
            return;
        }
        handleReviewSubmit(review);
        setReview({ author: '', text: '', rating: 0 });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="text"
                    name="author"
                    placeholder="Your Name"
                    value={review.author}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    name="text"
                    placeholder="Write your review..."
                    value={review.text}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <Rating
                    handleRatingChange={(rating) => setReview({ ...review, rating })}
                    selectedRating={review.rating}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
    );
};

export default ReviewForm;