import * as destinationService from "../../services/destinationService";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

export default function DestinationDetailsPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: "",
    name: "",
    description: "",
    comments: "",
  });

  useEffect(() => {
    async function fetchPost() {
      const destination = await destinationService.details(id);
      setPost(destination);
      setFormData({
        category: destination.category,
        name: destination.name,
        description: destination.description,
        comments: destination.comments,
      });
    }
    fetchPost();
  }, []);

  if(!post){
    return null;

  }
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  async function handleUpdate() {
    await destinationService.updateDestination(id, formData);
    setPost(formData); 
    setIsEditing(false); 
  }
  async function handleDelete(){
    await destinationService.deleteDestination(id);
    navigate ('/posts');
  }
  

  return (
    <>
      <h1>Destination Details</h1>

      {isEditing ? (
        <div>
          <h2>Edit Destination</h2>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
          <br />
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <br />
          <label>Comments:</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
          <br />
          <button onClick={handleUpdate}>Save Changes</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>Category: {post.category}</h2>
          <h2>Name: {post.name}</h2>
          <h2>Description: {post.description}</h2>
          <h2>Comments: {post.comments}</h2>

          <button onClick={() => setIsEditing(true)}> Update ✏️  </button>
          <button onClick={handleDelete} style={{ marginLeft: "10px", color: "red" }}>
            Delete ❌
          </button>
        </div>
      )}
    </>
  );
}