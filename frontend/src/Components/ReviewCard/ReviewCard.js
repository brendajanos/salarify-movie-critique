import React from 'react'
import modalContext from '../../modalContext'
import styles from './ReviewCard.module.css'
import { useContext } from 'react'

function calculateRating(ratings) {
    const sum =
        ratings.directing +
        ratings.acting +
        ratings.costumeDesign +
        ratings.editing +
        ratings.music +
        ratings.visualEffects +
        ratings.screenplay

    return Math.floor((sum / 7) * 10) / 10
}

const ReviewCard = ({ review }) => {
    const { setModal } = useContext(modalContext)
    const handleClick = () => {
        setModal({
            name: review.name,
            year: review.year,
            imgUrl: review.imgUrl,
            director: review.director,
            stars: review.stars,
            writers: review.writers,
            review: review.review,
        })
    }

    return (
        <div className="card" onClick={handleClick}>
            <img
                src={review.imgUrl}
                className={`${styles.reviewCardImage} card-img-top `}
                alt={review.name}
            />
            <div className={`${styles.reviewCardBody} card-body `}>
                <h5 className="card-title">{review.name}</h5>
                <div className="card-text">
                    <div className="d-flex justify-content-between">
                        <p>{review.year}</p>
                        <p>{calculateRating(review.ratings)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard
