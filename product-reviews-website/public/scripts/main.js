document.addEventListener('DOMContentLoaded', () => {
    const reviewList = document.getElementById('review-list');
    const premiumSection = document.getElementById('premium-section');

    // Function to fetch and display reviews
    const fetchReviews = async () => {
        try {
            const response = await fetch('/api/reviews');
            const reviews = await response.json();
            reviews.forEach(review => {
                const reviewItem = document.createElement('div');
                reviewItem.className = 'review-item';
                reviewItem.innerHTML = `
                    <h3>${review.title}</h3>
                    <p>${review.description}</p>
                    <p>Pros: ${review.pros.join(', ')}</p>
                    <p>Cons: ${review.cons.join(', ')}</p>
                `;
                reviewList.appendChild(reviewItem);
            });
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    // Function to handle premium subscription
    const handlePremiumSubscription = () => {
        alert('Redirecting to subscription page...');
        window.location.href = '/premium';
    };

    // Event listener for premium button
    if (premiumSection) {
        const premiumButton = premiumSection.querySelector('.subscribe-button');
        premiumButton.addEventListener('click', handlePremiumSubscription);
    }

    // Initial fetch of reviews
    fetchReviews();
});