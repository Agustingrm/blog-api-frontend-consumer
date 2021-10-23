import dateFormat, { masks } from "dateformat";

function Posts(props) {
  const { author, title, content, time } = props.post;

  return (
    <div>
      <section>
        <p><span className='bold'>Author:</span> {author} </p>
        <p><span className='bold'>Date:</span> {dateFormat(time, "H:MM:ss d/m/yyyy ")} </p>
        <p><span className='bold'>Title:</span> {title} </p>
      </section>
    </div>
  );
}

export default Posts;
