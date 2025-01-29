export default function DestinationPost({ post }) {
    return (
      <article>
        <p>{post.category}</p>
        <p>{post.name}</p>
        <p>{post.description}</p>
        <p>{post.comments}</p>
        {/* <h4>🕺{post?.user?.name}</h4> */}
      </article>
    );
  }
  