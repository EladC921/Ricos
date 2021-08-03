import React from 'react';
import PropTypes from 'prop-types';
import logo from '../img/logo.png';
import '../css/profilepicture.css';

const ProfilePicture = (props) => {
    const id = props.id
    const size = props.size

    return (
        <div>
            <a href={"/profile/" + id}>
                <img className={"profile-picture-img-" + size} src={logo} />
            </a>
        </div>
    )
}

ProfilePicture.propTypes = {
    size: PropTypes.oneOf(['sm', 'lr'])
}

export default ProfilePicture