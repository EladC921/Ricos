import Post from "./Post";
import "../css/main.css";
import RecipeForm from "./RecipeForm";
import { useEffect, useState } from "react";

const Main = () => {
  const [postsState, setPostsState] = useState([{}]);

  const getPosts = () => {
    return fetch("http://localhost:8081/posts/")
      .then((res) => res.json())
      .then((data) => {
        return data
      });
  }

  useEffect(() => {
    getPosts().then((data) => {
      setPostsState(data)
    });
  }, []);

  return (
    <div class="container-main">
      {postsState.map((post, i) => {
        return (
          <Post
            key={i}
            title={post.title}
            authorId={post.authorId}
            authorName={post.authorName}
            postId={post.postId}
            img={post.img}
            likes={post.likes}
            description={post.description}
          />
        );
      })}
    </div>
  );
};

export default Main;
