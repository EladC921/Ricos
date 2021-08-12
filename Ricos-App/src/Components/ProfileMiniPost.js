import '../css/profileminipost.css'


const ProfileMiniPost = (props) => {
    const postId = props.postId
    const img = props.img
    const title = props.title
    const description = props.description

    return (
        <div className="profile-mini-post-container">
            <a href="#">

                <div className="profile-mini-post-img-container">
                    <img className="profile-mini-post-img" src={img} />
                </div>

                <div className="profile-mini-post-footer">
                    <div className="profile-mini-post-title">
                        {title}
                    </div>
                    <div className="profile-mini-post-description">
                        {description}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProfileMiniPost