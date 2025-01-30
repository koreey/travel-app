import { useState } from "react"
import { useNavigate } from "react-router"
import * as destinationService from '../../services/destinationService';

const DestinationForm = () => {
  const { id } = useParams(); 
    const [category,setCategory] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState ('')
    const [comments, setComments] = useState('')
    const [err, setErr] = useState(null)
    const destination = {category, name, description, comments}
   

    const navigate = useNavigate();
    

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            const newDestination = await destinationService.create(destination);
            navigate('/posts');
          } catch (err) {
            console.log(err);
          }
    }

return(
    <form className="create" onSubmit={handleSubmit}>
        <h3> Add a New Destination! </h3>
        <label> Destination Category:</label>
        <input
        type="text"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        />
        <label>Name of Destination:</label>
        <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        />
        <label>Destination Description:</label>
        <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        />
        <label>Add Comments:</label>
        <input
        type="text"
        onChange={(e) => setComments(e.target.value)}
        value={comments}
        />

<button>ADD DESTINATION</button>
</form>

)
}

export default DestinationForm