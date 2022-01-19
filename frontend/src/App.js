import './App.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-header-leftSection">
                    <logo className="Logo">Logo</logo>
                    <homebutton className="HomeButton">Home</homebutton>
                    <addbutton className="AddButton">Add</addbutton>
                </div>
                <div className="App-header-rightSection">
                    <searchbar className="SearchBar">Search 
                      <button className="SearchButton">Search</button>
                    </searchbar>
                </div>
            </header>
            <div className="App-centerArea">
                <modal className="Modal"></modal>
                <pagination className="Pagination"></pagination>
            </div>
        </div>
    )
}

export default App
