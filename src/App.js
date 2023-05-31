import './App.css';
import Poem from './Poem'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Squirrel Poems</h1>
      <div>
      <Poem />
      </div>
            <p style={{ fontSize: '16px' }}>This app creates poems from the <a
          href="https://data.cityofnewyork.us/Environment/2018-Central-Park-Squirrel-Census-Squirrel-Data/vfnx-vebw"
          className="App-link"
        >
        2018 Central Park Squirrel Census - Squirrel Data   
        </a> Hosted by <a 
          href="https://opendata.cityofnewyork.us/"
          className="App-link"
        > NYC Open Data</a>.
      </p>
      </header>
    </div>
  );
}

export default App;
