import React from 'react';

const ReviewItem = ({ review }) => {
    return (
        <div className="review-item">
            <img src={review.image} alt={review.title} />
            <h3>{review.title}</h3>
            <p>{review.description}</p>
            <h4>Pros:</h4>
            <ul>
                {review.pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                ))}
            </ul>
            <h4>Cons:</h4>
            <ul>
                {review.cons.map((con, index) => (
                    <li key={index}>{con}</li>
                ))}
            </ul>
            <a href={review.affiliateLink} target="_blank" rel="noopener noreferrer">Buy Now</a>
        </div>
    );
};

export default ReviewItem;