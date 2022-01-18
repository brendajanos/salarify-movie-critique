import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {
    createReview,
    updateReviewById,
    deleteReviewById,
    getReviewById,
    getReviews,
} from './api'

async function main() {
    let res

    res = await createReview({
        id: 12,
        name: 'The Godfather II',
        year: '1976',
        director: 'Francis Ford Coppola',
        stars: 'Marlon Brando, Al Pacino',
        writers: 'Mario Puzo, Francis Ford Coppola',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        review: 'The Godfather follows Vito Corleone, Don of the Corleone family, as he passes the mantel to his unwilling son, Michael.',
        ratings: {
            directing: 5,
            acting: 4,
            costumeDesign: 5,
            editing: 5,
            music: 4,
            visualEffects: 2,
            screenplay: 5,
        },
    })
    console.log(res)
    res = await updateReviewById(12, { year: '1993' })
    console.log(res)

    res = await getReviews()
    console.log(res)

    res = await getReviewById(12)
    console.log(res)

    res = await deleteReviewById(12)
    console.log(res)

    res = await getReviews()
    console.log(res)
}
main()
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
