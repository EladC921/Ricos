import logo from '../img/Logo.png';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faCompass } from '@fortawesome/free-regular-svg-icons'

import '../css/header.css';

const Header = () =>{
    return(
        <div class="container-head">
            <div>
                <img id="logo-img"src={logo} alt="Logo!"/>
            </div>
            <div>
                <SearchBar/>
            </div>
            <div className="social-icons-container">
                <a href="/">
                 <FontAwesomeIcon className="test" icon={faHospital} size="lg"/>
                </a>
                <a href="/">
                    <FontAwesomeIcon icon={faCompass} size="lg"/>
                </a>
                <a href="/">
                    <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                </a>
                <a href="/">
                    <FontAwesomeIcon icon={faUserCircle} size="lg"/>
                </a>

            </div>
        </div>
    )
}
export default Header;