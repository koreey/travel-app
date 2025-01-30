import * as destinationService from "../../services/destinationService";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

export default function DestinationDetailsPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const navigate = useNavigate();

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
  async function handleDelete(){
    await destinationService.deleteDestination(id);
    navigate ('/posts');
  }

  return (
    <>
      <h1>Details Page</h1>
      <div>
        <button onClick={handleDelete}>Delete Destination</button>
        <h2>Category: {post.category} </h2>
        <h2> Name: {post.name}</h2>
        <h2> Description: {post.description}</h2>
        <h2> Comments: {post.comments}</h2>

        <div>
          <button onClick={() => navigate(`/edit/${id}`)}> Update Destination</button>
        </div>
      </div>
    </>
  );
}
