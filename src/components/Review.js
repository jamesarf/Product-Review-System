import React from 'react';

const Review = ({ review }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < review.rating; i++) {
            stars.push(<span key={i} style={{ color: 'gold' }}>★</span>);
        }
        return stars;
    };

    return (
        <tr>
            <th scope="row">{review.author}</th>
            <td>{review.text}</td>
            <td>Rating: {renderStars()}</td>
        </tr>
    );
};

export default Review;