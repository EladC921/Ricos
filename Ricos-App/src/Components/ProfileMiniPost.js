import '../css/profileminipost.css'


const ProfileMiniPost = (props) => {
    const postId = props.postId
    const img = props.img
    const title = props.title
    const description = props.description

    return (
        <a href="#">
            <div className="mini-post-container">

                <div className="mini-post-img-container">
                    <img className="mini-post-img" src={img} />
                </div>

                <div className="mini-post-footer">
                    <div className="mini-post-title">
                        {title}
                    </div>
                    <div className="mini-post-description">
                        {description}
                    </div>
                </div>

            </div>
        </a>
    )
}

export default ProfileMiniPost