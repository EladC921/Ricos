import logo from '../img/Logo.png';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import '../css/Header.css';

const Header = () =>{
    return(
        <div class="Container">
            <div>
                <img id="logoImg"src={logo} alt="Logo!"/>
            </div>
            <div>
                <SearchBar/>
            </div>
            <div>
                <FontAwesomeIcon icon={faSmile} size="2x"/>
            </div>
        </div>
    )
}
export default Header;