import { useState, useEffect } from "react";
import Posts from "../Components/Posts";
import { Link } from "react-router-dom";
import Comments from "../Components/Comments";
import "../Assets/Styles/Styles.css";

function FullPost(e) {
  const urlId = e.match.params.id;
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ username: "", content: "" });
  const [loadingComments, setLoadingComments] = useState(true);
  const [commentsArray, setCommentsArray] = useState([]);
  const getPostData = async () => {
    try {
      const response = await fetch("https://agustingrm-blog-api.herokuapp.com/posts/");
      const postData = await response.json();
      for (let i = 0; i < postData.length; i++) {
        if (postData[i]._id === urlId) {
          setData(postData[i]);
        }
      }
      setLoading(false);
      setData({ _id: data._id, author: data.author, time: data.time, title: data.title, content: data.content });
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getPostData();
  }, [loading]);

  const [data, setData] = useState({ _id: "", author: "", time: "", title: "", content: "" });

  const handleSubmitComment = (e) => {
    fetch("https://agustingrm-blog-api.herokuapp.com/comments/" + urlId, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(
        (result) => {},
        (error) => {
          console.log(error);
        }
      );
    e.preventDefault();
  };

  const getPostComments = async () => {
    try {
      const response = await fetch("https://agustingrm-blog-api.herokuapp.com/comments/");
      const data = await response.json();
      let commentsAccu = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].post === urlId) {
          commentsAccu.push(data[i]);
        }
      }
      setCommentsArray(commentsAccu);
      setLoadingComments(false);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getPostComments();
  }, [loadingComments, commentsArray]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <h1>Posts</h1>
      <Posts post={data} key={data._id} />
      <p>{data.content} </p>
      <section>
        <h2>New Comment</h2>
        <form onSubmit={handleSubmitComment}>
          <label>Author</label>
          <input type="text" label="username" name="username" value={form.username} onChange={handleChange} required />
          <label>Comment</label>
          <textarea type="text" label="content" name="content" value={form.content} onChange={handleChange} required></textarea>
          <input type="submit" value="Send Comment" />
        </form>
      </section>
      <section>
        {commentsArray.map((comment) => (
          <Comments comment={comment} key={comment._id} />
        ))}
        <Link to="/">Back to Home</Link>
      </section>
    </div>
  );
}

export default FullPost;
