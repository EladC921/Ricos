import logo from '../img/logo.png';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import '../css/header.css';

const Header = () => {
    return (
        <div class="container-head">
            <div>
                <img id="logo-img" src={logo} alt="Logo!" />
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                <FontAwesomeIcon icon={faSmile} size="2x" />
            </div>
        </div>
    )
}
export default Header;