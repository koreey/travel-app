export default function DestinationPost({ post }) {
    return (
      <article>
        <h4>{new Date(post.createdAt).toLocaleDateString()}</h4>
        <p>{post.destination}</p>
        <h4>🕺{post.user.name}</h4>
      </article>
    );
  }
  