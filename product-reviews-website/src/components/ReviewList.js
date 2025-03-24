import React, { useEffect, useState } from 'react';
import ReviewItem from './ReviewItem';
import { fetchReviews } from '../services/api';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getReviews = async () => {
            try {
                const data = await fetchReviews();
                setReviews(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getReviews();
    }, []);

    if (loading) {
        return <div>Loading reviews...</div>;
    }

    if (error) {
        return <div>Error fetching reviews: {error}</div>;
    }

    return (
        <div className="review-list">
            {reviews.map(review => (
                <ReviewItem key={review.id} review={review} />
            ))}
        </div>
    );
};

export default ReviewList;