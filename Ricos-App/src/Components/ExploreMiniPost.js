import { useRef } from 'react';
import '../css/exploreminipost.css'


const ExploreMiniPost = (props) => {
    const postId = props.postId
    const img = props.img
    const title = props.title
    const author = props.author
    const authorId = props.authorId
    const description = props.description

    return (
        <div className="explore-mini-post-container">
            <a href="#">

                <div className="explore-mini-post-header">
                    <div className="explore-mini-post-title">
                        {title}
                    </div>
                    <div className="explore-mini-post-author">
                        <a href={"/profile/" + authorId}>
                            {author}
                        </a>
                    </div>
                </div>

                <div className="explore-mini-post-img-container">
                    <img className="explore-mini-post-img" src={img} />
                </div>

                <div className="explore-mini-post-footer">

                    <div className="explore-mini-post-description">
                        {description}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ExploreMiniPost