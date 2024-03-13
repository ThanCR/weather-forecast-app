import './WeatherSearch.css';
import {WiDaySunny} from 'react-icons/wi'

function WeatherSearch() {
  return (
    <div className="weatherSearch">
        <WiDaySunny className='icon'/>
        <div className='searchContainer'>
            <input type='text' placeholder='Insert city'/>
            <button>Search</button>
        </div>
    </div>
  );
}

export default WeatherSearch;