import '../css/comment.css'

const Comment = (props) => {
    return (
        <div className="comment-container">
            <span className="comment-author">
                <a href={"/profile/" + props.authorId}>
                    {props.authorName}
                </a>
            </span>
            <span className="comment-content">{props.content}</span>
        </div>
    )
}

export default Comment