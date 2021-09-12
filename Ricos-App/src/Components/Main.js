import Post from "./Post";
import "../css/main.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
    const [recipes, setRecipes] = useState([{}]);
    const id = 2 // this will be replaced with user id from the cookie (global context)

    const fetchRecipes = () => {
        axios
            .get(`http://localhost:8081/users/${id}/main`)
            .then((res) => {
                console.log(res.data.result)
                setRecipes(res.data.result)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchRecipes()
    }, []);

    return (
        <div class="container-main">
            {recipes.map((recipe, i) => {
                return (
                    <Post
                        key={i}
                        title={recipe.title}
                        authorId={recipe.uid}
                        authorName={recipe.fullName}
                        postId={recipe.rid}
                        img={recipe.img}
                        likes={recipe.numOfLikes}
                        description={recipe.description}
                    />
                );
            })}
        </div>
    );
};

export default Main;
