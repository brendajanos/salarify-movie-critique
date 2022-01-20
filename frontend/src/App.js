//import './App.css'
import Navbar from './Components/Navbar/Navbar'
import './styles/custom.scss'
import ReviewCard from './Components/ReviewCard/ReviewCard'
import Pagination from 'react-bootstrap/Pagination'
import { useEffect, useState } from 'react'
import { getReviews } from './api'
import ModalContext from './modalContext'
import { Modal, Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

function App() {
    const [reviews, setReviews] = useState([])
    const [modal, setModal] = useState(null)

    useEffect(() => {
        const request = async () => {
            const response = await getReviews()
            setReviews(response)
        }
        request()
    }, [])

    const handleClose = () => {
        setModal(null)
    }

    return (
        <ModalContext.Provider value={{ modal, setModal }}>
            <div className="App">
                <Modal
                    show={modal !== null}
                    onHide={handleClose}
                    animation={false}
                >
                    <Image
                        src={modal ? modal.imgUrl : ''}
                        style={{ maxHeight: 200, objectFit: 'cover' }}
                    />
                    <Modal.Header>
                        <Modal.Title>{modal ? modal.name : ''}</Modal.Title>
                        <p>{modal ? modal.year : ''}</p>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            <strong>Director: </strong>
                            {modal ? modal.director : ''}
                        </p>
                        <p>
                            <strong>Stars: </strong>
                            {modal ? modal.stars : ''}
                        </p>
                        <p>
                            <strong>Writers: </strong>
                            {modal ? modal.writers : ''}
                        </p>
                        <p>
                            <strong>Review: </strong>
                            {modal ? modal.review : ''}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Delete
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Edit
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Navbar />
                <div className="container">
                    <div className="row gx-5  g-4">
                        {reviews.map((review) => (
                            <div className="col-lg-4 col-md-12">
                                <ReviewCard review={review} />
                            </div>
                        ))}
                    </div>
                    <div className="row gx-5">
                        <div className="d-flex flex-row-reverse">
                            <Pagination>
                                <Pagination.Prev> </Pagination.Prev>
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item active>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Next> </Pagination.Next>
                            </Pagination>
                        </div>
                    </div>
                </div>
            </div>
        </ModalContext.Provider>
    )
}

export default App
