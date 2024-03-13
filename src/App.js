import './App.css';
import WeatherSearch from './components/WeatherSearch';
import NavBar from './views/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <WeatherSearch/>
    </div>
  );
}

export default App;
