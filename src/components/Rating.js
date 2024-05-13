import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ handleRatingChange, selectedRating }) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [currentRating, setCurrentRating] = useState(0);

  useEffect(() => {
    setCurrentRating(selectedRating);
  }, [selectedRating]);

  const handleRatingSelect = (rating) => {
    setCurrentRating(rating);
    handleRatingChange(rating);
  };

  const handleRatingHover = (rating) => {
    setHoveredRating(rating);
  };

  const clearHover = () => {
    setHoveredRating(0);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleRatingSelect(i)}
          onMouseEnter={() => handleRatingHover(i)}
          onMouseLeave={clearHover}
          style={{
            fontSize: '50px',
            cursor: 'pointer',
            color: i <= (hoveredRating || currentRating) ? 'gold' : 'gray'
          }}
        >
          <FontAwesomeIcon icon={faStar} />
        </span>
      );
    }
    return stars;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {renderStars()}
    </div>
  );
};

export default Rating;
