import '../css/profile.css'
import ProfileMiniPost from './ProfileMiniPost'
import ProfilePicture from './ProfilePicture'

const Profile = (props) => {
    const id = props.match.params.id
    console.log(id)

    return (
        <div className="profile-container">

            <div className="profile-info">
                <div className="profile-info-left">
                    <ProfilePicture size="lg" isLink={false} />
                </div>

                <div className="profile-info-center">
                    <div className="profile-name-and-follow">
                        <div className="profile-info-name">
                            Shai Raz
                        </div>

                        <div className="profile-follow">
                            <button className="follow-button">Follow</button>
                        </div>
                    </div>

                    <div className="profile-info-bio">
                        Hello my name is Shai Raz and I love avocados 🥑 :)
                    </div>
                </div>

                <div className="profile-info-right">
                    <div className="profile-info-stats">
                        <span>
                            <strong>5</strong> Recipes
                        </span>
                        <span>
                            <strong>7</strong> Followers
                        </span>
                        <span>
                            <strong>58</strong> Following
                    </span>
                    </div>
                </div>

            </div>

            <div className="profile-posts">
                <ProfileMiniPost
                    postId="1"
                    title="Avocado Dip"
                    img="https://d1yfn1dfres2va.cloudfront.net/001/8c/f4/8cf48a1dac2eb3f409e62952dbbbd442_640m.jpg"
                    description="Very yummy avocado dip" />
                <ProfileMiniPost
                    postId="2"
                    title="Pizza Margherita"
                    img="http://cdn.shopify.com/s/files/1/0508/5514/9736/articles/8fe368762e1a65f1d82eb952ef5a0e71.jpg?v=1621429226"
                    description="Italian pizza" />
                <ProfileMiniPost
                    postId="3"
                    title="New York Strip"
                    img="https://i.pinimg.com/736x/ea/fd/60/eafd600a934d3fb7ef4a228387953485.jpg"
                    description="Delicious steak" />
                    <ProfileMiniPost
                    postId="3"
                    title="New York Strip"
                    img="https://i.pinimg.com/736x/ea/fd/60/eafd600a934d3fb7ef4a228387953485.jpg"
                    description="Delicious steak" />
                    <ProfileMiniPost
                    postId="3"
                    title="New York Strip"
                    img="https://i.pinimg.com/736x/ea/fd/60/eafd600a934d3fb7ef4a228387953485.jpg"
                    description="Delicious steak" />
            </div>
        </div>
    )
}

export default Profile