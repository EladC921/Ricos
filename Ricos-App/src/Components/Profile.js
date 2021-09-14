import axios from 'axios'
import { useEffect, useState } from 'react'
import '../css/profile.css'
import ProfileMiniPost from './ProfileMiniPost'
import ProfilePicture from './ProfilePicture'

const Profile = (props) => {
    const [userInfo, setUserInfo] = useState([])
    const [recipes, setRecipes] = useState([])
    const uid = props.match.params.uid
    const jwt = localStorage.getItem('jwt')

    const headers = {
        "Authorization": "Bearer " + jwt,
    }

    const config = {
        headers: headers
    }

    const fetchUserInfo = () => {
        axios
            .get(`http://localhost:8081/users/${uid}`, config)
            .then((res) => {
                //console.log(res.data.result[0])
                if (res.data.result[0])
                    setUserInfo(res.data.result[0])
                else
                    setUserInfo(-1)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    const fetchUserRecipes = () => {
        axios
            .get(`http://localhost:8081/users/${uid}/recipes`)
            .then((res) => {
                //console.log(res.data.result)
                setRecipes(res.data.result)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    const followUser = () => {
        const data = {
            uid: uid
        }

        if (!userInfo.following) { // follow
            axios
                .post(`http://localhost:8081/users/follow`, data, config)
                .then((res) => {
                    //console.log(res)
                    fetchUserInfo()
                })
                .catch((err) => {
                    console.error(err)
                })
        } else { // unfollow
            axios
                .delete(`http://localhost:8081/users/unfollow`, { data, headers })
                .then((res) => {
                    fetchUserInfo()
                    //console.log(res)
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }

    useEffect(() => {
        fetchUserInfo()
        fetchUserRecipes()
    }, [])

    if (userInfo == -1)
        return (
            <div className="profile-container">
                <div style={{ textAlign: "center" }}>
                    User does not exist
                </div>
            </div>
        )
    else
        return (
            <div className="profile-container">

                <div className="profile-info">
                    <div className="profile-info-left">
                        <ProfilePicture size="lg" isLink={false} />
                    </div>

                    <div className="profile-info-center">
                        <div className="profile-name-and-follow">
                            <div className="profile-info-name">
                                {userInfo.firstName} {userInfo.lastName}
                            </div>

                            <div className="profile-follow">
                                <button className="follow-button" onClick={followUser}>
                                    {userInfo?.following ? "Unfollow" : "Follow"}
                                </button>
                            </div>
                        </div>

                        <div className="profile-info-bio">
                            {userInfo.bio}
                        </div>
                    </div>

                    <div className="profile-info-right">
                        <div className="profile-info-stats">
                            <span>
                                <strong>{userInfo.numOfRecipes}</strong> Recipes
                            </span>
                            <span>
                                <strong>{userInfo.numOfFollowers}</strong> Followers
                            </span>
                            <span>
                                <strong>{userInfo.numOfFollowing}</strong> Following
                            </span>
                        </div>
                    </div>

                </div>

                <div className="profile-posts">
                    {recipes.map((recipe, i) => {
                        return <ProfileMiniPost
                            key={i}
                            postId={recipe.rid}
                            title={recipe.title}
                            img={recipe.img}
                            description={recipe.description} />
                    })}
                    {/*<ProfileMiniPost
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
                    description="Delicious steak" /> */}
                </div>
            </div>
        )
}

export default Profile