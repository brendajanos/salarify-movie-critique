import './App.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-header-leftSection">
                    <logo>Logo</logo>
                    <homebutton>Home</homebutton>
                    <addbutton>Add</addbutton>
                </div>
                <div className="App-header-rightSection">
                    <searchbar>Search 
                      <button>Search</button>
                    </searchbar>
                </div>
            </header>
            <div className="App-centerArea">
                <modal></modal>
                <pagination></pagination>
            </div>
        </div>
    )
}

export default App
