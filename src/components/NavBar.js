import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <div id='navbar'>
            <h4>BlogIT</h4>
            <div>
                <Link to='/' id='home-link'><span style={{marginRight:'20px'}}>Home</span></Link>
                <span>Login</span>
            </div>
            
        </div>
    );
}

export default NavBar;