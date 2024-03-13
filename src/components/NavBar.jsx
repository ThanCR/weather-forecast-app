import './NavBar.css';
import {FaCloud} from 'react-icons/fa'

function NavBar() {
  return (
    <div className="navBar">
      <ul className='navList'>
        <li>
          <FaCloud className='cloud'/>
        </li>
        <li><a href="#">Weather</a></li>
        <li><a href="#">Time Zones</a></li>
      </ul>
    </div>
  );
}

export default NavBar;
