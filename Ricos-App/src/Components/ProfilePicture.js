import logo from '../img/logo.png';
import '../css/profilepicture.css';

const ProfilePicture = (props) => {
    const id = props.authorId

    return (
        <div>
            <a href={"/profile/" + id}>
                <img className="profile-picture-img" src={logo} />
            </a>
        </div>
    )
}

export default ProfilePicture