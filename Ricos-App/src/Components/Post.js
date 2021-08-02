import '../css/post.css';
import ProfilePicture from './ProfilePicture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import Comment from './Comment';


const Post = (props) => {
    const postId = props.postId

    const like = () => {
        alert("like post #" + postId)
    }

    const comment = () => {
        alert("comment post #" + postId)
    }

    const share = () => {
        alert("share post #" + postId)
    }

    const unfollow = () => {
        alert("unfollow " + props.authorName)
    }

    const reportPost = () => {
        alert("report post #" + postId)
    }

    const keyPressed = (event) => {
        if (event.keyCode == 13) {
            alert("comment '" + event.target.value + "' on post #" + postId)
            event.target.value = ''
        }
    }


    return (
        <div className="post-container">

            <div className="post-header">
                <div className="post-header-left">
                    <div className="post-profile-picture">
                        <ProfilePicture authorId={props.authorId} />
                    </div>
                </div>

                <div className="post-header-center">
                    <div className="post-recipe-title">
                        {props.title}
                    </div>
                    <div className="post-author">
                        <a href={"/profile/" + props.authorId}>
                            {props.authorName}
                        </a>
                    </div>
                </div>

                <div className="post-header-right">
                    <Menu menuButton={<button className="dropdown-menu-button"><FontAwesomeIcon icon={faEllipsisV} /></button>}>
                        <MenuItem onClick={unfollow}>Unfollow</MenuItem>
                        <MenuItem onClick={reportPost}>Report</MenuItem>
                        {/*<SubMenu label="Open">
                            <MenuItem>index.html</MenuItem>
                        </SubMenu>*/}
                    </Menu>

                </div>
            </div>

            <div className="post-body">
                <div className="post-img-container" onDoubleClick={like}>
                    <img className="post-img" src={props.img} />
                </div>
            </div>

            <div className="post-footer">
                <div className="post-actions">
                    <FontAwesomeIcon icon={faHeart} size="lg" onClick={like} />
                    <FontAwesomeIcon icon={faComment} size="lg" onClick={comment} />
                    <FontAwesomeIcon icon={faPaperPlane} size="lg" onClick={share} />
                </div>

                <div className="post-likes">
                    {parseInt(props.likes).toLocaleString()} likes
                </div>

                <div className="post-description">
                    {props.description}
                </div>

                <div className="post-comments">
                    <Comment authorName="Chen" authorId="3" content="nadirrrrrrrrr" />
                    <Comment authorName="Nofer" authorId="4" content="mushlammm" />
                </div>

            </div>

            <div className="post-add-comment">
                <input class="add-comment-input" type="text" placeholder="Add a comment" onKeyDown={keyPressed}></input>
            </div>

        </div>
    )
}

export default Post;