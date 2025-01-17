import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {
    createReview,
    updateReviewById,
    deleteReviewById,
    getReviewById,
    getReviews,
} from './api'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
