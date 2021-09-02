import React from 'react';
import PropTypes from 'prop-types';
import logo from '../img/logo.png';
import '../css/profilepicture.css';

const ProfilePicture = (props) => {
    const id = props.id
    const size = props.size
    const isLink = props.isLink

    return (
        <div>
            {isLink ? // render with/without link to profile
                <a href={"/profile/" + id}>
                    <img className={"profile-picture-img-" + size} src={logo} />
                </a> :
                <img className={"profile-picture-img-" + size} src={logo} />}
        </div>
    )
}

ProfilePicture.propTypes = {
    size: PropTypes.oneOf(['sm', 'lg'])
}

ProfilePicture.defaultProps = {
    isLink: true
}

export default ProfilePicture