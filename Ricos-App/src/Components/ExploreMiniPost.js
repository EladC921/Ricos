import '../css/exploreminipost.css'


const ExploreMiniPost = (props) => {
    const postId = props.postId
    const img = props.img
    const title = props.title
    const description = props.description

    return (
        <a href="#">
            <div className="explore-mini-post-container">

                <div className="explore-mini-post-header">
                    <div className="explore-mini-post-title">
                        {title}
                    </div>
                    <div className="explore-mini-post-author">
                        {title}
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

            </div>
        </a>
    )
}

export default ExploreMiniPost