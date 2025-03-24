import React from 'react';
import ReviewList from '../components/ReviewList';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Reviews = () => {
    return (
        <div>
            <Header />
            <h1>Product Reviews</h1>
            <ReviewList />
            <Footer />
        </div>
    );
};

export default Reviews;