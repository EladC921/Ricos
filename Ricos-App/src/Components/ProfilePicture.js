import logo from '../img/logo.png';
import '../css/profilepicture.css';

const ProfilePicture = () => {
    return (
        <div>
            <img className="profile-picture-img" src={logo} />
        </div>
    )
}

export default ProfilePicture