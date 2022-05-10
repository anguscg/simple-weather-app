import logo from './logo.svg';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
// https://rapidapi.com/blog/weather-app-react/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <Forecast/>
      </header>
      <main>
        
      </main>
      <footer>
        Built by anguscg
      </footer>
    </div>
  );
}

export default App;
