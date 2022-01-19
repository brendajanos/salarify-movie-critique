import React from 'react'
import styles from './ReviewCard.module.css'

const ReviewCard = () => {
    return (
        <div className="card">
            <img
                src="https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                className={`${styles.reviewCardImage} card-img-top `}
                alt="..."
            />
            <div className={`${styles.reviewCardBody} card-body `}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
            </div>
        </div>
    )
}

export default ReviewCard
