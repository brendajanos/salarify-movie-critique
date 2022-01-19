//import './App.css'
import Modal from './Components/Modal/Modal'
import Navbar from './Components/Navbar/Navbar'
import './styles/custom.scss'
import ReviewCard from './Components/ReviewCard/ReviewCard'
import Pagination from 'react-bootstrap/Pagination'

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <div className="row gx-5 ">
                    <div className="col-lg-4 col-md-12">
                        <ReviewCard />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <ReviewCard />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <ReviewCard />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ReviewCard />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ReviewCard />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ReviewCard />
                    </div>
                 
                </div>
                <div className="row gx-5">
                    <div className='d-flex flex-row-reverse'>
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
    )
}

export default App
