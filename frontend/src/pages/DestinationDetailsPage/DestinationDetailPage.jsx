import * as destinationService from "../../services/destinationService";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function DestinationDetailsPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const destination = await destinationService.details(id);
      setPost(destination);
    }
    fetchPost();
  }, []);

  if(!post){
    return null;

  }

  return (
    <>
      <h1>Details Page</h1>
      <div>
        <h2>Category: {post.category} </h2>
        <h2> Name: {post.name}</h2>
        <h2> Description: {post.description}</h2>
        <h2> Comments: {post.comments}</h2>

        <div>
          <button onClick={() => post.handleFormView(post.selected)}>
            EDIT Destination
          </button>
        </div>
      </div>
    </>
  );
}
