import React from 'react';
import Header from '../components/Header';
import ReviewList from '../components/ReviewList';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to Product Reviews</h1>
                <ReviewList />
            </main>
            <Footer />
        </div>
    );
};

export default Home;