import React, { useState } from 'react';

export function Star() {
    const [rated, setRated] = useState(false);
    const [rating, setRating] = useState();

    const handleStarClick = (starIndex) => {
        if (!rated) {
            setRating(starIndex);
            setRated(true);
            setRated(!rating)
        }
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((index) => (
                <span
                    key={index}
                    className="star"
                    onClick={() => handleStarClick(index)}
                    style={{ fontSize: '30px', cursor: 'pointer' }}
                >
                    {index <= rating ? '★' : '☆'}
                </span>
            ))}
                <p>
                    {rating}
                </p> 
        </div>
    );
}

