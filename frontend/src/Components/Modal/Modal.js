import React, { useState } from 'react'
import './Modal.css'

export default function Modal() {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Movie
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Movie Title</h2>
                        <p>
                            id: 12, name: 'The Godfather II', year: '1976',
                            director: 'Francis Ford Coppola', stars: 'Marlon
                            Brando, Al Pacino', writers: 'Mario Puzo, Francis
                            Ford Coppola', imgUrl:
                            review: 'The Godfather follows Vito Corleone, Don of
                            the Corleone family, as he passes the mantel to his
                            unwilling son, Michael.',
                        </p>
                        <button className="delete-modal" onClick={toggleModal}>
                            Delete
                        </button>
                        <button className="edit-modal" onClick={toggleModal}>
                            Edit
                        </button>
                        <button className="close-modal" onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
