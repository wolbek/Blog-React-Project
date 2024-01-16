import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar(props){
    return (
        <div id='navbar'>
            <h4>BlogIT</h4>
            <div>
                <Link to='/' id='home-link'><span >Home</span></Link>
                <button type='button' id='logout-btn' onClick={props.onLogout}>Logout</button>
            </div>
            
        </div>
    );
}

export default NavBar;