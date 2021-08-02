import logo from '../img/logo.png';
import '../css/post.css';
import ProfilePicture from './ProfilePicture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';


const Post = (props) => {
    return (
        <div className="container-post">

            <div className="post-header">
                <div className="post-header-left">
                    <div className="post-profile-picture">
                        <ProfilePicture id="" />
                    </div>
                </div>

                <div className="post-header-center">
                    <div className="post-recipe-title">
                        {props.title}
                    </div>
                    <div className="post-author">
                        {props.author}
                    </div>
                </div>

                <div className="post-header-right">
                    <FontAwesomeIcon icon={faEllipsisV} />
                </div>
            </div>

            <div className="post-body">
                <div className="post-img-container">
                    <img className="post-img" src={props.img}/>
                </div>
            </div>

            <div className="post-footer">
                <div className="post-actions">
                    <FontAwesomeIcon icon={faHeart} size="lg" />
                    <FontAwesomeIcon icon={faComment} size="lg" />
                    <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                </div>

                <div className="post-likes">
                    {parseInt(props.likes).toLocaleString()} likes
                </div>

                <div className="post-description">
                    {props.description}
                </div>
            </div>

        </div>
    )
}

export default Post;