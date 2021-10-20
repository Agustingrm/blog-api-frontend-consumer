function Comments(props) {
  const {username, content, time } = props.comment;

  return (
    <div>
      <p>Author: {username} </p>
      <p>Content: {content} </p>
      <p>Time: {time} </p>
    </div>
  );
}

export default Comments;
