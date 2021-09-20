import '../css/post.css';
import ProfilePicture from './ProfilePicture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faPaperPlane, faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisV, faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import Comment from './Comment';
import axios from 'axios';
import { BASE_API_URL } from '../consts';
import { useEffect, useState } from 'react';

const Post = (props) => {
    const [likedState, setLikedState] = useState() // true if liked by current user
    const [numOfLikesState, setNumOfLikesState] = useState()

    const postId = props.postId
    const authorId = props.authorId
    const title = props.title
    const authorName = props.authorName
    const img = props.img
    const numOfLikes = numOfLikesState ? numOfLikesState : props.numOfLikes
    const description = props.description
    const liked = likedState ? likedState : (props.liked == 1)

    const jwt = localStorage.getItem('jwt')

    const headers = {
        "Authorization": "Bearer " + jwt,
    }

    const like = () => {
        if (!liked) { // like
            axios
                .post(BASE_API_URL + "/recipes/like", { rid: postId }, { headers })
                .then((res) => {
                    if (res.status == 200) {
                        console.log("liked post " + postId)
                        setNumOfLikesState(numOfLikes + 1)
                        setLikedState(true)
                    } else
                        console.error("error liking post " + postId)
                }).catch((err) => {
                    console.error(err)
                })
        } else { // unlike
            const data = {
                rid: postId
            }
            axios
                .delete(BASE_API_URL + "/recipes/unlike", { data, headers })
                .then((res) => {
                    if (res.status == 200) {
                        console.log("unliked post " + postId)
                        setNumOfLikesState(numOfLikes - 1)
                        setLikedState(false)
                    } else
                        console.error("error unliking post " + postId)
                }).catch((err) => {
                    console.error(err)
                })
        }

    }

    const comment = () => {
        alert("comment post #" + postId)
    }

    const share = () => {
        alert("share post #" + postId)
    }

    const unfollow = () => {
        const headers = {
            "Authorization": "Bearer " + jwt,
        }
        const data = {
            uid: authorId
        }
        axios
            .delete(`http://localhost:8081/users/unfollow`, { data, headers })
            .then((res) => {
                if (res.status == 200)
                    alert(`Unfollowed ${authorName} successfully`)
                else
                    alert(`Error unfollowing ${authorName}`)
            })
            .catch((err) => {
                console.error(err)
            })
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
                        <ProfilePicture id={authorId} size="sm" isLink={true} />
                    </div>
                </div>

                <div className="post-header-center">
                    <div className="post-recipe-title">
                        {title}
                    </div>
                    <div className="post-author">
                        <a href={"/profile/" + authorId}>
                            {authorName}
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
                    <img className="post-img" src={img} />
                </div>
            </div>

            <div className="post-footer">
                <div className="post-actions">
                    <FontAwesomeIcon icon={liked ? faHeartFilled : faHeartEmpty} size="lg" onClick={like} color={liked ? "red" : "black"} />
                    <FontAwesomeIcon icon={faComment} size="lg" onClick={comment} />
                    <FontAwesomeIcon icon={faPaperPlane} size="lg" onClick={share} />
                </div>

                <div className="post-likes">
                    {parseInt(numOfLikesState ? numOfLikesState : numOfLikes).toLocaleString()} likes
                </div>

                <div className="post-description">
                    {description}
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
    );
};

export default Post;
