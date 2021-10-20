import { useState, useEffect } from "react";
import Posts from "../Components/Posts";
import { Link } from "react-router-dom";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    try {
      const response = await fetch("https://agustingrm-blog-api.herokuapp.com/posts/");
      const postsData = await response.json();
      setPosts(postsData);
    } catch (e) {
      alert(e);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div>
          <Posts post={post} key={post._id} />
          <Link to={"/" + post._id}>See Post</Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
