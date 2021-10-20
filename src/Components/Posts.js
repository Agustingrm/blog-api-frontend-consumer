function Posts(props) {
  const { author, title, content, time } = props.post;

  return (
    <div>
      <section>
        <p>Author: {author} </p>
        <p>Date: {time} </p>
        <p>Title: {title} </p>
        <p>Content: {content} </p>
      </section>
    </div>
  );
}

export default Posts;
