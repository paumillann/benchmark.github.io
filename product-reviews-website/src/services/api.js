import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchReviews = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/reviews`);
        return response.data;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
};

export const fetchComparisonData = async (productId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/comparisons/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching comparison data:', error);
        throw error;
    }
};