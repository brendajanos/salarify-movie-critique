async function getReviews() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
    }

    return fetch('http://localhost:8000/reviews/', requestOptions)
        .then((response) => response.json())
        .catch((error) => console.log('error', error))
}

async function getReviewById(id) {
    let requestOptions = {
        method: 'GET',
    }

   return fetch(`http://localhost:8000/reviews/${id}`, requestOptions)
        .then((response) => response.json())
        .catch((error) => console.log('error', error))
}

async function createReview(newReview) {
    let myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    let raw = JSON.stringify(newReview)

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    }

    return fetch('http://localhost:8000/reviews/', requestOptions)
        .then((response) => response.json())
        .catch((error) => console.log('error', error))
}

async function updateReviewById(id,patch) {
    let myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    let raw = JSON.stringify(patch)

    let requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
    }

    return fetch(`http://localhost:8000/reviews/${id}`, requestOptions)
        .then((response) => response.json())
        .catch((error) => console.log('error', error))
}

async function deleteReviewById(id) {
    let requestOptions = {
        method: 'DELETE',
    }

    return fetch(`http://localhost:8000/reviews/${id}`, requestOptions)
        .then((response) => response.json())
        .catch((error) => console.log('error', error))
}

export {getReviews,getReviewById,createReview,updateReviewById,deleteReviewById};


/* 
{
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
    }
*/